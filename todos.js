document.addEventListener("DOMContentLoaded", function(){
    let todoForm = document.getElementById("addToDosForm");
    let todoList = document.getElementById("todoList");

    todoForm.addEventListener("submit", function(event){
        event.preventDefault();

        let removeButton = document.createElement("button");
        removeButton.innerText = "Done";

        let newTodo = document.createElement("li");
        newTodo.innerText = document.getElementById("task").value;

        todoList.appendChild(newTodo);
        newTodo.appendChild(removeButton);

        todoForm.reset();
    });

    todoList.addEventListener("click", function(event){
        const targetTageToLowerCase = event.target.tagName.toLowerCase();
        if(targetTageToLowerCase === "li") {
            event.target.style.textDecoration = "line-through";
        }

        else if (targetTageToLowerCase === "button") {
            event.target.parentNode.remove();
        }
    });
});