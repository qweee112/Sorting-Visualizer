
const speed = document.querySelector("#speed")

export async function bubbleSort(array) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (
        parseInt(array[i].style.height) > parseInt(array[i + 1].style.height)
      ) {
        array[i].style.backgroundColor = "red";
        array[i + 1].style.backgroundColor = "red";

        swapped = true;
        swap(array, i, i + 1);
        
        await new Promise((resolve) => setTimeout(resolve, 500 / speed.value)); 

        array[i].style.backgroundColor = "var(--blue)";
        array[i + 1].style.backgroundColor = "var(--blue)";
      }
    }
  }
  return array;
}

export async function selectionSort(array) {
  let index;
  let smallest;
  for (let i = 0; i < array.length - 1; i++) {
    index = i;
    smallest = array[i];
    
    for (let j = i; j < array.length - 1; j++) {
      array[j].style.backgroundColor = "red";
      await new Promise((resolve) => setTimeout(resolve, 500)); 
      array[j].style.backgroundColor = "var(--blue)";
      smallest.style.backgroundColor = "green";
      if (parseInt(smallest.style.height) < parseInt(array[j + 1].style.height)) {
        continue;
      } else {
        smallest.style.backgroundColor = "var(--blue)";
        index = j + 1;
        smallest = array[j + 1];
        smallest.style.backgroundColor = "green";
      }
    }
    smallest.style.backgroundColor = "var(--blue)"
  let temp = smallest.style.height;
    array[index].style.height = array[i].style.height;
    array[i].style.height = temp;
  }
  return array;
}

export function swap(array, i, j) {
  let temp = array[i].style.height;
  array[i].style.height = array[j].style.height;
  array[j].style.height = temp;
}

export function partition(array, lowest, highest) {
  let pivot = array[highest];
  let i = lowest - 1;

  for (let j = lowest; j <= highest; j++) {
    if (array[j] <= pivot) {
      i++;
      swap(array, i, j);
    }
  }
  return i;
}

export function quickSort(array, lowest, highest) {
  if (lowest < highest) {
    let newPivot = partition(array, lowest, highest);
    quickSort(array, lowest, newPivot - 1);
    quickSort(array, newPivot + 1, highest);
  }
  return array;
}

const bigArray = [
  45, 23, 78, 12, 56, 90, 1, 5, 3, 88, 99, 65, 34, 67, 89, 24, 17, 81, 43, 29,
  76, 53, 62, 49, 19, 95, 4, 7, 6, 50,
];

export function merge(leftArray, rightArray) {
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    leftArray[0] <= rightArray[0]
      ? sortedArray.push(leftArray.shift())
      : sortedArray.push(rightArray.shift());
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}

export function mergeSort(array) {
  if (array.length < 2) return array;

  const mid = Math.floor(array.length / 2);
  console.log(mid);

  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
