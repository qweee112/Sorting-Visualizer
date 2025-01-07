
const listItems = document.querySelectorAll(".algorithm");

listItems.forEach(li => {
  li.addEventListener('click', function () {
    listItems.forEach(li => {
      li.style.backgroundColor = "black";
    })
    li.style.backgroundColor = "#005B41"
  })
})

const getRandom = function () {return Math.trunc(Math.random() * 100 + 1)}


