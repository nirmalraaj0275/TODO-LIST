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
  deletebutton.textContent = "delete";
  deletebutton.classList.add("delect-btns");
  deletebutton.onclick = function () {
    taskList.removeChild(li);
  };
  li.onlick = function () {
    li.classList.toggle("Completed");
  };
  li.appendChild(deletebutton);
  taskList.appendChild(li);
  document.getElementById("taskInput").value = "";
}
