const sortAscending = (arr) => {
  const arrLimpo = Array.isArray(arr) ? Array.from(arr) : [];

  try {
    if (!Array.isArray(arr))
      throw new Error("The provided input must be an array.");

    const allInteger = arrLimpo.every(
      (num) => typeof num === "number" && Number.isInteger(num),
    );

    if (!allInteger)
      throw new Error("It must be an array consisting entirely of integers.");
  } catch (err) {
    return { error: err.message };
  }
  return {
    arrOriginal: arr,
    sortAscending: [...arrLimpo].sort((a, b) => a - b),
  };
};

export default sortAscending;
