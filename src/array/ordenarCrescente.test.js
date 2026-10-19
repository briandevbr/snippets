import { describe, it, expect } from "vitest";
import ordenarCrescente from "./ordenarCrescente.js";

describe("ordenarCrescente", () => {
  it("ordena os números em ordem crescente", () => {
    const resultado = ordenarCrescente([3, 1, 2]);
    expect(resultado.ordenadoCrescente).toEqual([1, 2, 3]);
  });

  it("não altera o array original", () => {
    const original = [3, 1, 2];
    ordenarCrescente(original);
    expect(original).toEqual([3, 1, 2]);
  });

  it("ordena números negativos e de vários dígitos corretamente", () => {
    expect(ordenarCrescente([10, -5, 2, 100]).ordenadoCrescente).toEqual([
      -5, 2, 10, 100,
    ]);
  });

  it("retorna erro quando a entrada não é um array", () => {
    expect(ordenarCrescente("abc")).toEqual({
      erro: "A entrada fornecida deve ser um array.",
    });
  });

  it("retorna erro quando há algo que não é inteiro", () => {
    expect(ordenarCrescente([1, 2.5, 3])).toEqual({
      erro: "Deve ser um array consistindo inteiramente de números inteiros.",
    });
  });

  it("retorna erro quando há um espaço em branco dentro do array", () => {
    expect(ordenarCrescente([1, , 3])).toEqual({
      erro: "Deve ser um array consistindo inteiramente de números inteiros.",
    });
  });
});
