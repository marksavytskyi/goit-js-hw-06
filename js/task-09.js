function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  spanColor: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
  body: document.querySelector('body')
}

refs.btn.addEventListener('click', onChangeBodyColor)

function onChangeBodyColor(event) {
  const color = getRandomHexColor()
  refs.body.style.backgroundColor = color
  refs.spanColor.textContent = color
}