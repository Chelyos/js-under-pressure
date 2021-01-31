export const longestStringTest = (func: (arr: Array<any>) => {}) => {
  let goodTests: string[] = [];
  let badTests: string[] = [];

  if (func(['a', 'ab', 'abc']) === 'abc') {
    goodTests.push('["a", "ab", "abc"] => abc OK');
  } else {
    badTests.push('["a", "ab", "abc"] => abc KO');
  }

  if (func(['big', [0, 1, 2, 3, 4], 'tiny']) === 'tiny') {
    goodTests.push('["big", [0, 1, 2, 3, 4], "tiny"] => tiny OK');
  } else {
    badTests.push('["big", [0, 1, 2, 3, 4], "tiny"] => tiny KO');
  }

  if (func([true, false, 'lol']) === 'lol') {
    goodTests.push('[true, false, "lol"] => lol OK');
  } else {
    badTests.push('[true, false, "lol"] => lol KO');
  }

  return [goodTests, badTests];
};
