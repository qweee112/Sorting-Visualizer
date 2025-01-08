import { bubbleSort, selectionSort } from "./sorting.js";

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
  let globalArray = [];
  while (globalArray.length !== value) {
    globalArray.push(getRandom());
  }
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
