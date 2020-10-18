
let h1 = document.getElementById("h1")
h1.classList.add("center")

let h4 = document.getElementById("h4")
h4.classList.add("blue")

let list = document.getElementById("list")
list.classList.add("list")

let li = document.getElementsByClassName("li")

let btn = document.getElementById("btn")
btn.classList.add("btn")
btn.innerHTML = "Show destinations"


function showList() {
    let div = document.getElementById("div");
    if (div.style.display === "none") {
      div.style.display = "block";
      btn.innerHTML = "Hide Destinations";
    } else {
      div.style.display = "none";
      btn.innerHTML = "Show Destinations";
    }
  }

  btn.onclick = () => {
    showList()
   
  }


 list.addEventListener("click", (e) =>{
    if(e.target.tagName  = "li") {
        e.target.classList.add('lightBluebg')
     } 

  })

function userSelection(e) {
    let citySelected = e.target.innerHTML
    let output = document.getElementById("output");

    return (output.innerHTML = "The destination you have selected is " + citySelected)
}

list.addEventListener("click", userSelection)

list.onclick = () => {
    document.getElementById("output").style.display = "block"
}



