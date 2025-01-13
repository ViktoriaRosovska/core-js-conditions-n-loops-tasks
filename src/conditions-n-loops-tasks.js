/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(/* a, b, c */) {
  throw new Error('Not implemented');
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const ROMENUMBERS = [
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
  ];
  let str = '';
  str += num;
  let result = '';
  if (num > 0 && num <= 10) {
    result = ROMENUMBERS[num - 1];
  }
  if (num > 10) {
    for (let i = 0; i < Number(str[0]); i += 1) {
      result += ROMENUMBERS[ROMENUMBERS.length - 1];
    }
    result += ROMENUMBERS[str[1] - 1];
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const findChar = (str) => {
    let str1 = '';
    switch (str) {
      case '1': {
        str1 = 'one';
        break;
      }
      case '0': {
        str1 = 'zero';
        break;
      }
      case '2': {
        str1 = 'two';
        break;
      }
      case '3': {
        str1 = 'three';
        break;
      }
      case '4': {
        str1 = 'four';
        break;
      }
      case '5': {
        str1 = 'five';
        break;
      }
      case '6': {
        str1 = 'six';
        break;
      }
      case '7': {
        str1 = 'seven';
        break;
      }
      case '8': {
        str1 = 'eight';
        break;
      }
      case '9': {
        str1 = 'nine';
        break;
      }
      case '.': {
        str1 = 'point';
        break;
      }
      case ',': {
        str1 = 'point';
        break;
      }
      case '-': {
        str1 = 'minus';
        break;
      }
      default: {
        str1 = '';
        break;
      }
    }
    return str1;
  };

  let newStr = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i > 0) {
      newStr += ' ';
      newStr += findChar(numberStr[i]);
    } else {
      newStr += findChar(numberStr[i]);
    }
  }
  return newStr;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length / 2; i += 1) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < Math.ceil(str.length / 2); i += 1) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let str = '';
  str += num;
  for (let i = 0; i < str.length; i += 1) {
    if (Number(str[i]) === digit) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let l = 0;
  let r = 0;
  const len = arr.length;
  for (let i = 0; i < len; i += 1) {
    r += arr[i];
  }
  for (let p = 0; p < len; p += 1) {
    r -= arr[p];
    if (p > 0) l += arr[p - 1];
    if (l === r) return p;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    matrix[0][i] = i + 1;
  }
  let n = size - 1;
  let v = size + 1;
  for (let i = 0; i < size / 2; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      matrix[i + j][size - i - 1] = v;
      v += 1;
    }
    for (let j = 1; j <= n; j += 1) {
      matrix[size - i - 1][size - j - i - 1] = v;
      v += 1;
    }
    n -= 1;
    for (let j = 1; j <= n; j += 1) {
      matrix[size - i - j - 1][i] = v;
      v += 1;
    }
    for (let j = 1; j <= n; j += 1) {
      matrix[i + 1][j + i] = v;
      v += 1;
    }
    n -= 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const len = matrix.length;
  const result = [];
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      if (i === 0) result[j] = [];
      result[j][len - 1 - i] = matrix[i][j];
    }
  }
  const matrixCopy = matrix;
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      matrixCopy[i][j] = result[i][j];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const array = arr;
  function quickSort(l, r) {
    if (l >= r) {
      return;
    }
    const pt = Math.floor((l + r) / 2);
    const pivot = array[pt];
    let l1 = l;
    let r1 = r;
    while (l1 <= r1) {
      if (array[l1] < pivot) {
        l1 += 1;
      } else if (pivot < array[r1]) {
        r1 -= 1;
      } else {
        const t = array[l1];
        array[l1] = array[r1];
        array[r1] = t;
        l1 += 1;
        r1 -= 1;
      }
    }
    quickSort(l, r1);
    quickSort(l1, r);
  }
  quickSort(0, arr.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const perm = [];
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    perm[i] = i;
  }
  const A = Math.floor(len / 2);
  for (let i = 0; i < iterations; i += 1) {
    for (let j = 0; j < len; j += 1) {
      const k = Math.floor(perm[j] / 2);
      if (perm[j] % 2 === 0) perm[j] = k;
      else perm[j] = A + k;
    }
  }

  const chars = [];
  chars[len - 1] = 0;
  for (let i = 0; i < len; i += 1) {
    chars[perm[i]] = str[i];
  }
  let result = '';
  for (let i = 0; i < len; i += 1) {
    result += chars[i];
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const str = String(number);
  const digits = new Array(10).fill(0);
  digits[Number(str[str.length - 1])] = 1;
  for (let i = str.length - 2; i > 0; i -= 1) {
    const current = Number(str[i]);
    const next = Number(str[i + 1]);
    digits[current] += 1;
    if (current < next) {
      let result = '';
      for (let j = 0; j < i; j += 1) result += str[j];
      for (let j = current + 1; j < 10; j += 1) {
        if (digits[j] > 0) {
          result += j;
          digits[j] -= 1;
          break;
        }
      }
      for (let j = 0; j < 10; j += 1) {
        for (let k = digits[j]; k > 0; k -= 1) {
          result += j;
        }
      }
      return Number(result);
    }
  }
  return number;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
