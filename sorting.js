export function bubbleSort(array) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swapped = true;
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}

export function selectionSort(array) {
  let index;
  let smallest;
  for (let i = 0; i < array.length - 1; i++) {
    index = i;
    smallest = array[i];
    for (let j = i; j < array.length - 1; j++) {
      if (smallest < array[j + 1]) {
        continue;
      } else {
        index = j + 1;
        smallest = array[j + 1];
      }
    }
    array[index] = array[i];
    array[i] = smallest;
  }
  return array;
}
