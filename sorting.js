export function bubbleSort(array) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (
        parseInt(array[i].style.height) > parseInt(array[i + 1].style.height)
      ) {
        console.log(parseInt(array[i].style.height));
        swapped = true;
        const temp = array[i].style.height;
        array[i].style.height = array[i + 1].style.height;
        array[i + 1].style.height = temp;
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
    smallest = parseInt(array[i].style.height);
    for (let j = i; j < array.length - 1; j++) {
      if (smallest < parseInt(array[j + 1].style.height)) {
        continue;
      } else {
        index = j + 1;
        smallest = parseInt(array[j + 1].style.height);
      }
    }
    array[index].style.height = array[i].style.height;
    array[i].style.height = smallest + "%";
  }
  return array;
}

 export const swap = (array, i, j) => {
  // array[i], array[j] = array[j], array[i]
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

export const partition = (array, low, high) => {
  let pivot  = array[high];
  let i = low - 1;
  for (let j = low; j <= high; j++) {
    if (array[j] <= pivot) {
      i++; 
      swap(array, i, j);
    }  
  }
  return i
}

export function quickSort(array, low, high) {
  if (low < high) {
    let subPivot = partition(array, low, high)
    quickSort(array, low, subPivot - 1)
    quickSort(array, subPivot + 1, high)
  }
  return array
}
