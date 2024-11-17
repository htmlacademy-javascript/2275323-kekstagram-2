function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomElement(array) {
  return array[getRandomValue(0, array.length - 1)];
}

export { getRandomValue, getRandomElement };
