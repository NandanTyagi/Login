// Variables
const
    containerDiv = document.getElementById('container'),
    titleDiv = document.getElementById('title'),
    mainDiv = document.getElementById('main'), 
    
    logInOutRetryBtn = document.getElementById('button');
    correctUsername = 'test';
    correctPassword = '1234';
    let
    userNameInput = document.getElementById('user-name'),
    passwordInput = document.getElementById('pass-word'),
    userName = userNameInput.value, 
    password = passwordInput.value;   
// Check if user is not logged out
if(localStorage.length >= 1){
    init();
}
function init(){
    btnClicked();
}
// When button is clicked (Main function)
function btnClicked() {
    let
    userNameInput = document.getElementById('user-name'),
    passwordInput = document.getElementById('pass-word');
    if(logInOutRetryBtn.innerText === 'Try agin?'){
        logOutBtnClicked();
    }
    // Check local storage
    if (localStorage.length >= 1){
        if(logInOutRetryBtn.innerText === 'Log in'){
            renderWelcomePage();
        }else {
            logOutBtnClicked();
        }
    }else{
        if(logInOutRetryBtn.innerText === 'Try agin?'){
            logOutBtnClicked();
        }
        logInOutRetryBtn.innerText === 'Log in' ? loginBtnClicked() : logOutBtnClicked();
    }
    // When log in button is clicked
    function loginBtnClicked(){
        let
            userName = userNameInput.value, 
            password = passwordInput.value;
        if (localStorage.length >= 1){
            if(logInOutRetryBtn.innerText === 'Log in'){
                renderWelcomePage();
            }else{
                logIn(userName,password);
                }
        }else if(localStorage.length === 0){
            let
            userName = userNameInput.value, 
            password = passwordInput.value;
            logIn(userName,password);
        }else{
            renderErrorPage();
        }
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
    }
    function logOut() {
        localStorage.clear();
        titleDiv.innerHTML = `
        <h1>Log in</h1>
        `;
        mainDiv.innerHTML = `
        <input type="text" class="user-name" id="user-name" placeholder="Username">
        <input type="password" class="pass-word" id="pass-word" placeholder="Password">
        `;
        logInOutRetryBtn.innerText = `Log in`;
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
        console.log(`in renderWelcomePage`); 
    }
    // Create the "log in unsuccessfull" page
    function renderErrorPage(){
        titleDiv.innerHTML = `
        <h1>Error!</h1>
        `;
        mainDiv.innerHTML = `
        <p style="text-align:center">Invalid username or password!
        </p>`;
        logInOutRetryBtn.innerText = `Try again?`;
    }
}
// Eventlistener
logInOutRetryBtn.addEventListener('click', btnClicked);