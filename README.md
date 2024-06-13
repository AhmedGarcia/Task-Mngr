# Task-Mngr

A simple task board application that allows a team to manage project tasks. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## User Story

```md
As a project team member with multiple tasks to organize I want a task board so that I can add individual project tasks, manage their state of progress and track overall project progress accordingly.
```

## How it works

![a screenshot of the modal form to which the user will input the data that will be used to create a todo card](./assets/images/Screenshot%202024-06-13%20001136.png)

![a screenshot of the modal form's date picker](./assets/images/Screenshot%202024-06-13%20001147.png)

![a screenshot of various todo cards displaying the different color codes for the deadlines](./assets/images/Screenshot%202024-06-13%20001110.png)

```md
GIVEN a task board to manage a project
WHEN I open the task board
THEN the list of project tasks is displayed in columns representing the task progress state (Not Yet Started, In Progress, Completed)
WHEN I view the task board for the project
THEN each task is color coded to indicate whether it is nearing the deadline (yellow) or is overdue (red)
WHEN I click on the button to define a new task
THEN I can enter the title, description and deadline date for the new task into a modal dialog
WHEN I click the save button for that task
THEN the properties for that task are saved in localStorage
WHEN I drag a task to a different progress column
THEN the task's progress state is updated accordingly and will stay in the new column after refreshing
WHEN I click the delete button for a task
THEN the task is removed from the task board and will not be added back after refreshing
WHEN I refresh the page
THEN the saved tasks persist
```

## Contact Us

GitHub User: https://github.com/AhmedGarcia
<br>
GitHub Repo: https://github.com/AhmedGarcia/Task-Mngr