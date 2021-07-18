const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";

function loginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    greeting.innerText="Hello "+username;
    // greeting.innerText=`Hello ${username}`; (윗줄과 동일함, 변수 다루기)
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}

loginForm.addEventListener("submit", loginSubmit);
