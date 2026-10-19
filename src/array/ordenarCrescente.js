const ordenarCrescente = (vetor) => {
  const vetorLimpo = Array.isArray(vetor) ? Array.from(vetor) : [];

  try {
    if (!Array.isArray(vetor))
      throw new Error("A entrada fornecida deve ser um array.");

    const todosInteiros = vetorLimpo.every(
      (numero) => typeof numero === "number" && Number.isInteger(numero),
    );

    if (!todosInteiros)
      throw new Error(
        "Deve ser um array consistindo inteiramente de números inteiros.",
      );
  } catch (erro) {
    return { erro: erro.message };
  }
  return {
    vetorOriginal: vetor,
    ordenadoCrescente: [...vetorLimpo].sort((a, b) => a - b),
  };
};

export default ordenarCrescente;
