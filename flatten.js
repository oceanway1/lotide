const flatten = function (arr) {
  // arr is data, declare fuction flatten
  let flattenedArray = []
  // create a new array
  for (let i = 0; i < arr.length; i++) {
    // count the array
    if (Array.isArray(arr[i])) {
      // check whether arr is array or not 
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArray.push(arr[i][j])
        // push a new array
      }
    } else {
      flattenedArray.push(arr[i])
    }
  }
  return flattenedArray
}
