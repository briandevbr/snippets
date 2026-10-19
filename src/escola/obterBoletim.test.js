import { describe, it, expect } from "vitest";
import obterBoletimAluno from "./obterBoletim.js";

// Banco de mentira, só pro teste.
// Cada aluno foi criado pra testar uma situação diferente.
const bancoFake = {
  configuracao: { mediaAprovacao: 7, anoLetivo: 2026 },
  disciplinas: {
    matematica: [
      { id: "001", aluno: "Passou", idade: 18, notas: [10, 8, 6] }, // média 8
      { id: "002", aluno: "Reprovou", idade: 19, notas: [5, 6, 4] }, // média 5
      { id: "003", aluno: "SemNotas", idade: 20, notas: [] },
      { id: "004", aluno: "NaMedia", idade: 21, notas: [7, 7, 7] }, // média 7
      { id: "005", aluno: "Quebrada", idade: 22, notas: [9, 8, 5] }, // 7.333...
    ],
  },
};

describe("obterBoletimAluno", () => {
  it("devolve o boletim completo de quem passou", () => {
    expect(obterBoletimAluno(bancoFake, "matematica", "001")).toEqual({
      sucesso: {
        anoLetivo: 2026,
        disciplina: "matematica",
        id: "001",
        aluno: "Passou",
        idade: 18,
        notas: [10, 8, 6],
        mediaFinal: 8,
        aprovado: true,
      },
    });
  });

  it("reprova quem ficou abaixo da média", () => {
    const { sucesso } = obterBoletimAluno(bancoFake, "matematica", "002");
    expect(sucesso.mediaFinal).toBe(5);
    expect(sucesso.aprovado).toBe(false);
  });

  it("aprova quem tirou exatamente a média", () => {
    const { sucesso } = obterBoletimAluno(bancoFake, "matematica", "004");
    expect(sucesso.aprovado).toBe(true);
  });

  it("arredonda a média para 2 casas decimais", () => {
    const { sucesso } = obterBoletimAluno(bancoFake, "matematica", "005");
    expect(sucesso.mediaFinal).toBe(7.33);
  });

  it("acha a disciplina pelo começo do nome, sem ligar pra maiúscula", () => {
    const { sucesso } = obterBoletimAluno(bancoFake, "  MAT ", "001");
    expect(sucesso.disciplina).toBe("matematica");
  });

  it("retorna ENTRADA_INVALIDA quando falta disciplina ou id", () => {
    expect(obterBoletimAluno(bancoFake, "", "001").erro.codigo).toBe(
      "ENTRADA_INVALIDA",
    );
    expect(obterBoletimAluno(bancoFake, "matematica", 1).erro.codigo).toBe(
      "ENTRADA_INVALIDA",
    );
  });

  it("retorna DISCIPLINA_INVALIDA quando a disciplina não existe", () => {
    expect(obterBoletimAluno(bancoFake, "quimica", "001").erro.codigo).toBe(
      "DISCIPLINA_INVALIDA",
    );
  });

  it("retorna ID_INVALIDO quando o aluno não existe", () => {
    expect(obterBoletimAluno(bancoFake, "matematica", "999").erro.codigo).toBe(
      "ID_INVALIDO",
    );
  });

  it("retorna NOTAS_NAO_ENCONTRADAS quando o aluno não tem nota", () => {
    expect(obterBoletimAluno(bancoFake, "matematica", "003").erro.codigo).toBe(
      "NOTAS_NAO_ENCONTRADAS",
    );
  });

  it("retorna ERRO_INTERNO_SERVIDOR quando o banco vem quebrado", () => {
    // {} não tem "disciplinas": o código quebra lá dentro e o catch segura.
    expect(obterBoletimAluno({}, "matematica", "001").erro.codigo).toBe(
      "ERRO_INTERNO_SERVIDOR",
    );
  });
});
