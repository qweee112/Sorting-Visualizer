const speed = document.querySelector("#speed");
const pauseBtn = document.querySelector("#pause");
const stopBtn = document.querySelector("#stop");
const playBtn = document.querySelector("#play");

let stop = false;
let isPaused = false;

pauseBtn.addEventListener("click", async () => {
  if (isPaused) {
    isPaused = false;
    pauseBtn.innerText = "Pause";
  } else {
    isPaused = true;
    pauseBtn.innerText = "Resume";
  }
});
stopBtn.addEventListener("click", async () => {
  playBtn.disable = false;
  stop = true;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  stop = false;
});

const pauseLoop = async () => {
  while (isPaused) {
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  return;
};

let stopTimer = false;

export const timer = async () => {
  stopTimer = false;
  const min = document.querySelector("#min");
  const sec = document.querySelector("#sec");
  let currentSeconds = 0;
  let currentMinutes = 0;

  min.innerText = "00";
  sec.innerText = "00";

  while (!stopTimer) {
    if (sec.innerText === "60") {
      currentMinutes++;
      currentSeconds = 0;
      min.innerText = "0" + currentMinutes;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000 / speed.value));

    if (stop) {
      min.innerText = "00";
      sec.innerText = "00";
      return;
    }
    if (isPaused) await pauseLoop();

    currentSeconds++;
    currentSeconds < 10
      ? (sec.innerText = "0" + currentSeconds)
      : (sec.innerText = currentSeconds);
  }
  return [currentMinutes, currentSeconds];
};

export async function bubbleSort(array) {
  playBtn.disabled = true;
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (stop) {
        playBtn.disabled = false;
        return;
      }
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
  stopTimer = true;
  playBtn.disabled = false;
  return array;
}

export async function selectionSort(array) {
  playBtn.disabled = true;
  let index;
  let smallest;
  for (let i = 0; i < array.length - 1; i++) {
    index = i;
    smallest = array[i];

    for (let j = i; j < array.length - 1; j++) {
      if (stop) {
        playBtn.disabled = false;
        smallest.style.backgroundColor = "var(--blue)";
        return;
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
    let temp = [smallest.style.height, smallest.innerText];

    array[index].innerText = array[i].innerText;
    array[i].innerText = temp[1];

    array[index].style.height = array[i].style.height;
    array[i].style.height = temp[0];
  }
  stopTimer = true;
  playBtn.disabled = false;
  return array;
}

export function swap(array, i, j) {
  let temp = [array[i].style.height, array[i].innerText];

  array[i].style.height = array[j].style.height;
  array[i].innerText = array[j].innerText;

  array[j].style.height = temp[0];
  array[j].innerText = temp[1];
}

export async function partition(array, lowest, highest) {
  let pivot = array[highest].style.height;
  let i = lowest - 1;

  for (let j = lowest; j <= highest; j++) {
    if (stop)  return;
    if (isPaused) await pauseLoop();

    if (parseInt(array[j].style.height) <= parseInt(pivot)) {
      i++;
      swap(array, i, j);
    }
    if (array[i]) array[i].style.backgroundColor = "green";
    array[j].style.backgroundColor = "red";

    await new Promise((resolve) => setTimeout(resolve, 500 / speed.value));

    if (array[i]) array[i].style.backgroundColor = "var(--blue)";
    array[j].style.backgroundColor = "var(--blue)";
  }
  return i;
}

export async function quickSort(array, lowest, highest) {
  if (lowest < highest) {
    let newPivot = await partition(array, lowest, highest);
    quickSort(array, lowest, newPivot - 1);
    quickSort(array, newPivot + 1, highest);
  }
  stopTimer = true;
  return array;
}

export function merge(leftArray, rightArray) {
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    parseInt(leftArray[0].style.height) <= parseInt(rightArray[0].style.height) 
    ? sortedArray.push(leftArray.shift()) : sortedArray.push(rightArray.shift());
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}

export function mergeSort(array) {
  if (array.length < 2) return array;

  const mid = Math.floor(array.length / 2);
  array[mid].style.backgroundColor = "green";
  console.log(array);
  
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);
  console.log(leftArray, rightArray);
  

  // return merge(mergeSort(leftArray), mergeSort(rightArray));
}
