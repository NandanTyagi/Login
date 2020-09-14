// Variables
const
    titleDiv = document.getElementById('title'),
    mainDiv = document.getElementById('main'), 
    logInOutRetryBtn = document.getElementById('button'),
    correctUsername = 'test',
    correctPassword = '1234';
let
    userNameInput = document.getElementById('user-name'),
    passwordInput = document.getElementById('pass-word'),
    userName = userNameInput.value, 
    password = passwordInput.value;  
// Check if user is not logged out
if(localStorage.length >= 1){
    btnClicked();
}
// When button is clicked (Main function)
function btnClicked() {
let
    userNameInput = document.getElementById('user-name'),
    passwordInput = document.getElementById('pass-word');
    logInOutRetryBtn.innerText === 'Log in' ? loginBtnClicked() : logOut();
    // When "Log in" button is clicked
    function loginBtnClicked(){
        // Check localstorage and show previously logged in user
        if (localStorage.length >= 1){
            logInOutRetryBtn.innerText === 'Log in' ? renderWelcomePage() : null; 
        }else if(localStorage.length === 0){ // Log in new user
            let
            userName = userNameInput.value, 
            password = passwordInput.value;
            logIn(userName,password);
        }else{ // Show "error" view if varification fails
            renderErrorPage();
        }
    }
    // Verify credentials, save to local storage, show "log in" view or show "error" view
    function logIn(userName,password) {
        if (userName === correctUsername && password === correctPassword){
            addToLocalStorage(userName, password);
            renderWelcomePage();
        }else {
            renderErrorPage();
        }
    }
    // Log out, clear localstorage and create "log in" view
    function logOut() {
        localStorage.clear();
        titleDiv.innerHTML = `
        <h1 class="title">Log in</h1>
        `;
        mainDiv.innerHTML = `
        <input type="text" class="user-name" id="user-name" placeholder="Username">
        <input type="password" class="pass-word" id="pass-word" placeholder="Password">
        `;
        logInOutRetryBtn.innerText = `Log in`;
    }
    // Local storage
    function addToLocalStorage(userName, password) {
        localStorage.setItem('username',userName);
        localStorage.setItem('password',password);
    }
    // Create "login successfull" view
    function renderWelcomePage() {
        titleDiv.innerHTML = `
        <h1 class="title">Hello and welcome! <br>"${localStorage.getItem('username')}"
        </h1>`;
        mainDiv.innerHTML = `
        <h3 style="text-align:center">Log in successfull!
        `;
        logInOutRetryBtn.innerText = `Log out`; 
    }
    // Create "log in unsuccessfull" view
    function renderErrorPage(){
        titleDiv.innerHTML = `
        <h1 class="error title"><em>Error!</em></h1>
        `;
        mainDiv.innerHTML = `
        <p style="text-align:center" class="error">
        <em>Invalid username or password!</em>
        </p>`;
        logInOutRetryBtn.innerText = `Try again`;
    }
}
// Eventlisteners for mouse-click and enter-keypress 
logInOutRetryBtn.addEventListener('click', btnClicked);
document.addEventListener('keydown', e =>
e.code === 'Enter'|| e.code === 'NumpadEnter' ? btnClicked() : null);
