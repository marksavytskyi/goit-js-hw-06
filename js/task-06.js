const refs = {
    input: document.querySelector('#validation-input'),
    valid: document.querySelector('#validation-input.valid')
}

refs.input.addEventListener('blur', onValidInput)

function onValidInput(event) {

    if (event.currentTarget.value.length === 0) {
        refs.input.classList.remove('invalid')
        refs.input.classList.remove('valid')
    } else if (event.currentTarget.value.length === Number(refs.input.getAttribute('data-length'))) {
        refs.input.classList.remove('invalid')
        refs.input.classList.add('valid')
        
    } 
    else {
        refs.input.classList.remove('valid')
        refs.input.classList.add('invalid')
    } 
    
}