const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify()->스트링으로 바꿔줌
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); //클릭한 li.id와 다른 todo는 남기자 *parseInt->문자열 int로 바꿔줌
    saveToDos();
}
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; //li에 object: id부여
    const span = document.createElement("span");
    span.innerText = newTodo.text; //object: text출력
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = { //todo에 오브젝트 저장
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); //저장
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //JSON.parse-> object로 바꿔줌 (배열과 비슷)
    toDos = parsedToDos; //이전의 todo들 추가
    parsedToDos.forEach(paintToDo);
}

/*
// filter
function goodfilter(item){
    return item !==3;
}
[1,2,3,4].filter(goodfilter); 1,2,3,4 다 호출 (false를 리턴하면? false 받은 원소 뺴고 리턴*/
/*
const todos=[
    {
        "text": "a",
        "id": 1626852839707
    },
    {
        "text": "b",
        "id": 1626852841468
    },
    {
        "text": "c",
        "id": 1626854173122
    }
]
function goodFilter(todo) {return todo.id !== 1626852839707} 주어진 id와 다르면 true 리턴

todos.filter(goodFilter)

결과: a 제외 나머지 출력
*/