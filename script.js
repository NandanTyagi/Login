// Variables
const
    containerDiv = document.getElementById('container'),
    titleDiv = document.getElementById('title'),
    mainDiv = document.getElementById('main'), 
    userNameInput = document.getElementById('user-name'),
    passwordInput = document.getElementById('pass-word'),
    logInOutRetryBtn = document.getElementById('button');
    correctUsername = 'test';
    correctPassword = '1234';
    

// When button is clicked
function btnClicked() {
    if (logInOutRetryBtn.innerText === 'Log in'){
        logIn();
    }else if(logInOutRetryBtn.innerText === 'Log out'){
        logOut;
    }else{
        logOut();
    }
}
// When log in button is clicked
function loginBtnClicked(){
    let
        userName = userNameInput.value, 
        password = passwordInput.value;
        logIn(userName,password);
        console.log('in logInBtnClicked ' + localStorage.getItem('username') + ' ' + localStorage.getItem('password'));
}
function logIn(userName,password) {
    if (userName === correctUsername && password === correctPassword){
        addToLocalStorage(userName, password);
        renderWelcomePage();
    }else {
        renderErrorPage();
    }
}
// When log out button is clicked
function logOutBtnClicked() {
    logOut();
    console.log('inlogOut ' + localStorage.getItem('username') + ' ' + localStorage.getItem('password'));  
}
function logOut() {
    localStorage.clear();
    userName = '';
    password = '';
    titleDiv.innerHTML = `
    <h1>Log in</h1>
    `;
    mainDiv.innerHTML = `
    <input type="text" class="user-name" id="user-name" placeholder="Username">
    <input type="password" class="pass-word" id="pass-word" placeholder="Password">
    `;
    logInOutRetryBtn.innerText = `Log in`;
    console.log(`local storage = ${localStorage.getItem('username')}`);  
}
// Save to local storage
function addToLocalStorage(userName, password) {
    localStorage.setItem('username',userName);
    localStorage.setItem('password',password);
}
// Create the "login successfull" page
function renderWelcomePage() {
    titleDiv.innerHTML = `
    <h1>Hello! "${localStorage.getItem('username')}"
    </h1>`;
    mainDiv.innerHTML = `
    <h3 style="text-align:center">Log in successfull!
    `;
    logInOutRetryBtn.innerText = `Log out`;
}
// Create the log in unsuccessfull page
function renderErrorPage(){
    titleDiv.innerHTML = `
    <h1>Error!</h1>
    `;
    mainDiv.innerHTML = `
    <p style="text-align:center">Invalid username or password!
    </p>`;
    logInOutRetryBtn.innerText = `Try again?`;
}
// Eventlistener
logInOutRetryBtn.addEventListener('click', btnClicked);