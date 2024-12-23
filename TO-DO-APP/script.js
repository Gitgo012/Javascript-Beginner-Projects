const searchBox=document.querySelector(".searchBox");
const listItems=document.querySelector(".list-container");

function addTask(){
    if (searchBox.value === ''){
        alert("Please enter some text");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = searchBox.value;
        listItems.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML = "&times";
        li.appendChild(span);
        saveData();
        removePadding();
    }
}

listItems.addEventListener("click", (e) =>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        removePadding();
    }
}, false );

function saveData(){
    localStorage.setItem("data", listItems.innerHTML);
}
function getData(){
    let data = localStorage.getItem("data");
    listItems.innerHTML = data;
}


function removePadding(){
    let data = localStorage.getItem("data");
    if (data !== ""){
        document.querySelector(".tasks").style.padding = "20px 10px";
    }
    else{
        document.querySelector(".tasks").style.padding = 0;
    }
}
getData();
removePadding();