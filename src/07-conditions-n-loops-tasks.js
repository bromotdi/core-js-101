function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  } if (num % 3 === 0) {
    return 'Fizz';
  } if (num % 5 === 0) {
    return 'Buzz';
  }
  return num;
}

function getFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
}

function getSumBetweenNumbers(n1, n2) {
  let sum = 0;
  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }
  return sum;
}

function isTriangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b;
}

function doRectanglesOverlap(rect1, rect2) {
  return !(rect1.left + rect1.width < rect2.left
    || rect2.left + rect2.width < rect1.left
    || rect1.top + rect1.height < rect2.top
    || rect2.top + rect2.height < rect1.top);
}

function isInsideCircle(circle, point) {
  const distance = Math.sqrt(
    (point.x - circle.center.x) ** 2
    + (point.y - circle.center.y) ** 2,
  );
  return distance < circle.radius;
}

function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
      return char;
    }
  }
  return null;
}

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const start = isStartIncluded ? '[' : '(';
  const end = isEndIncluded ? ']' : ')';
  return `${start}${Math.min(a, b)}, ${Math.max(a, b)}${end}`;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function reverseInteger(num) {
  const sign = Math.sign(num);
  // eslint-disable-next-line radix
  const reversedNum = parseInt(num.toString().split('').reverse().join(''));
  return sign * reversedNum;
}

function isCreditCardNumber(ccn) {
  const digits = ccn.toString().split('').map(Number);
  let sum = 0;
  for (let i = 0; i < digits.length; i += 1) {
    let digit = digits[i];
    if ((digits.length - i) % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return sum % 10 === 0;
}

function getDigitalRoot(num) {
  if (num < 10) {
    return num;
  }
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    // eslint-disable-next-line no-param-reassign
    num = Math.floor(num / 10);
  }
  return getDigitalRoot(sum);
}

function isBracketsBalanced(str) {
  const stack = [];
  const openBrackets = ['[', '(', '{', '<'];
  const closeBrackets = [']', ')', '}', '>'];
  // eslint-disable-next-line no-restricted-syntax
  for (const char of str) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      const openBracket = openBrackets[closeBrackets.indexOf(char)];
      if (stack.pop() !== openBracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function toNaryString(num, n) {
  return num.toString(n);
}

function getCommonDirectoryPath(pathes) {
  const pathSegments = pathes.map((path) => path.split('/'));

  const minLength = Math.min(...pathSegments.map((segment) => segment.length));
  let commonPath = '';

  for (let i = 0; i < minLength; i += 1) {
    const segment = pathSegments[0][i];
    if (pathSegments.every((path) => path[i] === segment)) {
      commonPath += `${segment}/`;
    } else {
      break;
    }
  }

  return commonPath;
}


function getMatrixProduct(m1, m2) {
  const rowsM1 = m1.length;
  const colsM1 = m1[0].length;
  const colsM2 = m2[0].length;

  const product = new Array(rowsM1);

  for (let i = 0; i < rowsM1; i += 1) {
    product[i] = new Array(colsM2);
    for (let j = 0; j < colsM2; j += 1) {
      product[i][j] = 0;
      for (let k = 0; k < colsM1; k += 1) {
        product[i][j] += m1[i][k] * m2[k][j];
      }
    }
  }

  return product;
}

function evaluateTicTacToePosition(position) {
  const winningCombinations = [
    // Rows
    [position[0][0], position[0][1], position[0][2]],
    [position[1][0], position[1][1], position[1][2]],
    [position[2][0], position[2][1], position[2][2]],
    // Columns
    [position[0][0], position[1][0], position[2][0]],
    [position[0][1], position[1][1], position[2][1]],
    [position[0][2], position[1][2], position[2][2]],
    // Diagonals
    [position[0][0], position[1][1], position[2][2]],
    [position[0][2], position[1][1], position[2][0]],
  ];

  // eslint-disable-next-line no-restricted-syntax
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (a && a === b && b === c) {
      return a;
    }
  }

  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
