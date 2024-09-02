
const container = document.querySelector('.container')
const register_form = document.getElementById('register_form')
const login_form = document.getElementById('login_form')
const url_login = 'http://localhost:3000/auth/login'
//troca de formulários
container.addEventListener('click', (event) =>{
    if(event.target.innerHTML === 'Já tem uma conta?'){
        login_form.style.display = 'flex'
        register_form.style.display = 'none'
    }else if(event.target.innerHTML === 'Ainda não tem uma conta?'){
        login_form.style.display = 'none'
        register_form.style.display = 'flex'
    }
})
/* USER LOGIN FETCH */
async function user_login(email, password) {
    const response = await fetch(url_login,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email: email,
            password: password
        })
    })

    const data = await response.json()

    return data.msg
}
/* Submit login form */
login_form.onsubmit = async (event) => {
    event.preventDefault();
    const email_login = document.getElementById('email_login')
    const password_login = document.getElementById('password_login')
    console.log(await user_login(email_login.value, password_login.value))
    login_form.reset()
}