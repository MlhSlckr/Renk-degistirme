const button = document.querySelector('.color-change');
const text = document.querySelector('.color-text');
const codesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
let x;

function changeColor() {
  let hexCode = '#';
  for (x = 0; x < 6; x++) {
    hexCode += codesArray[Math.floor(Math.random() * codesArray.length)];
  }
  return hexCode;
}

button.addEventListener('click', () => {
  const colorCode = changeColor();
  text.innerHTML = colorCode;
  document.body.style.backgroundColor = colorCode;
  button.style.color = colorCode;
  text.style.color = colorCode;
})
