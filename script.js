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
    passwordInput = document.getElementById('pass-word');
    let
        userName = userNameInput.value, 
        password = passwordInput.value;
      
// If user not logged out
if(localStorage.length >= 1){
    init();
}
function init(){
    btnClicked();
}
// When button is clicked
function btnClicked() {
    let
    userNameInput = document.getElementById('user-name'),
    passwordInput = document.getElementById('pass-word');
    if(logInOutRetryBtn.innerText === 'Try agin?'){
        logOutBtnClicked();
        // let
        // userName = userNameInput.value, 
        // password = passwordInput.value;
    
        // console.log(`Begenning in btnClicked() userName = ${userName} userNameInputValue = ${userNameInput.value}`);
        // console.log(`Begennig in btnClicked() password = ${password} passwordValue = ${passwordInput.value}`);
    }
    

    if (localStorage.length >= 1){
        if(logInOutRetryBtn.innerText === 'Log in'){
            renderWelcomePage();
            // console.log(`in btnClicked() logInOutRetryBtn.innerText === 'Log in'`);
        }else if(logInOutRetryBtn.innerText === 'Log out') {
            logOutBtnClicked();
            // console.log(`in btnClicked() logInOutRetryBtn.innerText === 'Log out'`);
        }else {
            logOutBtnClicked();
            // console.log(`in btnClicked() inner else`);
        }
    }else{
        if(logInOutRetryBtn.innerText === 'Try agin?'){
            logOutBtnClicked();
            // let
            // userName = userNameInput.value, 
            // password = passwordInput.value;
        
            // console.log(`Begenning in btnClicked() userName = ${userName} userNameInputValue = ${userNameInput.value}`);
            // console.log(`Begennig in btnClicked() password = ${password} passwordValue = ${passwordInput.value}`);
        }
        // let
        // userName = userNameInput.value, 
        // password = passwordInput.value;
        // console.log(`in btnClicked() outer else userName = ${userName} userNameInputValue = ${userNameInput.value}`);
        // console.log(`in btnClicked() outer else password = ${password} passwordValue = ${passwordInput.value}`);

        logInOutRetryBtn.innerText === 'Log in' ? loginBtnClicked() : logOutBtnClicked();
        // console.log(`in btnClicked() Ternery else`);
    
    // return userName,password;
}
// When log in button is clicked
function loginBtnClicked(){
    let
        userName = userNameInput.value, 
        password = passwordInput.value;
    if (localStorage.length >= 1){
        if(logInOutRetryBtn.innerText === 'Log in'){
            renderWelcomePage();
            // console.log(`in loginBtnClicked() logInOutRetryBtn.innerText === 'Log in'`);
        }else{
            logIn(userName,password);
            // console.log('in logInBtnClicked local storage ' + localStorage.getItem('username') + ' ' + localStorage.getItem('password'));
            }
    }else if(localStorage.length === 0){
        let
        userName = userNameInput.value, 
        password = passwordInput.value;
        // console.log(`in loginBtnClicked() localStorage.length === 0 userName = ${userName} userNameInputValue = ${userNameInput.value}`);
        // console.log(`in loginBtnClicked() localStorage.length === 0 password = ${password} passwordValue = ${passwordInput.value}`);
        logIn(userName,password);
        // console.log(`in loginBtnClicked() localStorage.length === 0 `);
    }else{
        renderErrorPage();
        // console.log(`in loginBtnClicked() renderErrorPage();`);
    }
}
function logIn(userName,password) {
    if (userName === correctUsername && password === correctPassword){
        addToLocalStorage(userName, password);
        renderWelcomePage();
        // console.log(`in logIn() userName === correctUsername && password === correctPassword`);
        
    }else {
        renderErrorPage();
        // console.log(`in logIn() renderErrorPage();`);
    }
}
// When log out button is clicked
function logOutBtnClicked() {
    logOut();
    // console.log('inlogOutBtn ' + localStorage.getItem('username') + ' ' + localStorage.getItem('password'));  
}
function logOut() {
    localStorage.clear();
    // userName = userNameInput.value;
    // password = passwordInput.value;
    titleDiv.innerHTML = `
    <h1>Log in</h1>
    `;
    mainDiv.innerHTML = `
    <input type="text" class="user-name" id="user-name" placeholder="Username">
    <input type="password" class="pass-word" id="pass-word" placeholder="Password">
    `;
    logInOutRetryBtn.innerText = `Log in`;
    // console.log(`in logOut, local storage length = ${localStorage.length}`);
    // console.log(`in logOut() localStorage.length === 0 userName = ${userName} userNameInputValue = ${userNameInput.value}`);
    // console.log(`in logOut() localStorage.length === 0 password = ${password} passwordValue = ${passwordInput.value}`);
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
    // console.log(`in renderErrorPage`);
}
}
// Eventlistener
logInOutRetryBtn.addEventListener('click', btnClicked);