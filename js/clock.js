const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); //string이 가져야하는 길이 2로 설정, 아닐경우 앞에 0붙여줌!!
    const minutes = String(date.getMinutes()).padStart(2, "0"); //*padEnd는 뒤에 붙여줌
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); //1초마다 호출
