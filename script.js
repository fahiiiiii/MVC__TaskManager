
//Model
let taskList;
const savedTasks = JSON.parse(localStorage.getItem("tasks"));
if (Array.isArray(savedTasks)) {
    taskList = savedTasks;
} else {
    taskList = [
        {
            taskTitle: "Have a football match",
            dueDate: "2024-02-08",
            id: "01",
            completed: false
        },
        {
            taskTitle: "Have a React class",
            dueDate: "2024-02-09",
            id: "02",
            completed: false
        },
    ];
}

function saveDataInLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(taskList));
}

function filterTask(toBeDeletedTargetId) {
    taskList = taskList.filter(function (task) {
        return toBeDeletedTargetId !== task.id;
    });
    saveDataInLocalStorage();
}

function deleteTask(event) {
    const deleteTarget = event.target;
    const toBeDeletedTargetId = deleteTarget.getAttribute('data-task-id');
    filterTask(toBeDeletedTargetId);
    renderTask();
}

function toggleComplete(event) {
    const taskId = event.target.getAttribute('data-task-id');
    taskList = taskList.map(task => {
        if (task.id === taskId) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    saveDataInLocalStorage();
    renderTask();
}

function pushTask(newTaskTitleValue, dueDate) {
    const dateAsId = new Date().getTime().toString();
    taskList.push({
        taskTitle: newTaskTitleValue,
        dueDate: dueDate,
        id: dateAsId,
        completed: false
    });
    saveDataInLocalStorage();
}

function addTask() {
    const newTaskTitle = document.getElementById("taskName");
    const newTaskTitleValue = newTaskTitle.value.trim();
    const datePicker = document.getElementById("dueDate");
    const dueDate = datePicker.value;

    if (newTaskTitleValue && dueDate) {
        pushTask(newTaskTitleValue, dueDate);
        newTaskTitle.value = "";
        datePicker.value = "";
        renderTask();
    }
}

function renderTask() {
    const taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = "";

    taskList.forEach(function (taskObject) {
        const taskItem = document.createElement("div");
        taskItem.className = `task-item ${taskObject.completed ? 'completed' : ''}`;

        const taskInfo = document.createElement("div");
        taskInfo.className = "task-info";

        const taskName = document.createElement("div");
        taskName.className = "task-name";
        taskName.textContent = taskObject.taskTitle;

        const taskDate = document.createElement("div");
        taskDate.className = "task-date";
        taskDate.textContent = `Due: ${taskObject.dueDate}`;

        taskInfo.appendChild(taskName);
        taskInfo.appendChild(taskDate);

        const taskActions = document.createElement("div");
        taskActions.className = "task-actions";

        const completeButton = document.createElement("button");
        completeButton.className = "complete-btn";
        completeButton.textContent = taskObject.completed ? "Completed" : "Complete";
        completeButton.setAttribute('data-task-id', taskObject.id);
        completeButton.onclick = toggleComplete;

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute('data-task-id', taskObject.id);
        deleteButton.onclick = deleteTask;

        taskActions.appendChild(completeButton);
        taskActions.appendChild(deleteButton);

        taskItem.appendChild(taskInfo);
        taskItem.appendChild(taskActions);

        taskListElement.appendChild(taskItem);
    });
}

// Initial render
renderTask();
