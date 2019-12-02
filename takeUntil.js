const takeUntil = function (array, callback) {
  const results = []
  for (item of array) {
    if (!callback(item)) {
      results.push(item)
    } else {
      return results
    }
  }
  return results;
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');
