// Constants declared for input button and task list area
const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector('.tasks');

// Listener for the Enter key. Used to add a new task.
taskInput.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        createTask();
    }
});

// The onclick event for the 'Add' button
document.querySelector('#push').onclick = function () {
    createTask();
}

// The function that creates a task
function createTask() {
    if (taskInput.value.length == 0) {
        alert("The task field is blank. Enter a task name and try again.");
    } else {
        // This block inserts HTML that creates each task into the task area div element
        taskSection.innerHTML += 
        `<div class="task">
            <label id="taskname">
                <input onclick="updateTask(this)" type="checkbox" id="check-task">
                <p>${taskInput.value}</p>
            </label>
            <div class="delete">
                <ion-icon name="trash-outline"></ion-icon>
            </div>
        </div>`;

        // Add event listeners to all delete buttons
        var currentTasks = document.querySelectorAll(".delete");
        for (var i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        // Handle scrolling when the task list grows
        (taskSection.offsetHeight >= 300)
            ? taskSection.classList.add("overflow")
            : taskSection.classList.remove("overflow");
    }
}

// Function to handle strike-through effect when checking a task
function updateTask(task) {
    let taskItem = task.parentElement.lastElementChild;
    if (task.checked) {
        taskItem.classList.add("checked");
    } else {
        taskItem.classList.remove("checked");
    }
    console.log("Checkbox clicked!");
}
