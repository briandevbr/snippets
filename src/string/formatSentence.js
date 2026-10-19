const MAX_LENGTH = 100;
const formatSentence = (message) => {
  if (typeof message !== "string")
    return {
      error: {
        code: "INVALID_TYPE",
        message: `Expected a string, received ${typeof message}.`,
      },
    };

  if (message.length > MAX_LENGTH)
    return {
      error: {
        code: "TOO_LONG",
        message: `The message exceeds ${MAX_LENGTH} characters.`,
      },
    };

  const cleanMsg = message.replaceAll("\u200B", "").trim();

  if (cleanMsg === "")
    return {
      error: { code: "EMPTY_MESSAGE", message: "The message is empty." },
    };

  const result = {
    success: {
      newMessage: cleanMsg[0].toUpperCase() + cleanMsg.slice(1),
      originalMessage: message,
    },
  };

  if (
    cleanMsg.at(-1) !== "!" &&
    cleanMsg.at(-1) !== "?" &&
    cleanMsg.at(-1) !== "."
  ) {
    result.success.newMessage += ".";
  }
  return result;
};

export default formatSentence;
