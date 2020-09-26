// Variables
credentials = {
    correctUsername: '',
    correctPassword: ''
}
const
    titleDiv = document.getElementById('title'),
    mainDiv = document.getElementById('main'), 
    btnDiv = document.getElementById('btn'),
    logInOutRetryBtn = document.getElementById('button')
    
    
let
    userNameInput = document.getElementById('user-name'),
    passwordInput = document.getElementById('pass-word'),
    userName = userNameInput.value, 
    password = passwordInput.value; 
    // Check if user is not logged out
    if(!localStorage.getItem('username')){
        console.log('here')
    }else {
        btnClicked();
    }
// When button is clicked (Main function)
function btnClicked() {
    fetch('./users.json')
    .then(users => users.json())
    .then(users => {
        let
        userNameInput = document.getElementById('user-name'),
        passwordInput = document.getElementById('pass-word');
        try{
            var userName = userNameInput.value;
            var password = passwordInput.value;
        }catch(e) {
            console.log(e);
            renderErrorPage();
        }
        credentials.correctUsername = users.find(user => user.username === userName);
        credentials.correctPassword = users.find(user => user.password === password);

        if(credentials.correctUsername && credentials.correctPassword){
            logInOutRetryBtn.innerText === 'Log in' ? loginBtnClicked() : renderErrorPage()
        }else if(!credentials.correctUsername && !credentials.correctPassword && logInOutRetryBtn.innerText === 'Try again') {
            console.log('in elseif 1')
            logOut();
            
        }else {
            console.log('in elseif 2')
            if(localStorage.getItem('username')){
                logInOutRetryBtn.innerText === 'Log in' ? loginBtnClicked() : renderErrorPage() ;
            }else {
               renderErrorPage(); 
            }  
        }

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
    });

    // Verify credentials, save to local storage, show "log in" view or show "error" view
    function logIn(userName,password) {
        console.log(credentials.correctUsername.username);
        console.log(credentials.correctUsername.password);
        if (userName === credentials.correctUsername.username && password === credentials.correctPassword.password){  
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
        console.log('in logout')
    }

    // Local storage
    function addToLocalStorage(userName, password) {
        localStorage.setItem('username',userName);
        localStorage.setItem('password',password);
    }

    // Create "login successfull" view
    function renderWelcomePage() {
        let name = localStorage.getItem('username');
        let firstLetter = name.charAt(0).toUpperCase();
        let restLetters = name.substring(1,name.length);
        let capitalizedName = `${firstLetter}${restLetters}`;

        titleDiv.innerHTML = `
        <h1 class="title">Welcome ${capitalizedName}!
        </h1>`;
        mainDiv.innerHTML = `
        <h3 style="text-align:center">Log in successfull!
        `;
        logInOutRetryBtn.innerText = `Log out`;
        console.log(`in renderWelcomePage`); 
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