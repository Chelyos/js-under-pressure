import * as babel from '@babel/core';

const options = {
  babelrc: true,
};

export const transpile = async (str: string) => {
  const result = await babel.transformAsync(str, options);
  return result?.code;
};
