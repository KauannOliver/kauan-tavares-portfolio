# Adding a project

1. Copy `src/content/projetos/_TEMPLATE.ts` to a file named after the intended public slug.
2. Fill the required identification, publication, context, categories, summary and technology fields using verified information. Keep unconfirmed dates, metrics and production state absent.
3. Add one named re-export in `src/content/projetos/index.ts`. The catalog aggregates registrations without component edits.
4. Set `automacao: true` when the project automates a process; it is independent of technology or category. `ordemDestaque` controls the featured order.
5. Use only public, reviewed fictitious-data dashboard links. A Power BI preview is opened by the user; no iframe is loaded initially.
6. Run `npm run validar -- --sync-pendencias`, `npm test`, `npm run lint` and `npm run build`.

`publicado: false` excludes a draft from public pages, metrics, navigation and sitemap. Unknown technologies generate a warning and use a fallback icon. Categories and technology IDs are registered in their corresponding content modules. The first category sets the visual accent.

Use stable `// PENDENTE:` identifiers for missing editorial information. The validator synchronizes `PENDENCIAS.md`. Narrative content and the existing UI remain in Portuguese; repository documentation is in English.

No deployment is performed by these commands. `SITE_URL` is required when explicitly running publication validation, and Git-driven Vercel deployment stays disabled in this repository.
