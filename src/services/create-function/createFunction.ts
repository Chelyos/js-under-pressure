import { transpile } from './../transpilation/transpilation';
export const createFunction = async (code: string) => {
  const codeFc = await transpile(code);

  if (codeFc) {
    const param = getParamNames(codeFc);

    const content = codeFc.slice(
      codeFc.indexOf('{') + 1,
      codeFc.lastIndexOf('}')
    );
    // eslint-disable-next-line no-new-func
    return new Function(param[0], content);
  }
};

function getParamNames(code: string) {
  const ARGUMENT_NAMES = /([^\s,]+)/g;
  let result = code
    .slice(code.indexOf('(') + 1, code.indexOf(')'))
    .match(ARGUMENT_NAMES);
  if (result === null) result = [];
  return result;
}
