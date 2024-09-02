const userData = JSON.parse(localStorage.getItem('userData'))

const url_user = 'https://login-teste-c3x7.onrender.com/user'
console.log(localStorage);

start(userData)
/*start*/
async function start(data) {
    user = await user_get(data.token, data.id)
    console.log(user);
    document.getElementById('container').innerHTML = `
        <div class="row">
            <div class="mx-auto m-5">
                <h1 class="mb-5">Olá, <span id="userName"></span>!</h1>
                <p>Email: <span id="userEmail"></span></p>
                <p>Nome : <span id="userFullName"></span></p>
                <button id="logout" class="btn btn-outline-danger">Sair</button>
            </div>
        </div>
    `
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userEmail').textContent = user.email;
    document.getElementById('userFullName').textContent = user.name;
    /*logout function*/
    document.getElementById('logout').onclick = () => {
        localStorage.removeItem('userData');
        window.location.href = 'index.html'; // Redireciona para a página de login
    }

}
console.log(userData);


/*USER GET */
async function user_get(token, id){
    const response = await fetch(`${url_user}/${id}`,{
        headers: {Authorization: `Bearer ${token}`}
    })
    const data = await response.json()
    return data.user
}
