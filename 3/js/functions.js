function isLengthValid(str, maxLength) {
  return (str.length <= maxLength);
}

function isPalindrom(str) {
  return str.toLowerCase().replaceAll(' ', '') === str.toLowerCase().replaceAll(' ', '').split('').reverse().join('');
}

function getNumber(str) {
  const digits = '0123456789';
  let numbers = '';

  for (const char of str.toString()) {
    if (digits.includes(char)) {
      numbers += char;
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
getNumber(1.5);
