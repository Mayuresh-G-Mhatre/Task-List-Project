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
        // SVG icon for delete button (Trash Icon)
        const trashIconSVG = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                <path d="M10 11L10 17"></path>
                <path d="M14 11L14 17"></path>
                <path d="M4 6L20 6"></path>
                <path d="M9 6L9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
            </svg>
        `;

        // This block inserts HTML that creates each task into the task area div element
        taskSection.innerHTML += 
        `<div class="task">
            <label id="taskname">
                <input onclick="updateTask(this)" type="checkbox" id="check-task">
                <p>${taskInput.value}</p>
            </label>
            <div class="delete">
                ${trashIconSVG}  <!-- SVG icon inserted here -->
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
