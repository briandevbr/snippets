import { describe, it, expect } from "vitest";
import obterBoletimAluno from "./obterBoletim.js";

// Banco de mentira, no mesmo formato do escola.json.
// Cada aluno foi criado pra testar uma situação diferente:
// 001 → média 8 | 002 → média 5 | 003 → sem notas
// 004 → média 7 (exatamente a média) | 005 → média 7.333...
const bancoFake = {
  configuracao: { mediaAprovacao: 7, anoLetivo: 2026 },
  alunos: [
    { id: "001", nome: "Passou", idade: 18 },
    { id: "002", nome: "Reprovou", idade: 19 },
    { id: "003", nome: "SemNotas", idade: 20 },
    { id: "004", nome: "NaMedia", idade: 21 },
    { id: "005", nome: "Quebrada", idade: 22 },
  ],
  disciplinas: [
    { id: "matematica", nome: "Matemática" },
    { id: "ingles", nome: "Inglês" },
  ],
  notas: [
    { alunoId: "001", disciplinaId: "matematica", valores: [10, 8, 6] },
    { alunoId: "002", disciplinaId: "matematica", valores: [5, 6, 4] },
    { alunoId: "003", disciplinaId: "matematica", valores: [] },
    { alunoId: "004", disciplinaId: "matematica", valores: [7, 7, 7] },
    { alunoId: "005", disciplinaId: "matematica", valores: [9, 8, 5] },
  ],
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

  it("retorna NOTAS_NAO_ENCONTRADAS se o aluno não cursa a matéria", () => {
    // O aluno 001 existe, mas não tem nenhuma nota de inglês.
    expect(obterBoletimAluno(bancoFake, "ingles", "001").erro.codigo).toBe(
      "NOTAS_NAO_ENCONTRADAS",
    );
  });
});
