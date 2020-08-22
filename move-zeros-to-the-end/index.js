var moveZeros = function (arr) {
  let zeros = [];

  //loop through array, remove any 0s from original array and push to zeros array.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice([i], 1);
      zeros.push(0);
      i--; //reducing the index by 1 to account for shortening of array
    }
  }

  //loop through zeros array and push each added 0 to end of original array.
  for (let j = 0; j < zeros.length; j++) {
    arr.push(0);
  }
  return arr;
};
//   zeros.forEach(ele => arr.push(ele))

//REFACTOR - Causes timeouts (is the loop infinite?)

var moveZeros = function (arr) {
  //loop through array, remove any 0s from original position of array and push to end of array.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice([i], 1);
      arr.push(0);
      i--; //reducing the index by 1 to account for shortening of array
    }
  }
  return arr;
};
//   zeros.forEach(ele => arr.push(ele))
