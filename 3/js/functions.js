function isLengthValid(str, maxLength) {
  return (str.length <= maxLength);
}

function isPalindrom(str) {
  return str.toLowerCase().replaceAll(' ', '') === str.toLowerCase().replaceAll(' ', '').split('').reverse().join('');
}

function getNumber(str) {
  const digits = '0123456789';
  let numbers = '';
  let hasDecimalPoint = false;

  if (typeof str === 'number') {
    return Math.abs(str);
  }

  for (const char of str) {
    if (digits.includes(char)) {
      numbers += char;
    }

    if (char === '.' && !hasDecimalPoint) {
      numbers += '.';
      hasDecimalPoint = true;
    }
  }

  return +numbers === 0 ? NaN : +numbers;
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
