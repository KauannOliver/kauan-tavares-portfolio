import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { getProjeto, paraCard, projetosPublicados } from "@/lib/catalogo";
import { getCategoria } from "@/content/categorias";
import { getTecnologia } from "@/content/tecnologias";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Pipeline } from "@/components/ui/Pipeline";
import { Icon } from "@/components/ui/Icon";
import { DashboardLauncher } from "@/components/dashboards/DashboardLauncher";
import { siteUrl } from "@/lib/seo";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return projetosPublicados.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projeto = getProjeto(slug);
  if (!projeto) return {};
  return {
    title: projeto.nome,
    description: projeto.resumo,
    ...(siteUrl
      ? { alternates: { canonical: `${siteUrl}/projeto/${slug}` } }
      : {}),
    openGraph: {
      title: projeto.nome,
      description: projeto.resumo,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: projeto.nome,
      description: projeto.resumo,
      images: [`/projeto/${slug}/opengraph-image`],
    },
  };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const projeto = getProjeto(slug);
  if (!projeto) notFound();
  const categoria = getCategoria(projeto.categorias[0])!;
  const index = projetosPublicados.findIndex((p) => p.slug === slug);
  const previous = projetosPublicados[index - 1];
  const next = projetosPublicados[index + 1];
  const relacionados = (projeto.relacionados ?? []).flatMap((slug) => {
    const item = getProjeto(slug);
    return item ? [item] : [];
  });
  const blocks = [
    {
      id: "problema",
      title: "O problema",
      text: projeto.problema,
      icon: "search",
    },
    {
      id: "solucao",
      title: "A solução",
      text: projeto.solucao,
      icon: "workflow",
    },
    {
      id: "como-foi-feito",
      title: "Como foi feito",
      text: projeto.comoFoiFeito,
      icon: "code",
    },
    { id: "impacto", title: "Impacto", text: projeto.impacto, icon: "target" },
    {
      id: "aprendizado",
      title: "O que aprendi",
      text: projeto.aprendizado,
      icon: "sparkles",
    },
  ];
  return (
    <main
      id="conteudo"
      className="project-page"
      style={{ "--accent": categoria.cor } as React.CSSProperties}
    >
      <div className="container">
        <Link className="back-link" href="/#projetos">
          <ArrowLeft size={15} />
          Todos os projetos
        </Link>
        <header className="project-hero">
          <div>
            <div className="detail-badges">
              {projeto.categorias.map((id) => (
                <span className="badge" key={id}>
                  {getCategoria(id)?.label}
                </span>
              ))}
              <span className="context-label">
                {projeto.contexto === "corporativo" ? "Corporativo" : "Pessoal"}
              </span>
              {projeto.ano ? <span>{projeto.ano}</span> : null}
              {projeto.emProducao ? (
                <span className="production-badge">
                  <CheckCircle2 size={13} />
                  Em produção
                </span>
              ) : null}
            </div>
            <h1>{projeto.nome}</h1>
            <p>{projeto.resumo}</p>
            {projeto.powerBiUrl ? (
              <span className="fiction-badge">Dados fictícios</span>
            ) : null}
            {projeto.links && Object.values(projeto.links).some(Boolean) ? (
              <div className="detail-links">
                {Object.entries(projeto.links)
                  .filter(([, url]) => url)
                  .map(([key, url]) => (
                    <a
                      key={key}
                      className="button button-secondary"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {key === "github"
                        ? "Código no GitHub"
                        : key === "demo"
                          ? "Acessar projeto"
                          : "Assistir vídeo"}
                      <ArrowUpRight size={15} />
                    </a>
                  ))}
              </div>
            ) : null}
          </div>
          <div className="detail-visual panel">
            <ProjectPreview slug={slug} categoria={categoria.id} />
            <span className="preview-label">
              PRÉVIA ILUSTRATIVA / {categoria.label.toUpperCase()}
            </span>
          </div>
        </header>
        {projeto.pipeline?.length ? (
          <section
            className="detail-pipeline panel"
            aria-labelledby="pipeline-title"
          >
            <p className="eyebrow" id="pipeline-title">
              FLUXO DA SOLUÇÃO
            </p>
            <Pipeline steps={projeto.pipeline} />
          </section>
        ) : null}
        <div className="detail-body">
          <aside className="detail-index">
            <p className="eyebrow">NESTE PROJETO</p>
            <nav aria-label="Seções do projeto">
              {blocks
                .filter(
                  (block) =>
                    block.text ||
                    (block.id === "impacto" && projeto.metricas?.length),
                )
                .map((block) => (
                  <a key={block.id} href={`#${block.id}`}>
                    {block.title}
                    <ArrowUpRight size={12} />
                  </a>
                ))}
              {projeto.tecnologias.length ? (
                <a href="#tecnologias">
                  Tecnologias
                  <ArrowUpRight size={12} />
                </a>
              ) : null}
              {projeto.powerBiUrl ? (
                <a href="#dashboard">
                  Dashboard
                  <ArrowUpRight size={12} />
                </a>
              ) : null}
            </nav>
            <p className="detail-index-note">
              Da necessidade ao processo.
              <br />
              Da solução ao aprendizado.
            </p>
          </aside>
          <div className="detail-content">
            {blocks.map((block) =>
              block.text ||
              (block.id === "impacto" && projeto.metricas?.length) ? (
                <section
                  id={block.id}
                  className="detail-block reveal"
                  key={block.id}
                >
                  <div className="detail-block-title">
                    <span className="tech-icon">
                      <Icon nome={block.icon} />
                    </span>
                    <h2>{block.title}</h2>
                  </div>
                  {block.text ? <p>{block.text}</p> : null}
                  {block.id === "solucao" && projeto.subcases?.length ? (
                    <div className="subcases">
                      {projeto.subcases.map((subcase) => (
                        <article key={subcase.titulo}>
                          <h3>{subcase.titulo}</h3>
                          {subcase.descricao ? (
                            <p>{subcase.descricao}</p>
                          ) : null}
                        </article>
                      ))}
                    </div>
                  ) : null}
                  {block.id === "impacto" && projeto.metricas?.length ? (
                    <div className="impact-metrics">
                      {projeto.metricas.map((m) => (
                        <div key={m.rotulo}>
                          <strong>{m.valor}</strong>
                          <span>{m.rotulo}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>
              ) : null,
            )}
            {projeto.tecnologias.length ? (
              <section id="tecnologias" className="detail-block reveal">
                <h2>Tecnologias utilizadas</h2>
                <ul className="detail-technologies">
                  {projeto.tecnologias.map((nome) => (
                    <li key={nome}>
                      <Icon nome={getTecnologia(nome)?.icone ?? "code"} />
                      {nome}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
            {projeto.powerBiUrl ? (
              <section id="dashboard" className="detail-block reveal">
                <h2>Explore o dashboard</h2>
                <p>Demonstração interativa com dados fictícios.</p>
                <div className="detail-dashboard">
                  <span className="fiction-badge">Dados fictícios</span>
                  <DashboardLauncher
                    nome={projeto.nome}
                    url={projeto.powerBiUrl}
                  />
                </div>
              </section>
            ) : null}
            {projeto.imagens?.length ? (
              <section className="detail-block">
                <h2>Galeria do projeto</h2>
                <div className="project-gallery">
                  {projeto.imagens.map((src, i) => (
                    <Image
                      src={src}
                      alt={`${projeto.nome} — visualização ${i + 1}`}
                      width={1200}
                      height={750}
                      unoptimized={src.startsWith("https:")}
                      key={src}
                    />
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
        {relacionados.length ? (
          <section className="related-section">
            <p className="eyebrow">CONTINUE EXPLORANDO</p>
            <h2>Projetos conectados</h2>
            <ul className="project-grid">
              {relacionados.map((p) => (
                <ProjectCard key={p.slug} projeto={paraCard(p)} />
              ))}
            </ul>
          </section>
        ) : null}
        <nav className="project-pagination" aria-label="Outros projetos">
          {previous ? (
            <Link href={`/projeto/${previous.slug}`}>
              <span>
                <ArrowLeft size={14} />
                Anterior
              </span>
              <strong>{previous.nome}</strong>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/projeto/${next.slug}`}>
              <span>
                Próximo
                <ArrowRight size={14} />
              </span>
              <strong>{next.nome}</strong>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </main>
  );
}
