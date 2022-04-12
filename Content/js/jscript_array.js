var todos = [];
var list = document.getElementById('toDoList');

function clearTasks() {
    todos = [];
    list.innerHTML = '';
}



function myFunction() {
    input = document.getElementById('todoInput').value;
    if (input == 0) {
        return;
    }
    list.innerHTML = ''; //resetting the list
    var todoInput = input;
    todos.push(todoInput);

    addListElement(list);

    document.getElementById('todoInput').value = "";
}

function addListElement(list) {
    for (var i = 0; i < todos.length; i++) {
        var listItem = document.createTextNode(todos[i]);

        var li = document.createElement("li");
        li.appendChild(listItem);
        li.classList.add('task', 'd-flex', 'm-2');
        list.append(li);

        //EMPTY SPAN FOR ALIGNMENT
        var span = document.createElement("span");
        span.classList.add("flex-grow-1");
        li.appendChild(span);

        //EDIT BUTTON
        var editButton = document.createElement("button");
        editButton.classList.add('btn-secondary', 'edit', 'mx-1');
        editButton.innerHTML = `
        <i class="fa-solid fa-pen-to-square"></i>
        `;
        li.appendChild(editButton);

        var edit_tasks = document.getElementsByClassName("edit");
        edit_tasks[i].onclick = function () {
            current_text = this.parentElement.innerText;
            for (let i = 0; i < todos.length; i++) {
                if (current_text == todos[i]) {
                    var indexEdit = todos.indexOf(current_text);
                    var new_text = prompt("Change value", todos[indexEdit]);
                    todos[indexEdit] = new_text;
                    editDelete();
                }
            }
        }


        //DELETE BUTTON
        var deleteButton = document.createElement("button");
        deleteButton.classList.add('btn-secondary', 'delete', 'mx-1');
        deleteButton.innerHTML = `
        <i class="fa fa-trash-alt d-flex justify-content-center"></i>
        `;
        li.appendChild(deleteButton);

        var delete_tasks = document.getElementsByClassName("delete");
        delete_tasks[i].onclick = function () {
            current_text = this.parentElement.innerText;
            for (let i = 0; i < todos.length; i++) {
                if (current_text == todos[i]) {
                    const indexDelete = todos.indexOf(current_text);
                    todos.splice(indexDelete, 1);
                    editDelete();
                }
            }
        }
    }
}

function editDelete() {

    if (todos.length == 0) {
        myFunction();
    }
    else {
        list.innerHTML = ''; //resetting the list
        addListElement(list);
    }
}

function handle(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        myFunction();
    }
}