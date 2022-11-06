const increment =document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset =document.querySelector(".reset");
const btn =document.querySelector(".btn-2");
const check =document.querySelectorAll(".check");


let count = 0;

// increment
function add (){
   count++;
btn.textContent=count;
}


increment.addEventListener("click",add);

// decrement
function remove (){
    count--;
 btn.textContent=count;
 }

decrement.addEventListener("click",remove);



// reset
function back (){
 btn.textContent=0;
 
 }


reset.addEventListener("click",back);




// styles
check.forEach((check)=>{
    check.addEventListener("click",()=> {
const classList =check.classList;

if (count > 0) btn.style.color="green";
// if(count=0)btn.style.color="blue";
else btn.style.color ="red";
})
})