import { chromium } from "@playwright/test";
import lighthouse from "lighthouse";
import desktopConfig from "lighthouse/core/config/desktop-config.js";
import { mkdir, writeFile } from "node:fs/promises";

const origin = process.env.AUDIT_URL || "http://localhost:3000";
const paths = [
  "/",
  "/projeto/viagem-automatizada",
  "/projeto/demo-turnover",
  "/projeto/sonora-inteligencia-vocal",
  "/projeto/coleta-pracas-pedagio",
];
await mkdir(".reports", { recursive: true });
const browser = await chromium.launch({
  headless: true,
  args: ["--remote-debugging-port=9223"],
});
const summary = [];
try {
  for (const path of paths) {
    const name = path === "/" ? "home" : path.split("/").at(-1);
    const result = await lighthouse(
      new URL(path, origin).href,
      {
        port: 9223,
        output: ["json", "html"],
        logLevel: "error",
        onlyCategories: ["performance", "accessibility"],
      },
      desktopConfig,
    );
    await writeFile(`.reports/lighthouse-${name}.json`, result.report[0]);
    await writeFile(`.reports/lighthouse-${name}.html`, result.report[1]);
    const item = {
      path,
      performance: Math.round(result.lhr.categories.performance.score * 100),
      accessibility: Math.round(
        result.lhr.categories.accessibility.score * 100,
      ),
      lcp: result.lhr.audits["largest-contentful-paint"].displayValue,
      tbt: result.lhr.audits["total-blocking-time"].displayValue,
      cls: result.lhr.audits["cumulative-layout-shift"].displayValue,
    };
    summary.push(item);
    console.log(JSON.stringify(item));
  }
  await writeFile(
    ".reports/lighthouse-summary.json",
    JSON.stringify(
      { preset: "desktop", lighthouseVersion: "13.6.0", runs: summary },
      null,
      2,
    ),
  );
  if (summary.some((run) => run.performance <= 90 || run.accessibility <= 90))
    process.exitCode = 1;
} finally {
  await browser.close();
}
