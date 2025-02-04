const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {  // Prevent empty or space-only tasks
        alert("You must write something!");
    } else {
        let li = document.createElement("li");  // Create list item
        li.innerHTML = inputBox.value;  // Set the text content
        listContainer.appendChild(li);

        // Create '×' (delete button)
        let span = document.createElement("span");  // Fixed typo here
        span.innerHTML = "\u00d7";  // Unicode for '×' symbol
        li.appendChild(span);
    }
    // Clear input after adding task
    inputBox.value = "";
    savedata();

}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");  // Fixed string format
        savedata()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata()
    }
}, false);

function savedata() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();