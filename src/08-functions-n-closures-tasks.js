function getComposition(f, g) {
  return function (x) {
    return f(g(x));
  };
}

function getPowerFunction(exponent) {
  return function (x) {
    return x ** exponent;
  };
}

function getPolynom(...coefficients) {
  if (coefficients.length === 0) {
    return null;
  }

  return function (x) {
    let result = 0;
    let power = coefficients.length - 1;

    // eslint-disable-next-line no-restricted-syntax
    for (const coefficient of coefficients) {
      result += coefficient * (x ** power);
      power -= 1;
    }

    return result;
  };
}

function memoize(func) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    // eslint-disable-next-line no-prototype-builtins
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }
    const result = func(...args);
    cache[key] = result;
    return result;
  };
}

function retry(func, attempts) {
  // eslint-disable-next-line consistent-return
  return function () {
    for (let i = 0; i <= attempts; i += 1) {
      try {
        return func();
      } catch (err) {
        if (i === attempts) {
          throw err;
        }
      }
    }
  };
}

function logger(func, logFunc) {
  return (...arg) => {
    const argJson = JSON.stringify(arg).slice(1, -1);
    logFunc(`${func.name}(${argJson}) starts`);
    const res = func.apply(undefined, [...arg]);
    logFunc(`${func.name}(${argJson}) ends`);
    return res;
  };
}

function partialUsingArguments(fn, ...args1) {
  return function (...args2) {
    return fn(...args1, ...args2);
  };
}

function getIdGeneratorFunction(startFrom) {
  let id = startFrom;
  return function () {
    const currentId = id;
    id += 1;
    return currentId;
  };
}

module.exports = {
  getComposition,
  getPowerFunction,
  getPolynom,
  memoize,
  retry,
  logger,
  partialUsingArguments,
  getIdGeneratorFunction,
};
