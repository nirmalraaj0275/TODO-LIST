function addtask() {
  let taskInput = document.getElementById("taskInput").value;
  if (taskInput === "") {
    alert("Please enter a task!!");
    return;
  }

  let taskList = document.getElementById("taskList");
  let li = document.createElement("li");
  li.textContent = taskInput;

  let deletebutton = document.createElement("button");
  deletebutton.textContent = "Delete";
  deletebutton.classList.add("delete-btn");
  deletebutton.onclick = function () {
    taskList.removeChild(li);
  };

  li.onclick = function () {
    li.classList.toggle("completed");
  };

  li.appendChild(deletebutton);
  taskList.appendChild(li);

  document.getElementById("taskInput").value = "";
}
