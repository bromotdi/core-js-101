function willYouMarryMe(isPositiveAnswer) {
  return new Promise((resolve, reject) => {
    if (typeof isPositiveAnswer === 'boolean') {
      if (isPositiveAnswer) {
        resolve('Hooray!!! She said "Yes"!');
      } else {
        resolve('Oh no, she said "No".');
      }
    } else {
      reject(new Error('Wrong parameter is passed! Ask her again.'));
    }
  });
}

function processAllPromises(array) {
  return Promise.all(array);
}

function getFastestPromise(array) {
  return Promise.race(array);
}

function chainPromises(array, action) {
  const resArr = [];
  return Promise.resolve(array).then((promices) => promices.forEach((prom) => {
    prom.then((data) => resArr.push(data)).catch(() => { });
  })).then(() => resArr.reduce((res, item) => action(res, item)));
}

module.exports = {
  willYouMarryMe,
  processAllPromises,
  getFastestPromise,
  chainPromises,
};
