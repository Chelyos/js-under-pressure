export const arraySumTest = (func: (arr: Array<any>) => {}) => {
  let goodTests: string[] = [];
  let badTests: string[] = [];

  if (func([1, 2, 3, 4, 5]) === 15) {
    goodTests.push('["a", "ab", "abc"] => abc OK');
  } else {
    badTests.push('["a", "ab", "abc"] => abc KO');
  }

  if (func([[1, 2, 3], 4, 5]) === 15) {
    goodTests.push('[[1, 2, 3], 4, 5] => 15 OK');
  } else {
    badTests.push('[[1, 2, 3], 4, 5] => 15 KO');
  }

  if (func([[1, 2, false], '4', '5']) === 3) {
    goodTests.push('[[1, 2, false], "4", "5"] => 3 OK');
  } else {
    badTests.push('[[1, 2, false], "4", "5"] => 3 KO');
  }

  return [goodTests, badTests];
};
