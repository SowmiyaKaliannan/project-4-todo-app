const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === '') {
        alert("you must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");  // create a span tag
        span.innerHTML = "\u00d7";                   //  span.innerhtml --add cross icon in span tag
        // \u00d7 is cross icon, innerHtml adds the contents to html

        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}


listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();