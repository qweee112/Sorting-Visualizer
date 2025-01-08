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
