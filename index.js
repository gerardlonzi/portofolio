const button = document.querySelector(".button");
const all = document.querySelector(".all");
const bloc1= document.querySelector(".bloc1")
const bloc2= document.querySelector(".bloc2")
const bloc3= document.querySelector(".bloc3")

button.addEventListener("click",()=>{
    all.style.display="block"
   bloc1.style.animation = "move 1s ease";
   bloc2.style.animation=" monte  2s ";
   bloc3.style.animation=" lefterr 4s ease"

})

