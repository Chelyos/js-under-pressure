export const comparator = (func: Function, funcTest: Function) => {
  const result: [string[], string[]] = funcTest(func);
  if (result[1].length === 0) {
    return { log: result[0], status: true };
  } else {
    return { log: result[1], status: false };
  }
};
