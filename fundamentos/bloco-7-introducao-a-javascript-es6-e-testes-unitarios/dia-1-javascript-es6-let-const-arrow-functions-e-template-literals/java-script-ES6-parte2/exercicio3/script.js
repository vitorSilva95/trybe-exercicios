const p = document.getElementById('clickCount');
let clickCount = 0;
const butttonClick = document.getElementById('clickButton').addEventListener('click', (event) => {
  event.preventDefault();
  clickCount += 1;
  p.innerText = clickCount;
})