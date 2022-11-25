console.log('hey');
showtask();
var addBtn = document.querySelector('#addbtn');

// code to make navbar sticky 
let navbar = document.getElementById('nav-bar');
var sticky = navbar.offsetTop;   //*****((((THIS LINE IS IMP SEE ITS MEANING))))

window.addEventListener('scroll',()=>{
   if(window.pageYOffset >= 2)
    {navbar.classList.add('sticky');}
   else
    {navbar.classList.remove('sticky');}
  
})


addBtn.addEventListener('click',()=>{
    let task = localStorage.getItem('task');
    let things_addition = document.getElementById('things-addition');
    if(task== null)
     {
        taskObj=[];
     }
    else
     {
        taskObj=JSON.parse(task); // this puts all the task in the key to the array taskObj
     }
    taskObj.push(things_addition.value);
    localStorage.setItem("task",JSON.stringify(taskObj));
    things_addition.value='';
    console.log(taskObj);
    showtask();
})
function showtask()
{ let task=localStorage.getItem("task");
if(task== null)
{
   taskObj=[];
}
else
{
   taskObj=JSON.parse(task); // this puts all the task in the key to the array taskObj  <i class="fa-solid fa-trash" id="${index} onclick=deleteTask(this.id)"></i>
}
let html='';
taskObj.forEach(function(element, index)
{
html+= `<div class="list-items"><ul class="task-items">
<li>${element} <button type="button" class="del-btn" id="${index}" onclick=deleteTask(this.id)><i class="fa-solid fa-trash"></i></button>
 <hr class="rule">
</li>
</ul></div>`});

let taskEle=document.getElementById('list');
if(task.length!=0)
{
   taskEle.innerHTML=html;
}

}
// function to delete task
function deleteTask(index)
{  let task = localStorage.getItem('task');
if(task== null)
{
   taskObj=[];
}
else
{
   taskObj=JSON.parse(task); // this puts all the task in the key to the array taskObj
}
taskObj.splice(index,1);
localStorage.setItem('task',JSON.stringify(taskObj));
showtask();

}
