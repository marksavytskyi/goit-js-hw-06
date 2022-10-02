function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  
  destroy: document.querySelector('button[data-destroy]'),
  number: document.querySelector('input[type="number"]'),
  create: document.querySelector('button[data-create]'),
  boxes: document.querySelector('#boxes')
}

refs.destroy.addEventListener('click', destroyBoxes)
refs.number.addEventListener('input', onNumberCollect)
refs.create.addEventListener('click', createBoxes)

let value = 0

function destroyBoxes() {

  refs.boxes.innerHTML = ''
  refs.number.value = ''

}

function onNumberCollect(event) {
  value = Number(refs.number.value)
} 

function createBoxes(amount) {
  amount = value

  console.log(amount);

  let arr = ''
  let widthHeigth = 20

  for (let i = 0; i < amount; i++) {
    const newBlock = `<div style="width: ${widthHeigth + 10}px; height: ${widthHeigth + 10}px; background-color: ${getRandomHexColor()};"></div>`
    widthHeigth += 10
    arr += newBlock
  }
  refs.boxes.innerHTML = arr
}


