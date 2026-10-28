import type { Filtros, ProjetoCard } from "../content/tipos";
const normalizar = (texto: string) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
export const filtrosIniciais: Filtros = {
  categoria: "todos",
  contexto: "todos",
  tecnologia: "",
  busca: "",
};
export function filtrarProjetos<T extends ProjetoCard>(
  projetos: T[],
  filtros: Filtros,
): T[] {
  const busca = normalizar(filtros.busca.trim());
  return projetos.filter(
    (p) =>
      (filtros.categoria === "todos" ||
        p.categorias.some((id) => id === filtros.categoria)) &&
      (filtros.contexto === "todos" || p.contexto === filtros.contexto) &&
      (!filtros.tecnologia ||
        p.tecnologias.some(
          (t) => t.toLowerCase() === filtros.tecnologia.toLowerCase(),
        )) &&
      (!busca ||
        normalizar([p.nome, p.resumo, ...p.tecnologias].join(" ")).includes(
          busca,
        )),
  );
}
export function queryFiltros(filtros: Filtros) {
  const literal = (texto: string) => texto.replaceAll("'", "''");
  const clauses = [
    filtros.categoria !== "todos"
      ? `categoria = '${literal(filtros.categoria)}'`
      : "",
    filtros.contexto !== "todos"
      ? `contexto = '${literal(filtros.contexto)}'`
      : "",
    filtros.tecnologia ? `tecnologia = '${literal(filtros.tecnologia)}'` : "",
    filtros.busca ? `busca = '${literal(filtros.busca)}'` : "",
  ].filter(Boolean);
  return `SELECT * FROM projetos${clauses.length ? ` WHERE ${clauses.join(" AND ")}` : ""};`;
}
