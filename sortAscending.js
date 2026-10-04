const sortAscending = (arr) => {
  try {
    if (!Array.isArray(arr))
      throw new Error("The provided input must be an array.");

    const allInteger = arr.every(
      (num) => typeof num === "number" && Number.isInteger(num),
    );

    if (!allInteger)
      throw new Error("It must be an array consisting entirely of integers.");
  } catch (err) {
    return { error: err.message };
  }
  return { arrOriginal: arr, sortAscending: [...arr].sort((a, b) => a - b) };
};

const arr = [9, 7, 5, 2, 3, 4, 6, 1, 8];

console.log(sortAscending(arr));
