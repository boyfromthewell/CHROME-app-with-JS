const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");

const link=document.querySelector("a");
function handleLogin(event){

   event.preventDefault(); //기본 동작 막음(서브밋 이벤트 멈춤 진행 x)
   console.log(loginInput.value);
}
function handleLink(event){
    event.preventDefault(); //기본 동작 막음
}

loginForm.addEventListener("submit", handleLogin);
link.addEventListener("click", handleLink);