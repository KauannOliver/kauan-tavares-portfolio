import { readFile, readdir, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { todosProjetos } from "../src/lib/catalogo";
import {
  extrairPendencias,
  renderPendencias,
  validarProjetos,
  type Pendencia,
} from "../src/lib/validacao";

async function lerPendencias(diretorio: string): Promise<Pendencia[]> {
  const entradas = await readdir(diretorio, { withFileTypes: true });
  const listas = await Promise.all(
    entradas.map(async (item) => {
      const path = join(diretorio, item.name);
      return item.isDirectory()
        ? lerPendencias(path)
        : item.name.endsWith(".ts")
          ? extrairPendencias(
              relative(process.cwd(), path).replaceAll("\\", "/"),
              await readFile(path, "utf8"),
            )
          : [];
    }),
  );
  return listas.flat();
}
const { erros, avisos } = validarProjetos(todosProjetos);
const pendencias = await lerPendencias(join(process.cwd(), "src/content"));
const ids = pendencias.map((p) => p.id);
if (new Set(ids).size !== ids.length)
  erros.push("IDs de pendências duplicados.");
const esperado = renderPendencias(pendencias);
if (process.argv.includes("--sync-pendencias"))
  await writeFile("PENDENCIAS.md", esperado);
else {
  const atual = await readFile("PENDENCIAS.md", "utf8").catch(() => "");
  if (atual.replaceAll("\r\n", "\n") !== esperado)
    erros.push(
      "PENDENCIAS.md divergente. Execute npm run validar -- --sync-pendencias.",
    );
}
if (process.argv.includes("--publicacao")) {
  try {
    const url = new URL(process.env.SITE_URL ?? "");
    if (
      url.protocol !== "https:" ||
      ["localhost", "127.0.0.1"].includes(url.hostname) ||
      url.pathname !== "/" ||
      url.username ||
      url.password ||
      url.search ||
      url.hash
    )
      throw new Error();
  } catch {
    erros.push("Publicação exige SITE_URL com uma origem HTTPS válida.");
  }
  const revisoes = pendencias.filter((p) => p.id.endsWith(".revisao-publica"));
  if (revisoes.length)
    erros.push(
      `${revisoes.length} dashboards ainda precisam da revisão pública de confidencialidade registrada no conteúdo.`,
    );
}
for (const aviso of avisos) console.warn(`AVISO: ${aviso}`);
for (const p of pendencias) console.warn(`PENDENTE: [${p.id}] ${p.texto}`);
for (const erro of erros) console.error(`ERRO: ${erro}`);
console.log(
  `${todosProjetos.length} projetos; ${erros.length} erros; ${avisos.length} avisos de cadastro; ${pendencias.length} pendências editoriais.`,
);
process.exitCode = erros.length ? 1 : 0;
