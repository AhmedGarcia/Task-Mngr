// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;


// Todo: create a function to generate a unique task id
function generateTaskId() {
    return nextId++;
}

// Todo: create a function to create a task card
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

        if (deadline.isBefore(now, 'day')) {
        card.classList.add('red');
    } else if (deadline.diff(now, 'day') <= 3) {
        card.classList.add('yellow');
    }

    return card;
}



// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const columns ={
        todo: document.getElementById('todo-column'),
        inprogress: document.getElementById('inprogress-column'),
        done: document.getElementById('done-column')
        
    };
    Object.values(columns).forEach(column => column.innerHTML = '');

    taskList.forEach(task =>{
        const taskCard = createTaskCard(task);
        columns[task.state].appendChild(taskCard);
    });

    // Make cards draggable
    $('.task-card').draggable({
        revert: 'invalid',
        helper: 'clone'
    });

    // Make columns droppable
    $('.task-column').droppable({
        accept: '.task-card',
        drop: function(event, ui) {
            handleDrop(event, ui);
        }
    });
}


   

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();
    const title = $('#task-title').val();
    const description = $('#task-desc').val();
    const deadline = $('#task-deadline').val();

    const task = {
        id:generateTaskId(),
        title: title,
        description: description,
        deadline: deadline,
        state: 'todo'
    };

    taskList.push(task);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    localStorage.setItem('nextId', JSON.stringify(nextId));

    renderTaskList();
    $('#taskModal').modal('hide');
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(taskId){
    taskList = taskList.filter(task => task.id !== taskId)
    localStorage.setItem('tasks', JSON.stringify(taskList))
    renderTaskList();

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const taskId = ui.helper.data('id');
    const newState = event.target.id.split('-')[0];
    const task = taskList.find(task => task.id === taskId);
    if (task) {
        task.state = newState;
        localStorage.setItem('tasks', JSON.stringify(taskList));
        renderTaskList();
    }
}


// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function() {
    // Initialize tasks from localStorage
    renderTaskList();

    // Show modal to add a new task
    $('#add-task-btn').click(function() {
        $('#taskModal').modal('show');
    });

    // Save new task
    $('#task-form').submit(handleAddTask);

    // Make columns sortable and droppable
    $('.task-column').sortable({
        connectWith: '.task-column',
        receive: function(event, ui) {
            handleDrop(event, ui);
        }
    }).disableSelection();
});

