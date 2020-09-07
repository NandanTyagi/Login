const
    containerDiv = document.getElementById('container'),
    titleDiv = document.getElementById('title'),
    mainDiv = document.getElementById('main'), 
    userNameInput = document.getElementById('user-name'),
    passwordInput = document.getElementById('pass-word'),
    logInOutRetryBtn = document.getElementById('button');
    correctUsername = 'test';
    correctPassword = '1234';

function btnClicked() {
    logInOutRetryBtn.innerText === 'Login' ? loginBtnClicked() : logOutBtnClicked();
    // if (logInOutRetryBtn.innerText === 'Login'){
    //     logIn();
    // }else{
    //     logOut;
    // }
}

function loginBtnClicked(){
    let
        userName = userNameInput.value;
        password = passwordInput.value;
    // console.log(userName);
    // console.log(password);
        logIn(userName,password);
        console.log('in logInBtnClicked ' + localStorage.getItem('username') + ' ' + localStorage.getItem('password'));
}
function logIn(userName,password) {
    if (userName === correctUsername && password === correctPassword){
        // console.log(userName);
        // console.log(password);
        addToLocalStorage(userName, password);
        renderWelcomePage();
    }else {
        renderErrorPage();
    }
}
function logOutBtnClicked() {
    logOut();
    console.log('inlogOut ' + localStorage.getItem('username') + ' ' + localStorage.getItem('password'));
    
}
function logOut() {
    localStorage.clear();
    location.reload();
    
}
function addToLocalStorage(userName, password) {
    localStorage.setItem('username',userName);
    localStorage.setItem('password',password);
    // console.log(localStorage);
}
function renderWelcomePage() {
    titleDiv.innerHTML = `
    <h1>Hello "${localStorage.getItem('username')}"
    </h1>`;
    mainDiv.innerHTML = `
    <h3 style="text-align:center">Log in successfull!
    `;
    logInOutRetryBtn.innerText = `Log out`;
}






logInOutRetryBtn.addEventListener('click', btnClicked);