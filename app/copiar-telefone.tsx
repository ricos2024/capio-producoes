"use client";

import { useState } from "react";

export function CopiarTelefone({ telefone }: { telefone: string }) {
  const [rotulo, setRotulo] = useState("Copiar");

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(telefone);
      setRotulo("Copiado");
    } catch {
      setRotulo("Selecione e copie");
    }
    setTimeout(() => setRotulo("Copiar"), 1500);
  };

  return (
    <button className="copy" type="button" onClick={copiar}>
      {rotulo}
    </button>
  );
}
