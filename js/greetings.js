const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function loginSubmit(event){
    event.preventDefault(); //페이지 새로고침 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}
function paintGreeting(username){
    greeting.innerText="Hello "+username; //비어있는 h1안에 문구 추가
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername=localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){ //저장된 유저이름 없을경우
    loginForm.classList.remove(HIDDEN_CLASSNAME); //hidden class명 지워줌
    loginForm.addEventListener("submit", loginSubmit);
}
else{ //저장된 유저 이름 있을경우
    paintGreeting(savedUsername);
}
//localStorage.setItem(key, value) //로컬 스토리지에 값 저장
//            .removeItem 값 제거
//            .getItem 값 불러오기