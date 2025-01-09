import { bubbleSort, selectionSort, quickSort } from "./sorting.js";

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
const bigArray = [45, 23, 78, 12, 56, 90, 1, 5, 3, 88, 99, 65, 34, 67, 89, 24, 17, 81, 43, 29, 76, 53, 62, 49, 19, 95, 4, 7, 6, 50];
const lowValue = 0; // Start index of the array
const highValue = bigArray.length - 1; // End index of the array

console.log(quickSort(bigArray, lowValue, highValue));
