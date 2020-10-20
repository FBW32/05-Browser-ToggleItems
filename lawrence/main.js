let h1 =document.getElementById("heading")
h1.style.textAlign = "center"
h1.style.fontFamily="courier"


let button = document.querySelector("button")
let ul = document.querySelector("ul")

button.addEventListener("click",()=>{
   
   ul.classList.toggle("hide")
   
   if (ul.classList.contains("hide")) {
       button.innerText="show destination"
   } else{
    button.innerText="hide destination"
   }
})


/* let lis = document.querySelectorAll("li")

lis.forEach((li)=>{
    li.addEventListener("mouseenter",()=>{
        li.style.backgroundColor="blue"
    })
    
    li.addEventListener("mouseleave",()=>{
        li.style.backgroundColor="white"
    })
}) */

ul.addEventListener("click",(e)=>{
    //e.target.style.backgroundColor="gray"
    let active = document.querySelector(".colChange")
    active.classList.remove("colChange")
    e.target.classList.add("colChange")
})