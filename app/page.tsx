import Image from "next/image";
import { CopiarTelefone } from "./copiar-telefone";
import { InstagramIcon, SiteHeader, SiteFooter } from "@/components/site";
import { site, whatsappUrl } from "@/lib/site";

const msgGeral = "Olá, Paulo! Vi os pacotes de vídeo da Capio Produções e quero conversar.";
const msgPacote = (nome: string) => `Olá, Paulo! Tenho interesse no ${nome}.`;

const pacotes = [
  {
    nome: "Avulso",
    para: "Para conhecer o trabalho, sem compromisso.",
    preco: "R$ 300",
    unidade: "sem mensalidade",
    detalhe: "2 vídeos",
    economia: null,
    itens: ["2 vídeos verticais de 30 a 60 s", "1 visita de gravação", "1 rodada de ajuste por vídeo"],
    msg: msgPacote("pacote Avulso"),
    destaque: false,
  },
  {
    nome: "Básico",
    para: "Um vídeo novo toda semana.",
    preco: "R$ 550",
    unidade: "/ mês",
    detalhe: "4 vídeos",
    economia: null,
    itens: ["4 vídeos verticais de 30 a 60 s", "1 visita de gravação por mês", "1 rodada de ajuste por vídeo"],
    msg: msgPacote("pacote Básico"),
    destaque: false,
  },
  {
    nome: "Mensal",
    para: "Vídeo e carrossel com o mês todo planejado.",
    preco: "R$ 800",
    unidade: "/ mês",
    detalhe: "6 vídeos + 3 carrosséis",
    economia: "6 vídeos avulsos sairiam R$ 900. Aqui você paga menos e ainda leva carrosséis e calendário.",
    itens: [
      "6 vídeos verticais de 30 a 60 s",
      "3 carrosséis",
      "Calendário de postagem",
      "1 visita de gravação por mês",
      "1 rodada de ajuste por vídeo",
    ],
    msg: msgPacote("pacote Mensal"),
    destaque: true,
  },
  {
    nome: "Rede",
    para: "Para quem tem duas ou mais unidades.",
    preco: "R$ 1.000",
    unidade: "/ mês",
    detalhe: "8 vídeos + 6 carrosséis",
    economia: "8 vídeos avulsos sairiam R$ 1.200. O menor preço por vídeo, com o dobro de carrosséis.",
    itens: [
      "8 vídeos verticais de 30 a 60 s",
      "6 carrosséis",
      "Calendário de postagem",
      "Gravação nas unidades",
      "1 rodada de ajuste por vídeo",
    ],
    msg: msgPacote("pacote Rede"),
    destaque: false,
  },
];

const trabalhos = [
  {
    empresa: "Dentalli",
    segmento: "Clínica odontológica",
    tipo: "Depoimento",
    duracao: "2:00",
    video: "/media/dentalli-depoimento.mp4",
    poster: "/media/dentalli-poster.jpg",
  },
  {
    empresa: "LR Odontologia",
    segmento: "Consultório odontológico",
    tipo: "Bastidores",
    duracao: "0:51",
    video: "/media/odonto-reel.mp4",
    poster: "/media/odonto-poster.jpg",
  },
];

const profissionais = [
  {
    nome: "Paulo César",
    cargo: "Videomaker há 3 anos · Especialista em empresas e real time",
    tags: ["Vídeos para empresas", "Real time", "Editor DaVinci Resolve", "Drone FPV"],
    instagram: "paulocessar",
    foto: "/media/paulo-cesar.jpg",
    alt: "Paulo César, videomaker, segurando a câmera",
  },
  {
    nome: "Alex Gomes",
    cargo: "Empreendedor · Especialista em casamentos e empresas, foto e filme, há 14 anos",
    tags: ["Casamentos", "Empresas", "Fotografia", "Filme"],
    instagram: "alexgomesfotografia",
    foto: "/media/alex-gomes.jpg",
    alt: "Alex Gomes, fotógrafo, segurando a câmera",
  },
];

