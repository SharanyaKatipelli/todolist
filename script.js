const inputField=document.querySelector(".input-field textarea");
 const todoLists = document.querySelector(".todolists"); 
 const pendingNum = document.querySelector(".pending-num");
 const clearButton = document.querySelector(".clear-btn");
 //we will call this function while addding ,deleting and checking and unchecking the tasks
 function allTasks(){
  let tasks=document.querySelectorAll(".pending");
  pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;
  let allLists=document.querySelectorAll(".list");
  if(allLists.length>0){
    todoLists.style.marginTop="20px";
    pendingNum.style.color="red";

    clearButton.style.pointerEvents="auto";
    return;
  }
  todoLists.style.marginTop="0px";
  pendingNum.style.color="blue";


  clearButton.style.pointerEvents="none";

 }
 //adding tasks when we put value in text area and press enter key
 inputField.addEventListener("keyup",(e) =>{
   let inputVal=inputField.value.trim();
 //if enter button is clicked and input value length is >0

 if(e.key=="Enter" && inputVal.length>0){
   let liTag = `<li class="list pending" onclick="hadleStatus
   (this)">
   <input type="checkbox">
   <span class="task"> ${inputVal}</span>
   <i class="uil uil-trash" onclick = "deleteTask(this)"></i>
 </li>`;
 todoLists.insertAdjacentHTML("beforeend",liTag);
 inputField.value=" ";
 allTasks();
}
});
//checking and unchecking the checkbbox while we click on the task
function hadleStatus(e){
  const checkbox = e.querySelector("input");
  checkbox.checked = checkbox.checked ? false: true;
 e.classList.toggle("pending");
 allTasks();

}
//deleting a task while we click on the delete icon
function deleteTask(e){
e.parentElement.remove(); 
allTasks();
}
//deleting all the tasks when we click on the clear button
clearButton.addEventListener("click",() => {
  todoLists.innerHTML = " ";
  allTasks();
});