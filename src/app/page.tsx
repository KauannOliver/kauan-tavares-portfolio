import { Github, Linkedin } from "@/components/ui/SocialIcons";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { perfil } from "@/content/perfil";
import { getCategoria } from "@/content/categorias";
import {
  categoriasAtivas,
  getDestaques,
  dashboards,
  metricasCatalogo,
  paraCard,
  projetosPublicados,
  tecnologiaContagens,
} from "@/lib/catalogo";
import { HeroNetwork } from "@/components/effects/HeroNetwork";
import { ScrambleText } from "@/components/effects/ScrambleText";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Pipeline } from "@/components/ui/Pipeline";
import { Metrics } from "@/components/sections/Metrics";
import { ProjectExplorer } from "@/components/projects/ProjectExplorer";
import { CategoryPreview } from "@/components/projects/CategoryPreview";
import { DashboardLauncher } from "@/components/dashboards/DashboardLauncher";
import { TechnologyStack } from "@/components/sections/TechnologyStack";
import { ContactActions } from "@/components/sections/ContactActions";

export default function HomePage() {
  const destaque = getDestaques();
  return (
    <main id="conteudo">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="live-dot" /> AUTOMAÇÃO · DESENVOLVIMENTO · DADOS
          </p>
          <p className="hero-name">
            Olá, eu sou Kauan Tavares<span className="name-dot">.</span>
          </p>
          <h1 id="hero-title">
            Automação,
            <br />
            <span className="hero-development">Desenvolvimento</span>
            <br />e{" "}
            <span className="hero-data">
              Dados<span className="name-dot">.</span>
            </span>
          </h1>
          <p className="hero-description">{perfil.frase}</p>
          <div className="hero-actions">
            <MagneticLink href="#projetos" className="button-primary">
              Ver projetos <ArrowDown size={17} />
            </MagneticLink>
            <MagneticLink href="#contato" className="button-secondary">
              Contato <ArrowUpRight size={17} />
            </MagneticLink>
            <div className="hero-social">
              <a
                href={perfil.github}
                aria-label="GitHub de Kauan Tavares"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href={perfil.linkedin}
                aria-label="LinkedIn de Kauan Tavares"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="hero-terminal">
            <span className="hero-terminal-label">O QUE EU CONECTO</span>
            <ScrambleText />
          </div>
        </div>
        <HeroNetwork />
        <div className="hero-bottom">
          <span>DA NECESSIDADE À SOLUÇÃO</span>
          <a href="#destaques">
            Explore meu trabalho <ArrowDown size={13} />
          </a>
          <span>LOGÍSTICA / RH / GESTÃO</span>
        </div>
      </section>
      <Metrics metricas={metricasCatalogo()} manuais={perfil.metricas} />
      {destaque.length ? (
        <section id="destaques" className="section container">
          <SectionHeading
            numero="01"
            label="CASOS EM DESTAQUE"
            title={
              <>
                Processos conectados.
                <br />
                <span>Trabalho que acontece.</span>
              </>
            }
          >
            Da informação dispersa ao processo integrado. Conheça o caminho por
            trás de cada solução.
          </SectionHeading>
          {destaque.map((projeto) => (
            <article
              key={projeto.slug}
              className="featured-case panel reveal"
              style={
                {
                  "--accent": getCategoria(projeto.categorias[0])!.cor,
                } as React.CSSProperties
              }
            >
              <div className="featured-top">
                <div>
                  <p className="eyebrow">
                    <Icon
                      nome={getCategoria(projeto.categorias[0])!.icone}
                      size={15}
                    />
                    {getCategoria(projeto.categorias[0])!.label} /{" "}
                    {projeto.contexto === "corporativo"
                      ? "Corporativo"
                      : "Pessoal"}
                  </p>
                  <h3>{projeto.nome}</h3>
                  <p>{projeto.solucao || projeto.resumo}</p>
                  <div className="featured-sectors">
                    {projeto.subcases?.map((subcase) => (
                      <span key={subcase.titulo}>{subcase.titulo}</span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/projeto/${projeto.slug}`}
                  className="button button-secondary"
                >
                  Conhecer o case <ArrowUpRight size={17} />
                </Link>
              </div>
              {projeto.pipeline?.length ? (
                <Pipeline steps={projeto.pipeline} />
              ) : null}
              <div className="featured-footer">
                <span className="mono">TECNOLOGIAS UTILIZADAS</span>
                <div className="tech-tags">
                  {projeto.tecnologias.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      ) : null}
      <section id="projetos" className="section container">
        <SectionHeading
          numero="02"
          label="EXPLORAR PROJETOS"
          title={
            <>
              Cada desafio,
              <br />
              <span>uma nova conexão.</span>
            </>
          }
        >
          Automações, aplicações e dados. Explore os projetos por área, contexto
          ou tecnologia.
        </SectionHeading>
        <ProjectExplorer
          projetos={projetosPublicados.map(paraCard)}
          categorias={categoriasAtivas.map(({ id, label }) => ({ id, label }))}
        />
      </section>
      {dashboards.length ? (
        <section id="dashboards" className="section dashboard-section">
          <div className="container">
            <SectionHeading
              numero="03"
              label="LABORATÓRIO DE DADOS"
              title={
                <>
                  Dados que contam
                  <br />
                  <span>uma história.</span>
                </>
              }
            >
              Explore os dashboards interativos em Power BI. Todas as
              demonstrações utilizam dados fictícios.
            </SectionHeading>
            <div className="dashboard-gallery">
              {dashboards.map((projeto) => (
                <article
                  key={projeto.slug}
                  className="dashboard-card panel reveal"
                  style={{ "--accent": "#F2C811" } as React.CSSProperties}
                >
                  <div className="dashboard-preview">
                    <CategoryPreview categoria="power-bi" />
                    <span className="fiction-badge">Dados fictícios</span>
                  </div>
                  <div className="dashboard-copy">
                    <p className="eyebrow">POWER BI / DEMONSTRAÇÃO</p>
                    <h3>{projeto.nome.replace(/^DEMO - /, "")}</h3>
                    <p>{projeto.resumo}</p>
                    <DashboardLauncher
                      nome={projeto.nome}
                      url={projeto.powerBiUrl!}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <section id="stack" className="section container">
        <SectionHeading
          numero="04"
          label="FERRAMENTAS & CONEXÕES"
          title={
            <>
              A ferramenta certa.
              <br />
              <span>Para o problema real.</span>
            </>
          }
        >
          Tecnologias presentes nos projetos publicados. Selecione uma delas
          para ver onde foi aplicada.
        </SectionHeading>
        <TechnologyStack tecnologias={tecnologiaContagens()} />
      </section>
      <section id="sobre" className="section container about-section">
        <div className="about-intro">
          <SectionHeading
            numero="05"
            label="ALÉM DO CÓDIGO"
            title={
              <>
                Tecnologia com
                <br />
                <span>contexto.</span>
              </>
            }
          />
          <div className="about-copy">
            {perfil.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="about-signature">
            <span className="brand-mark">
              k<span>.</span>t
            </span>
            <span>
              Kauan Tavares<small>AUTOMAÇÃO, DESENVOLVIMENTO E DADOS</small>
            </span>
          </div>
        </div>
        <ol className="timeline">
          {perfil.timeline.map((item) => (
            <li className="reveal" key={item.ano}>
              <span className="timeline-year">{item.ano}</span>
              <div>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section id="contato" className="section container">
        <div className="contact-panel panel reveal">
          <p className="eyebrow">
            <span className="live-dot" /> VAMOS CONECTAR?
          </p>
          <h2>
            Qual processo podemos
            <br />
            <span>transformar juntos?</span>
          </h2>
          <p>
            Uma ideia, um desafio ou uma boa conversa sobre tecnologia.
            <br />O próximo passo começa com uma conexão.
          </p>
          <ContactActions
            email={perfil.email}
            github={perfil.github}
            linkedin={perfil.linkedin}
          />
          <span className="contact-decoration" aria-hidden="true">
            ↗
          </span>
        </div>
      </section>
    </main>
  );
}
