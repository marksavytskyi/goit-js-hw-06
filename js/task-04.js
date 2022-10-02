const refs = {
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
    value: document.querySelector('#value'),
}

refs.decrement.addEventListener('click', onDecrement)
refs.increment.addEventListener('click', onincrement)

let counterValue = 0

function onDecrement() {
    counterValue -= 1
    refs.value.textContent = counterValue
}

function onincrement() {
    counterValue += 1;
    refs.value.textContent = counterValue
}
