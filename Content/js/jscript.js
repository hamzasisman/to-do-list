var button = document.querySelector('#push');
var elem = document.getElementById('inputText');

function myfunction() {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Task cannot be empty, please Enter a Task")
    }
    else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task d-flex m-2">
                <span id="taskname" class="taskname flex-grow-1" style="overflow: hidden;">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="btn-secondary edit mx-1">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn btn-secondary delete mx-1">
                    <i class="fa fa-trash-alt d-flex justify-content-center"></i>
                </button>   
            </div>
        `;
        var delete_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < delete_tasks.length; i++) {
            delete_tasks[i].onclick = function () {
                this.parentNode.remove();
            }

        }

        var edit_tasks = document.querySelectorAll(".edit");
        for (var i = 0; i < edit_tasks.length; i++) {
            edit_tasks[i].onclick = function () {
                var span = this.parentNode.querySelector("#taskname");
                var text = span.innerText;
                var new_text = prompt("Change value", text);

                if (new_text != null)
                    span.innerHTML = new_text;
            }

        }

        document.querySelector('#newtask input').value = "";

    }
}

function handle(e){
    if(e.keyCode === 13){
        e.preventDefault(); // Ensure it is only this code that runs

        myfunction();
    }
}
