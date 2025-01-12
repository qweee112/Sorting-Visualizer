const speed = document.querySelector("#speed");
const pauseBtn = document.querySelector("#pause");
const stopBtn = document.querySelector("#stop")
const playBtn = document.querySelector("#play")

let stop = false;
let isPaused = false;

pauseBtn.addEventListener("click", async () => {
  if (isPaused) {
    isPaused = false;
    pauseBtn.innerText = "Pause"
  } else {
    isPaused = true;
    pauseBtn.innerText = "Resume"
  }
})
stopBtn.addEventListener("click", async () => {
  playBtn.disable = false;
  stop = true;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  stop = false;
})

const pauseLoop = async () => {
  while (isPaused) {
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  return;
};

export async function bubbleSort(array) {
  playBtn.disable = true;
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (stop) return
      if (isPaused) await pauseLoop();
      
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
  playBtn.disable = false;
  return array;
}

export async function selectionSort(array) {
  playBtn.disable = true;
  let index;
  let smallest;
  for (let i = 0; i < array.length - 1; i++) {
    index = i;
    smallest = array[i];

    for (let j = i; j < array.length - 1; j++) {
      if (stop) {
        smallest.style.backgroundColor = "var(--blue)";
        return
      }
      if (isPaused) await pauseLoop();

      array[j].style.backgroundColor = "red";
      await new Promise((resolve) => setTimeout(resolve, 500 / speed.value));
      array[j].style.backgroundColor = "var(--blue)";
      smallest.style.backgroundColor = "green";
      if (
        parseInt(smallest.style.height) < parseInt(array[j + 1].style.height)
      ) {
        continue;
      } else {
        smallest.style.backgroundColor = "var(--blue)";
        index = j + 1;
        smallest = array[j + 1];
        smallest.style.backgroundColor = "green";
      }
    }
    smallest.style.backgroundColor = "var(--blue)";
    let temp = smallest.style.height;
    array[index].style.height = array[i].style.height;
    array[i].style.height = temp;
  }
  playBtn.disable = false;
  return array;
}

export function swap(array, i, j) {
  let temp = [array[i].style.height, array[i].innerText];

  array[i].style.height = array[j].style.height;
  array[i].innerText = array[j].innerText

  array[j].style.height = temp[0];
  array[j].innerText = temp[1]
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
