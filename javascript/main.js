let input = document.getElementById('input');
let item = document.querySelector(".task");

function word() {
    if (input.value === "") {
        alert("There is nothing written in the input.Please enter your task!");
    } else {
        const taskitem = document.createElement("ul");
        taskitem.textContent = input.value;
        const removeicon = document.createElement("i");
        removeicon.classList.add("fa-solid", "fa-xmark");
        taskitem.appendChild(removeicon);
        item.appendChild(taskitem);
        removeicon.addEventListener("click", () => taskitem.remove());
    }
}

document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        word();
    }
});