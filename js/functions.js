function maxLengthStr(str, maxLength) {
  return (str.length <= maxLength);
}

// function isPalindrom(str) {
//   const newStr = str.toLowerCase().replaceAll(' ', '');
//   let str1 = '';
//   let str2 = '';

//   for(let i = 0; i < newStr.length; i += 1) {
//     str1 += newStr[i];
//   }

//   for(let i = newStr.length - 1; i >= 0; i -= 1) {
//     str2 += newStr[i];
//   }

//   return str1 === str2;
// }

function isPalindrom(str) {
  const newStr = str.toLowerCase().replaceAll(' ', '');
  const reverseStr = newStr.split('').reverse().join('');

  return newStr === reverseStr;
}

function getNumber(str) {
  let strNumber = '';

  if (typeof str === 'number') {
    return Math.abs(str);
  }

  for(let i = 0; i < str.length; i += 1) {

    if (!Number.isNaN(+str[i])) {
      strNumber += str[i];
    }

  }

  if (+strNumber === 0) {
    return NaN;
  }

  return +strNumber.replaceAll(' ', '');
}


maxLengthStr('проверяемая строка', 20);
maxLengthStr('проверяемая строка', 18);
maxLengthStr('проверяемая строка', 10);

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
