//list active class!!
let ul=document.querySelector("ul");
//showbutton:
let showbutton=document.querySelector("button")
//hide button:
let hidebutton=document.querySelectorAll("button")[1]
let inputp=document.querySelector(".inputpara")
let body=document.querySelector("body")





body.addEventListener("click",(e)=>
{
    if(e.target.localName=="li"){
    let dest=e.target.innerHTML;
//remove class active from other list items
let listitems=document.querySelectorAll("li")
listitems.forEach(item=>item.classList.remove("active"))
//make the dest active
e.target.classList.add("active");
//show the input div about the dest user clicked on

    inputp.innerHTML=`User selected ${dest}.`
    inputp.parentNode.classList.remove("hidden")
    }
    
    
    if(e.target.localName=="button")
    {showbutton.classList.toggle("hidden");
    hidebutton.classList.toggle("hidden");
    ul.classList.toggle("hidden")
    inputp.parentNode.classList.add("hidden")

}})
