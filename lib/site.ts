/**
 * Dados da Capio Produções. Quem for trocar domínio, telefone ou redes mexe só aqui.
 */
export const site = {
  nome: "Capio Produções",
  descricao:
    "Produtora audiovisual em Brasília: vídeos institucionais, conteúdo para redes sociais, cobertura de eventos e transmissão ao vivo para empresas.",
  // Trocar pelo domínio próprio quando ele for registrado e ligado na Vercel.
  url: "https://capio-producoes.vercel.app",
  cidade: "Brasília, DF",
  telefone: {
    e164: "+5561981367084",
    exibicao: "(61) 98136-7084",
  },
  whatsapp: {
    numero: "5561981367084",
    mensagem: "Olá, Paulo! Vi o site da Capio Produções e quero conversar.",
  },
};

/** Link wa.me com a mensagem já preenchida (acentos e "?" exigem encodeURIComponent). */
export function whatsappUrl(mensagem: string = site.whatsapp.mensagem): string {
  return `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(mensagem)}`;
}
