const ehTextoNaoVazio = (valor) =>
  typeof valor === "string" && valor.trim() !== "";

const buscarChaveDisciplina = (disciplinas, textoBusca) => {
  const chavesDisciplinas = Object.keys(disciplinas);
  const buscaNormalizada = textoBusca.trim().toLowerCase();

  return chavesDisciplinas.find((chave) =>
    chave.toLowerCase().startsWith(buscaNormalizada),
  );
};

const buscarAlunoPorId = (listaAlunos, idAluno) => {
  return listaAlunos.find((aluno) => String(aluno.id) === String(idAluno));
};

const obterBoletimAluno = (
  bancoDadosEscola,
  entradaDisciplina,
  entradaIdAluno,
) => {
  try {
    const possuiEntradaInvalida =
      !ehTextoNaoVazio(entradaDisciplina) || !ehTextoNaoVazio(entradaIdAluno);
    if (possuiEntradaInvalida) {
      return {
        erro: {
          codigo: "ENTRADA_INVALIDA",
          mensagem: "Os dados informados estão fora dos parâmetros esperados.",
        },
      };
    }

    const chaveDisciplinaEncontrada = buscarChaveDisciplina(
      bancoDadosEscola.disciplinas,
      entradaDisciplina,
    );
    if (!chaveDisciplinaEncontrada) {
      return {
        erro: {
          codigo: "DISCIPLINA_INVALIDA",
          mensagem: `A disciplina "${entradaDisciplina}" não existe no banco de dados.`,
        },
      };
    }

    const alunosDaDisciplina =
      bancoDadosEscola.disciplinas[chaveDisciplinaEncontrada];
    const alunoAlvo = buscarAlunoPorId(alunosDaDisciplina, entradaIdAluno);
    if (!alunoAlvo) {
      return {
        erro: {
          codigo: "ID_INVALIDO",
          mensagem: `O id "${entradaIdAluno}" não existe no banco de dados.`,
        },
      };
    }

    const notasAluno = alunoAlvo.notas || [];
    if (notasAluno.length === 0) {
      return {
        erro: {
          codigo: "NOTAS_NAO_ENCONTRADAS",
          mensagem: "Este aluno não possui notas registradas.",
        },
      };
    }

    const somaTotalNotas = notasAluno.reduce(
      (acumulador, notaAtual) => acumulador + notaAtual,
      0,
    );
    const mediaCalculada = somaTotalNotas / notasAluno.length;

    const notaCorteAprovacao = bancoDadosEscola.configuracao.mediaAprovacao;
    const estaAprovado = mediaCalculada >= notaCorteAprovacao;

    return {
      sucesso: {
        anoLetivo: bancoDadosEscola.configuracao.anoLetivo,
        disciplina: chaveDisciplinaEncontrada,
        id: entradaIdAluno,
        aluno: alunoAlvo.aluno,
        idade: alunoAlvo.idade,
        notas: notasAluno,
        mediaFinal: parseFloat(mediaCalculada.toFixed(2)),
        aprovado: estaAprovado,
      },
    };
  } catch (erro) {
    return {
      erro: {
        codigo: "ERRO_INTERNO_SERVIDOR",
        mensagem: "Ocorreu um erro inesperado ao processar o boletim.",
      },
    };
  }
};

export default obterBoletimAluno;