const tipos = [
  { label: "Bastidores", titulo: "Como é feito", texto: "O preparo do prato, a fornada saindo, o atendimento passo a passo. O processo vende o resultado." },
  { label: "Transformação", titulo: "Antes e depois", texto: "Corte, tosa, tratamento, sorriso. O vídeo mais compartilhado de qualquer serviço visual." },
  { label: "Depoimento", titulo: "Quem já é cliente", texto: "Clientes reais contando a experiência, com legenda e ritmo de reel." },
  { label: "Propaganda", titulo: "Sua empresa em cinema", texto: "Um vídeo de apresentação com cara de filme, para o perfil, anúncios e o site." },
];

const etapas = [
  { titulo: "Conversa", texto: "Entendo o seu negócio, o que os clientes mais elogiam e o que você quer mostrar." },
  { titulo: "Gravação", texto: "Uma visita de até 2 horas por mês, combinada no melhor horário para não atrapalhar o atendimento. Gravo todos os vídeos do mês de uma vez." },
  { titulo: "Edição", texto: "Corte, cor, legendas, texto na tela e trilha. Você recebe os vídeos em até 5 dias úteis." },
  { titulo: "Ajuste e post", texto: "Uma rodada de ajuste por vídeo, e eles estão prontos para o Reels, o TikTok e o Status." },
];

