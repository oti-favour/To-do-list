const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".tasks");

inputBox.onkeyup =()=>{
  let  userData = inputBox.value;
  if(userData.trim() !=0)
    {
    addBtn.classList.add("active");
    }else{
       addBtn.classList.remove("active");
    }
}
addBtn.onclick = ()=>{
  let userData = inputBox.value;
  let getLocalStorage = localStorage.getItem("New Task");
  if(getLocalStorage == null){
    listArr=[];
  }else{
    listArr = JSON.parse(getLocalStorage);
  }
  listArr.push("Hello world!")
  localStorage.setItem("New Task", JSON.stringify(listArr));
  showTasks();
}

function showTasks(){
   let getLocalStorage = localStorage.getItem("New Task");
  if(getLocalStorage == null){
    listArr=[];
  }else{
    listArr = JSON.parse(getLocalStorage);
}
  let newLiTag ='';
  listArr.forEach((element, index)=>{
     newLiTag =' <li> ${element}';
});
  todoList.innerHTML = newLiTag; }