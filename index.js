const input = document.getElementById("taskInput");
const addBtn= document.getElementById("taskAdd");
const list= document.getElementById("taskList");

addBtn.addEventListener("click", ()=>{

  const text = input.value.trim();
  if (text===""){
    alert("Please enter the task!");//popped up warning
    return;//stop the function
  }
  // Create elements
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;

  //Complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.addEventListener("click", () => {
    span.classList.toggle("completed"); // toggle line-through
  });

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Put everything inside <li>
  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Add <li> to task list
  taskList.appendChild(li);

  // Clear input
  input.value = "";
}
);