export default function Home() {
  const wa = (m: string) => ({ href: whatsappUrl(m), target: "_blank", rel: "noopener noreferrer" });

  return (
    <>
      <SiteHeader />

      <main className="cpe">
        <div className="wrap">
          <div className="hero">
            <div>
              <span className="label">Vídeos para empresas · Brasília, DF</span>
              <h1>
                Sua empresa <em>em cena</em> toda semana
              </h1>
              <p className="lede">
                Reels e vídeos curtos gravados e editados por um filmmaker. Uma visita de gravação por mês, vídeos
                prontos para postar em até 5 dias úteis.
              </p>
              <div className="ctas">
                <a className="btn" {...wa(msgGeral)}>Chamar no WhatsApp</a>
                <a className="btn ghost" href="#pacotes">Ver pacotes e valores</a>
              </div>
            </div>
            <div className="frame">
              <video
                src="/media/odonto-reel.mp4"
                poster="/media/odonto-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Reel gravado para a LR Odontologia"
              />
              <div className="row" aria-hidden="true">
                <span className="rec"><i />REC</span>
                <span>9:16</span>
              </div>
              <div className="bottom">
                <div className="title">
                  LR Odontologia<small>Consultório odontológico · Reel · 00:00:45:12</small>
                </div>
                <div className="row" aria-hidden="true">
                  <span>4K</span>
                  <span>30–60 s</span>
                </div>
              </div>
            </div>
          </div>

          <section>
            <div className="head">
              <span className="label">O que eu gravo</span>
              <h2>Vídeos que mostram o que os seus clientes já elogiam</h2>
              <p>A sua avaliação no Google já diz que o trabalho é bom. O vídeo leva isso para o Instagram, onde o cliente novo decide.</p>
            </div>
            <div className="types">
              {tipos.map((t) => (
                <div className="type" key={t.titulo}>
                  <span className="label">{t.label}</span>
                  <h3>{t.titulo}</h3>
                  <p>{t.texto}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="trabalhos">
            <div className="head">
              <span className="label">Trabalhos</span>
              <h2>Vídeos que já gravei para empresas</h2>
              <p>Toque no vídeo para assistir com som.</p>
            </div>
            <div className="works">
              {trabalhos.map((t) => (
                <article className="work" key={t.empresa}>
                  <div className="work-video">
                    <video src={t.video} poster={t.poster} controls playsInline preload="none" aria-label={`${t.tipo} para ${t.empresa}`} />
                  </div>
                  <h3>{t.empresa}</h3>
                  <p className="work-meta">
                    {t.segmento} · {t.tipo} · Reel · {t.duracao}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="pro">
            <div className="head">
              <span className="label">Profissionais</span>
              <h2>Quem está por trás das câmeras</h2>
              <p>
                A ideia é simples: mostrar o melhor da sua empresa de um jeito que faça o cliente parar de rolar a tela
                e chamar você.
              </p>
            </div>
            <div className="pro-grid">
              {profissionais.map((pr) => (
                <article className="pro-card" key={pr.instagram}>
                  <div className="pro-foto">
                    <Image src={pr.foto} alt={pr.alt} width={720} height={960} sizes="(max-width: 760px) 100vw, 480px" />
                  </div>
                  <div className="pro-texto">
                    <h3>{pr.nome}</h3>
                    <p className="pro-cargo">{pr.cargo}</p>
                    <ul className="pro-tags">
                      {pr.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <a
                      className="pro-ig"
                      href={`https://instagram.com/${pr.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />@{pr.instagram}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="pacotes">
            <div className="head">
              <span className="label">Pacotes e valores</span>
              <h2>Escolha quantos vídeos por mês</h2>
              <p>Todos os pacotes incluem gravação, edição, legendas, texto na tela e trilha. O Mensal e o Rede também trazem carrosséis e calendário de postagem.</p>
            </div>
            <div className="packs">
              {pacotes.map((p) => (
                <article className={`pack${p.destaque ? " star" : ""}`} key={p.nome}>
                  {p.destaque && <span className="badge">Mais escolhido</span>}
                  <h3>{p.nome}</h3>
                  <p className="for">{p.para}</p>
                  <div className="price">
                    {p.preco}
                    <small>{p.unidade}</small>
                  </div>
                  {p.detalhe && <span className="per">{p.detalhe}</span>}
                  {p.economia && <p className="eco">{p.economia}</p>}
                  <ul>
                    {p.itens.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <a className={`btn${p.destaque ? "" : " ghost"}`} {...wa(p.msg)}>Quero o {p.nome}</a>
                </article>
              ))}
            </div>
            <p className="note">
              Precisa de algo diferente, como um vídeo institucional mais longo ou cobertura de evento? Chame no WhatsApp e eu monto um orçamento.
            </p>
          </section>

          <section>
            <div className="head">
              <span className="label">Como funciona</span>
              <h2>Do primeiro contato ao vídeo no ar</h2>
            </div>
            <div className="steps">
              {etapas.map((e, i) => (
                <div className="step" key={e.titulo}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{e.titulo}</h3>
                  <p>{e.texto}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="head">
              <span className="label">Condições</span>
              <h2>Tudo combinado antes de começar</h2>
            </div>
            <div className="terms">
              <div className="box">
                <h3>Incluso em todo pacote</h3>
                <ul>
                  <li>Vídeos verticais (9:16) de 30 a 60 segundos</li>
                  <li>Edição, legendas, texto na tela e trilha</li>
                  <li>1 rodada de ajuste por vídeo</li>
                  <li>Entrega em até 5 dias úteis depois da gravação</li>
                  <li>Arquivos prontos para postar</li>
                </ul>
              </div>
              <div className="box">
                <h3>Pagamento e prazo</h3>
                <ul>
                  <li>Pacotes mensais com compromisso mínimo de 3 meses</li>
                  <li>Pagamento adiantado, todo mês, antes da gravação</li>
                  <li>Gravação extra fora da visita do mês: R$ 150</li>
                  <li>Atendimento em Brasília e no Distrito Federal</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="contact" id="contato">
            <div>
              <h2>Vamos colocar a sua empresa em cena?</h2>
              <p>Me chame no WhatsApp. Eu respondo, entendo o que você precisa e indico o pacote certo.</p>
            </div>
            <div className="side">
              <a className="btn" {...wa(msgGeral)}>Chamar no WhatsApp</a>
              <div className="phone">
                <span>{site.telefone.exibicao}</span>
                <CopiarTelefone telefone={site.telefone.exibicao} />
              </div>
            </div>
          </div>

          <p className="validade">Valores válidos para 2026.</p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
