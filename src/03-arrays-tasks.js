function findElement(arr, value) {
  return arr.indexOf(value);
}

function generateOdds(len) {
  return Array.from({ length: len }, (_, index) => index * 2 + 1);
}

function doubleArray(arr) {
  return [...arr, ...arr];
}

function getArrayOfPositives(arr) {
  return arr.filter((item) => item > 0);
}

function getArrayOfStrings(arr) {
  return arr.filter((item) => typeof item === 'string');
}

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

function getUpperCaseStrings(arr) {
  return arr.map((item) => item.toUpperCase());
}

function getStringsLength(arr) {
  return arr.map((item) => item.length);
}

function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  return arr.slice(-n);
}

function toCsvText(arr) {
  return arr.map((row) => row.join(',')).join('\n');
}

function toArrayOfSquares(arr) {
  return arr.map((num) => num * num);
}

function getMovingSum(arr) {
  let sum = 0;
  return arr.map((num) => {
    sum += num;
    return sum;
  });
}

function getSecondItems(arr) {
  return arr.filter((_, index) => index % 2 !== 0);
}

function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((item, index) => Array(index + 1).fill(item));
}

function get3TopItems(arr) {
  return arr.sort((a, b) => b - a).slice(0, 3);
}

function getPositivesCount(arr) {
  return arr.filter((item) => typeof item === 'number' && item > 0).length;
}

function sortDigitNamesByNumericOrder(arr) {
  const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return arr.sort((a, b) => digits.indexOf(a) - digits.indexOf(b));
}

function getItemsSum(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

function getFalsyValuesCount(arr) {
  return arr.filter((item) => !item).length;
}

function findAllOccurrences(arr, item) {
  return arr.reduce((count, current) => (current === item ? count + 1 : count), 0);
}

function toStringList(arr) {
  return arr.join(',');
}

function sortCitiesArray(arr) {
  return arr.sort((a, b) => {
    if (a.country === b.country) {
      return a.city.localeCompare(b.city);
    }
    return a.country.localeCompare(b.country);
  });
}

function getIdentityMatrix(n) {
  return Array.from(new Array(n)).map((item, index) => Array
    .from(new Array(n))
    .map((el, count) => (index === count ? 1 : 0)));
}

function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function distinct(arr) {
  return [...new Set(arr)];
}

function group(array, keySelector, valueSelector) {
  const keys = [...new Set(array.map((item) => keySelector(item)))];

  const entries = keys.map((el) => [
    el,
    array.filter((item) => keySelector(item) === el)
      .map((item) => valueSelector(item)),
  ]);

  return new Map(entries);
}

function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

function getElementByIndexes(arr, indexes) {
  const result = indexes.reduce((initial, current) => (initial ? initial[current] : undefined),
    arr);

  return result;
}

function swapHeadAndTail(arr) {
  const copy = [...arr];
  const isOdd = copy.length % 2 === 1;

  const head = copy.splice(0, (isOdd ? Math.floor(copy.length / 2) : copy.length / 2));
  const tail = copy.splice((isOdd ? 1 : 0), copy.length - 1);

  return [...tail, ...copy, ...head];
}

module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
