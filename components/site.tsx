import { site, whatsappUrl } from "@/lib/site";

export function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-in">
        <a className="marca" href="#inicio" aria-label="Capio Produções, início">
          <span className="marca-nome">Capio</span>
          <span className="marca-sub">Produções</span>
        </a>
        <nav aria-label="Seções">
          <a href="#trabalhos">Trabalhos</a>
          <a href="#pacotes">Pacotes</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-wa" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-in">
        <div>
          <span className="marca-nome">Capio</span> <span className="marca-sub">Produções</span>
          <p>Capio vem do latim: &ldquo;eu capto&rdquo;. Produção audiovisual em {site.cidade}.</p>
        </div>
        <div className="site-footer-contato">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            WhatsApp {site.telefone.exibicao}
          </a>
          <a className="footer-ig" href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer">
            <InstagramIcon />@{site.instagram}
          </a>
          <span>© {new Date().getFullYear()} {site.nome}</span>
        </div>
      </div>
    </footer>
  );
}
