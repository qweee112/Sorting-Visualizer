import { bubbleSort, selectionSort, quickSort, mergeSort } from "./sorting.js";

const listItems = document.querySelectorAll(".algorithm");

listItems.forEach((li) => {
  li.addEventListener("click", function () {
    listItems.forEach((li) => {
      li.style.backgroundColor = "var(--darkBlue)";
    });
    li.style.backgroundColor = "var(--blue)";
  });
});

const getRandom = function () {
  return Math.trunc(Math.random() * 100 + 1);
};

console.log(document.querySelector(".arraySize"));

function generateArray(value) {
  const globalArray = Array.from({ length: value }, () => getRandom());
  adjustBars(globalArray);
  return globalArray;
}

function adjustBars(array) {
  const barContainer = document.querySelector(".barContainer");
  let bars = document.querySelectorAll(".bar");
  const barsLength = bars.length;
  const arrayLength = array.length;

  // Adjust the number of bars
  if (barsLength < arrayLength) {
    // Add bars
    for (let j = 0; j < arrayLength - barsLength; j++) {
      const newBar = document.createElement("div");
      newBar.classList.add("bar");
      newBar.setAttribute("id", `bar-${barsLength + j}`);
      barContainer.appendChild(newBar);
    }
  } else if (barsLength > arrayLength) {
    // Remove excess bars
    for (let j = 0; j < barsLength - arrayLength; j++) {
      bars[barsLength - 1 - j].remove();
    }
  }

  // Update the `bars` NodeList after adjustments
  bars = document.querySelectorAll(".bar");

  // Update bar styles and text
  for (let i = 0; i < arrayLength; i++) {
    bars[i].style.height = array[i] + "%";
    bars[i].innerText = array[i] + "%";
  }
}

const rangeInputs = document.querySelectorAll(".rangeInput");
const sliderValue = document.querySelector(".sliderValue");
const slider = document.querySelector(".slider");

rangeInputs[1].addEventListener("input", function () {
  let rangeInputValue = rangeInputs[1].value;
  if (rangeInputValue >= 10) {
    sliderValue.style.left = "4px";
    sliderValue.style.top = "9px";
  } else {
    sliderValue.style.left = "7px";
    sliderValue.style.top = "12px";
  }
  sliderValue.innerText = rangeInputValue;
  slider.style.left = (rangeInputValue / rangeInputs[1].max) * 70 + "%";

  generateArray(rangeInputValue);
});

const algorithms = document.querySelectorAll(".algorithm");

algorithms.forEach((algo) => {
  algo.addEventListener("click", function (event) {
    const algorithm = event.target.innerHTML;
    const bars = document.querySelectorAll(".bar");
    if (algorithm === "Selection Sort") {
      selectionSort(bars);
    } else if (algorithm === "Bubble Sort") {
      bubbleSort(bars);
    } else if (algorithm === "Quick Sort") {
    } else if (algorithm === "Merge Sort") {
    }
  });
});
