import { describe, it, expect } from "vitest";
import sortAscending from "./src/sortAscending.js";

describe("sortAscending", () => {
  it("ordena os números em ordem crescente", () => {
    const resultado = sortAscending([3, 1, 2]);
    expect(resultado.sortAscending).toEqual([1, 2, 3]);
  });

  it("não altera o array original", () => {
    const original = [3, 1, 2];
    sortAscending(original);
    expect(original).toEqual([3, 1, 2]);
  });

  it("ordena números negativos e de vários dígitos corretamente", () => {
    expect(sortAscending([10, -5, 2, 100]).sortAscending).toEqual([
      -5, 2, 10, 100,
    ]);
  });

  it("retorna erro quando a entrada não é um array", () => {
    expect(sortAscending("abc")).toEqual({
      error: "The provided input must be an array.",
    });
  });

  it("retorna erro quando há algo que não é inteiro", () => {
    expect(sortAscending([1, 2.5, 3])).toEqual({
      error: "It must be an array consisting entirely of integers.",
    });
  });
});
