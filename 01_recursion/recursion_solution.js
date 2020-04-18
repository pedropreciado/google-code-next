function factorial(n) {
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
}

function pow(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * pow(base, exponent - 1);
}

function lucasNumber(n) {
  if (n === 0) {
    return 2;
  }
  if (n === 1) {
    return 1;
  }
  return lucasNumber(n - 1) + lucas_number(n - 2);
}

function sumArray() {
  if (array.length === 0) {
    return 0;
  }
  let first = array[0];
  let rest = array[1: array.length];
  return first + sumArray(rest);
}


// Binary Search Solution
function binarySearch(array, target) {
  if (array.length === 0) {
    return false;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx + 1);

  if (target < array[midIdx]) {
    return binarySearch(leftHalf, target);
  } else if (target > array[midIdx]) {
    return binarySearch(rightHalf, target);
  } else {
    return true;
  }
}


// Binary Search Index Solution
function binarySearchIndex(array, target, lo = 0, hi = array.length - 1) {
  if (lo === hi) {
    return -1;
  }

  let midIdx = Math.floor((lo + hi) / 2);

  if (target < array[midIdx]) {
    return binarySearchIndex(array, target, lo, midIdx);
  } else if (target > array[midIdx]) {
    return binarySearchIndex(array, target, midIdx + 1, hi);
  } else {
    return midIdx;
  }
}

// Merge Sort Solution
function merge(array1, array2) {
  let merged = [];

  while (array1.length || array2.length) {
    let ele1 = array1.length ? array1[0] : Infinity;
    let ele2 = array2.length ? array2[0] : Infinity;

    let next;
    if (ele1 < ele2) {
      next = array1.shift();
    } else {
      next = array2.shift();
    }

    merged.push(next);
  }

  return merged;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIdx);
  let rightHalf = array.slice(midIdx);

  let sortedLeft = mergeSort(leftHalf);
  let sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}