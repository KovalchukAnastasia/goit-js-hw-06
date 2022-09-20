const formEl = document.querySelector('.login-form');



formEl.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    const data = {
        email: email.value,
        password: password.value
   }
   
    if (email.value === "" || password.value === "") {
        alert('Все поля должны быть заполнены!');
    } 
    console.log(data);
    event.currentTarget.reset();
    
}   


