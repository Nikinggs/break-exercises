function myMap(array, callback) {

  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(
      callback(array[i], i, array)
    );
  }

  return result;
}
console.log(myMap([1, 2, 3], num => num * 2))


function myFilter(array, callback) {

  const result = [];

  for (let i = 0; i < array.length; i++) {

    if (
      callback(array[i], i, array)
    ) {
      result.push(array[i]);
    }
  }

  return result;
}

console.log(myFilter(
  [1, 2, 3, 4],
  num => num % 2 === 0
));


function myReduce(
  array,
  callback,
  initial
) {

  let accumulator = initial;

  for (let i = 0; i < array.length; i++) {

    accumulator = callback(
      accumulator,
      array[i],
      i,
      array
    );
  }

  return accumulator;
}

console.log(myReduce(
  [1, 2, 3, 4],
  (sum, num) => sum + num,
  0
));


function myFlat(
  array,
  depth = 1
) {

  const result = [];

  function flatten(arr, currentDepth) {

    for (let i = 0; i < arr.length; i++) {

      if (
        Array.isArray(arr[i]) &&
        currentDepth > 0
      ) {

        flatten(
          arr[i],
          currentDepth - 1
        );

      } else {

        result.push(arr[i]);

      }
    }
  }

  flatten(array, depth);

  return result;
}

console.log(myFlat(
  [1, [2, [3, 4]]],
  2
));


function myDebounce(
  fn,
  delay
) {

  let timer;

  return function (...args) {

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);

  };
}

const search =
  myDebounce(
    () => console.log("Searching..."),
    500
  );

  console.log("Searching...")
  console.log("Searching...")
  console.log("Searching...")
  console.log("Searching...")


  function myThrottle(
  fn,
  limit
) {

  let waiting = false;

  return function (...args) {

    if (waiting) return;

    fn(...args);

    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, limit);

  };
}

const scrollHandler =
  myThrottle(
    () => console.log("Scroll"),
    1000
  );