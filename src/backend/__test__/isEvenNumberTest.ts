export const isEvenNumberTest = (func: (nb: number) => {}) => {
  let goodTests: string[] = [];
  let badTests: string[] = [];

  if (func(2) === true) {
    goodTests.push('2 => true OK');
  } else {
    badTests.push('2 => true KO');
  }

  if (func(3) === false) {
    goodTests.push('3 => false OK');
  } else {
    badTests.push('3 => false KO');
  }

  if (func(-2) === true) {
    goodTests.push('-2 => true OK');
  } else {
    badTests.push('-2 => true KO');
  }

  return [goodTests, badTests];
};
