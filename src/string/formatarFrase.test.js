import { describe, it, expect } from "vitest";
import formatarFrase from "./formatarFrase.js";

// Confere que a função recusou a entrada: tem "erro" e não tem "sucesso".
const esperaErro = (resultado) => {
  expect(resultado).toHaveProperty("erro");
  expect(resultado.sucesso).toBeUndefined();
};

describe("formatarFrase", () => {
  it("coloca letra maiúscula e ponto final", () => {
    expect(formatarFrase("oi tudo bem")).toEqual({
      sucesso: {
        novaMensagem: "Oi tudo bem.",
        mensagemOriginal: "oi tudo bem",
      },
    });
  });

  it("tira os espaços das pontas", () => {
    expect(formatarFrase("   oi   ").sucesso.novaMensagem).toBe("Oi.");
  });

  it("não coloca ponto se a frase já termina com !, ? ou .", () => {
    expect(formatarFrase("que dia lindo!").sucesso.novaMensagem).toBe(
      "Que dia lindo!",
    );
    expect(formatarFrase("tudo bem?").sucesso.novaMensagem).toBe("Tudo bem?");
    expect(formatarFrase("acabou.").sucesso.novaMensagem).toBe("Acabou.");
  });

  it("só mexe na primeira letra, o resto fica igual", () => {
    expect(formatarFrase("oi, JOÃO").sucesso.novaMensagem).toBe("Oi, JOÃO.");
  });

  it("devolve erro quando não recebe texto", () => {
    esperaErro(formatarFrase(123));
    esperaErro(formatarFrase(undefined));
  });

  it("devolve erro quando a frase passa do tamanho máximo", () => {
    esperaErro(formatarFrase("a".repeat(1000)));
  });

  it("devolve erro quando a frase tá vazia", () => {
    esperaErro(formatarFrase("   "));
    // \u200B = espaço invisível (às vezes vem ao copiar texto da internet)
    esperaErro(formatarFrase("\u200B"));
  });
});
