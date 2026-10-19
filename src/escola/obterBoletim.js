const ehTextoNaoVazio = (valor) =>
  typeof valor === "string" && valor.trim() !== "";

const buscarDisciplina = (listaDisciplinas, textoBusca) => {
  const buscaNormalizada = textoBusca.trim().toLowerCase();

  return listaDisciplinas.find((disciplina) =>
    disciplina.id.trim().toLowerCase().startsWith(buscaNormalizada),
  );
};

const buscarAlunoPorId = (listaAlunos, idAluno) => {
  return listaAlunos.find((aluno) => String(aluno.id) === String(idAluno));
};

const buscarNotas = (listaNotas, idAluno, idDisciplina) => {
  const registro = listaNotas.find(
    (nota) => nota.alunoId === idAluno && nota.disciplinaId === idDisciplina,
  );
  return registro ? registro.valores : [];
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

    const disciplinaEncontrada = buscarDisciplina(
      bancoDadosEscola.disciplinas,
      entradaDisciplina,
    );
    if (!disciplinaEncontrada) {
      return {
        erro: {
          codigo: "DISCIPLINA_INVALIDA",
          mensagem: `A disciplina "${entradaDisciplina}" não existe no banco de dados.`,
        },
      };
    }

    const alunoAlvo = buscarAlunoPorId(bancoDadosEscola.alunos, entradaIdAluno);
    if (!alunoAlvo) {
      return {
        erro: {
          codigo: "ID_INVALIDO",
          mensagem: `O id "${entradaIdAluno}" não existe no banco de dados.`,
        },
      };
    }

    const notasAluno = buscarNotas(
      bancoDadosEscola.notas,
      alunoAlvo.id,
      disciplinaEncontrada.id,
    );
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
        disciplina: disciplinaEncontrada.id,
        id: entradaIdAluno,
        aluno: alunoAlvo.nome,
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
