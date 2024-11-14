function isLengthValid(str, maxLength) {
  return (str.length <= maxLength);
}

function isPalindrom(str) {
  const cleanStr = str.toLowerCase().replaceAll(' ', '');

  for (let i = 0; i < cleanStr.length / 2; i += 1) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function getNumber(str) {
  return +str.toString().replaceAll(' ', '').split('').filter((char) => !isNaN(char)).join('') || NaN;
}


isLengthValid('проверяемая строка', 20);
isLengthValid('проверяемая строка', 18);
isLengthValid('проверяемая строка', 10);

isPalindrom('топот');
isPalindrom('Лёша на полке клопа нашёл ');
isPalindrom('Кекс');
isPalindrom('множитель');

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');

getNumber(2023);
getNumber(-1);
getNumber(1.5);
