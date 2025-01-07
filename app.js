import { bubbleSort, selectionSort } from "./sorting.js";

const listItems = document.querySelectorAll(".algorithm");
const bars = document.querySelectorAll(".bar");

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
    globalArray.push(Math.trunc(Math.random() * 100 + 1));
  }
  adjustBars(globalArray);
  return globalArray;
}

function adjustBars(array) {
  const barsLength = bars.length;
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    if (barsLength !== arrayLength) {
      for (
        let j = 0;
        j <
        (arrayLength > barsLength
          ? arrayLength - barsLength
          : barsLength - arrayLength);
        j++
      ) {
        document.querySelector(".barContainer").createDiv(".bar");
      }
    }
    document.querySelectorAll(".bar")[i].style.height = array[i];
    document.querySelectorAll(".bar")[i].innerText = array[i] + "%";
  }
}
