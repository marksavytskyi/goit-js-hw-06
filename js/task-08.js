const refs = {
    form: document.querySelector('.login-form'),
    email: document.querySelector('input[type="email"]'),
    password: document.querySelector('input[type="password"]')
    
}


refs.form.addEventListener('submit', onSubmit)

function onSubmit(event) {

    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget
    
    if (email.value === '' || password.value === '') {
        alert('Все поля должны быть заполнены!!!')
    } else {
        const newUser = {}

        newUser[email.name] = email.value
        newUser[password.name] = password.value

        console.log(newUser);

        event.currentTarget.reset();

    }
}

