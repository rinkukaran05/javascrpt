const input = document.querySelector('#taskInput');
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click",addTask);
input.addEventListener("keypress",function(e){
    if(e.key == "enter"){
        addTask()
    }
});

function addTask(){
    let task = input.value.trim()
    if(task == ""){
        alert("please enter a task");
        return;
    }
    let li = document.createElement("li");
    li.textContent = task;
    // complete feature (click korle line-through)
  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
    li.style.opacity = "0.6";
});
// delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");

  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // important!
    li.remove();
  });

  // add button inside li
  li.appendChild(deleteBtn);

  // add li to list
  taskList.appendChild(li);

  // clear input
  input.value = "";
}
