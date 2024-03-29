const inputBox = document.getElementById("input-tasks");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value == ''){
        alert('You must write something!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function getData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

let popup = document.getElementById("popup");

function popUp(){
    popup.classList.add("open-popup");
}
function closePopUp(){
    popup.classList.remove("open-popup");
}

const resetButton = document.getElementById("reset");

function resetList(){
    listContainer.innerHTML = '';
    closePopUp()
    saveData();
}

getData();