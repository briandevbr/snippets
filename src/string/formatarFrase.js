const COMPRIMENTO_MAXIMO = 100;
const formatarFrase = (mensagem) => {
  if (typeof mensagem !== "string")
    return {
      erro: {
        codigo: "INVALID_TYPE",
        mensagem: `Era esperada uma string, mas foi recebido ${typeof mensagem}.`,
      },
    };

  if (mensagem.length > COMPRIMENTO_MAXIMO)
    return {
      erro: {
        codigo: "TOO_LONG",
        mensagem: `A mensagem excede ${COMPRIMENTO_MAXIMO} caracteres.`,
      },
    };

  const mensagemLimpa = mensagem.replaceAll("\u200B", "").trim();

  if (mensagemLimpa === "")
    return {
      erro: { codigo: "EMPTY_MESSAGE", mensagem: "A mensagem está vazia." },
    };

  const resultado = {
    sucesso: {
      novaMensagem: mensagemLimpa[0].toUpperCase() + mensagemLimpa.slice(1),
      mensagemOriginal: mensagem,
    },
  };

  if (
    mensagemLimpa.at(-1) !== "!" &&
    mensagemLimpa.at(-1) !== "?" &&
    mensagemLimpa.at(-1) !== "."
  ) {
    resultado.sucesso.novaMensagem += ".";
  }
  return resultado;
};

export default formatarFrase;
