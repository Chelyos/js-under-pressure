export const getFileExtensionTest = (func: (str: string) => {}) => {
  let goodTests: string[] = [];
  let badTests: string[] = [];

  if (func('blatherskit.png') === 'png') {
    goodTests.push('blatherskit.png => png OK');
  } else {
    badTests.push('blatherskit.png => png KO');
  }

  if (func('perfectlylegal.torrent') === 'torrent') {
    goodTests.push('perfectlylegal.torrent => torrent OK');
  } else {
    badTests.push('perfectlylegal.torrent => torrent KO');
  }

  if (func('so.are.multiple.dots.jpg') === 'jpg') {
    goodTests.push('so.are.multiple.dots.jpg => jpg OK');
  } else {
    badTests.push('so.are.multiple.dots.jpg => jpg KO');
  }
  return [goodTests, badTests];
};
