// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
// const timeDisplayEl = $('#time-display');
// const projectDisplayEl = $('#project-display');
// const projectFormEl = $('#project-form');
// const projectNameInputEl = $('#project-name-input');
// const projectTypeInputEl = $('#project-type-input');
// const projectDateInputEl = $('#taskDueDate');

// Todo: create a function to generate a unique task id
function generateTaskId() {
return Date.now().toString();
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    function createTaskCard(task) {
        const card = document.createElement('div');
        card.className = 'card task-card';
        card.setAttribute('data-id', task.id);
    
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
    
        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = task.title;
    
        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = task.description;
    
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            handleDeleteTask(task.id);
        };
    
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(deleteButton);
        card.appendChild(cardBody);
    
        const deadline = dayjs(task.deadline);
        const now = dayjs();
        if (deadline.isBefore(now)) {
            card.classList.add('overdue');
        } else if (deadline.diff(now, 'day') <= 3) {
            card.classList.add('nearing-deadline');
        }
    
        // $(card).draggable({
        //     revert: 'invalid',
        //     helper: 'clone'
        // });
    
        return card;
    }

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {


    $(card).draggable({
        revert: 'invalid',
        helper: 'clone'
    });
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
// $(document).ready(function () {

//     printProjectData();

//   $('#taskDueDate').datepicker({
//     changeMonth: true,
//     changeYear: true,
//   });

//   //Make lanes droppable
//   $('.lane').droppable({
//     accept: '.draggable',
//     drop: handleDrop,
//   });

// });