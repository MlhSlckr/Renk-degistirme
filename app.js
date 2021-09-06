const button = document.querySelector('.color-change');
const text = document.querySelector('.color-text');
const body = document.querySelector('body');
const title = document.querySelector('title');
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
  body.style.backgroundColor = colorCode;
  button.style.color = colorCode;
  text.style.color = colorCode;
  title.innerHTML = colorCode + ' | Renk Değiştirme';
  localStorage.setItem('color', colorCode);
})

if (localStorage.color) {
  body.style.backgroundColor = localStorage.color;
  button.style.color = localStorage.color;
  text.style.color = localStorage.color;
  text.innerHTML = localStorage.color;
  title.innerHTML = localStorage.color + ' I Renk Değiştirme';
}

