export const doubleIntegerTest = (func: (nb: number) => {}) => {
  let goodTests: string[] = [];
  let badTests: string[] = [];

  if (func(2) === 4) {
    goodTests.push('2 => 4 OK');
  } else {
    badTests.push('2 => 4 KO');
  }

  if (func(4) === 8) {
    goodTests.push('4 => 8 OK');
  } else {
    badTests.push('4 => 8 KO');
  }

  if (func(6) === 12) {
    goodTests.push('6 => 12 OK');
  } else {
    badTests.push('6 => 12 KO');
  }

  return [goodTests, badTests];
};
