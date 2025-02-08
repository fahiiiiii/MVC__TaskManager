
//Model
let taskList;
const savedTasks = JSON.parse(localStorage.getItem("tasks"));
if (Array.isArray(savedTasks)) {
  taskList = savedTasks;
} else {
  taskList = [
    {
      taskTitle: "have a football match",
      dueDate: "2014-07-19",
      id: "01",
    },
    {
      taskTitle: "have a React class",
      dueDate: "2014-07-22",
      id: "02",
    },
  ];
}
function saveDataInLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(taskList));
}

renderTask();

// Model(cause it is deleting data as well as updating or managing data)
function filterTask(toBeDeletedTargetId) {
  taskList = taskList.filter(function (task) {
    if (toBeDeletedTargetId === task.id) {
      return false;
    } else {
      return true;
    }
  });
  saveDataInLocalStorage();
}

// Controller (cause on clicking the "Delete" button it connects model and view part)
function deleteTask(event) {
  let deleteTarget = event.target;
  let toBeDeletedTargetId = deleteTarget.id;
  filterTask(toBeDeletedTargetId);
  renderTask();
}

// Model(cause it is adding data as well as updating or managing data)
function pushTask(newTaskTitleValue, dueDate) {
  dateAsId = new Date().getTime().toString();
  taskList.push({
    taskTitle: newTaskTitleValue,
    dueDate: dueDate,
    id: dateAsId,
  });
  saveDataInLocalStorage();
}
// Controller (cause on clicking the "Add Task"button it connects model and view part)
function addTask() {
  let newTaskTitle = document.getElementById("taskName");
  let newTaskTitleValue = newTaskTitle.value;
  newTaskTitle.value = "";
  let datePicker = document.getElementById("dueDate");
  let dueDate = datePicker.value;
  datePicker.value = "";
  pushTask(newTaskTitleValue, dueDate);
  renderTask();
}

//View
function renderTask() {
  // let taskList = localStorage.getItem('tasks')
  document.getElementById("taskList").innerHTML = " ";
  taskList.forEach(function (taskObject) {
    let task = document.createElement("div");
    task.innerHTML = taskObject.taskTitle + " " + taskObject.dueDate;
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.style = "margin-left:20px";
    task.appendChild(deleteButton);
    deleteButton.onclick = deleteTask;
    deleteButton.id = taskObject.id;
    let taskShowKorarDiv = document.getElementById("taskList");
    taskShowKorarDiv.appendChild(task);
    // document.body.appendChild(task)
  });
}