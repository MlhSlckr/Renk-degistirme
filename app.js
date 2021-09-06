const button = document.querySelector('.color-change');
const text = document.querySelector('.color-text');
const body = document.querySelector('body');
const title = document.querySelector('title');
const copied = document.querySelector('.copied');
let y = 0;

const codesArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
let x = 0;

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
  title.innerHTML = colorCode + ' I Renk Değiştirme';
  localStorage.setItem('color', colorCode);
  q.value = colorCode;
})

const q = document.querySelector('.q')
const copyText = document.querySelector('.copy-btn')

function copy() {
  q.select();
  document.execCommand("copy");
  copied.classList.add('bottom')
  const interval = setInterval(() => {
    y++;
    console.log(y)
    if (y > 2) {
      copied.classList.remove('bottom');
      clearInterval(interval);
      y = 0;
    }
  }, 1000);
}

copyText.addEventListener('click', copy)

if (localStorage.color) {
  body.style.backgroundColor = localStorage.color;
  button.style.color = localStorage.color;
  text.style.color = localStorage.color;
  text.innerHTML = localStorage.color;
  title.innerHTML = localStorage.color + ' I Renk Değiştirme';
  q.value = text.innerHTML;
}
