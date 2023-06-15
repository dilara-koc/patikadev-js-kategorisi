let list = document.querySelector('#list');
const toasts = document.querySelectorAll('#liveToast');
let liveToastBtn = document.querySelector('#liveToastBtn');
let tasks = [];

// Function to add a new task to the list
function newElement() {
    let task = document.getElementById("task").value.trim();

    if (!task) {
        $(toasts[0]).toast('show'); // Show a toast notification for an empty task
        return;
    }

    tasks.push(task); // Add the task to the tasks array
    saveTasksToLocalStorage(); // Save the tasks to local storage
    createTaskElement(task); // Create the HTML element for the task

    document.getElementById("task").value = ''; // Clear the input field

    $(toasts[1]).toast('show'); // Show a toast notification for task added successfully
}

// Add an event listener to the input field to create a new list item on Enter key press
document.querySelector('#task').addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        newElement();
    }
});

// Function to create an HTML element for a task
function createTaskElement(task) {
    let liDOM = document.createElement('li');
    liDOM.innerHTML = task;

    const CLOSE_BUTTON = document.createElement('span');
    CLOSE_BUTTON.innerHTML = "x";
    CLOSE_BUTTON.classList.add('close');

    liDOM.appendChild(CLOSE_BUTTON);
    list.appendChild(liDOM);

    // Toggle the "checked" class when a task is clicked
    liDOM.addEventListener('click', () => {
        if (liDOM.classList.contains('checked')) {
            liDOM.classList.remove('checked');
        } else {
            liDOM.classList.add('checked');
        }
    });

    // Remove the task when the close button is clicked
    CLOSE_BUTTON.addEventListener('click', () => {
        tasks = tasks.filter(t => t !== task); // Remove the task from the tasks array
        saveTasksToLocalStorage(); // Save the updated tasks to local storage
        liDOM.remove();
    });
}

// Function to save the tasks to local storage
function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        tasks.forEach(task => createTaskElement(task));
    }
}

// Toggle the "checked" class for existing tasks in the to-do list
document.querySelectorAll('li').forEach(list => {
    list.addEventListener('click', () => {
        if (list.classList.contains('checked')) {
            list.classList.remove('checked');
        } else {
            list.classList.add('checked');
        }
    });
});

// Remove existing tasks when the close button is clicked
document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        closeButton.parentElement.remove();
    });
});

// Load tasks from local storage when the page loads
window.addEventListener('load', loadTasksFromLocalStorage);
