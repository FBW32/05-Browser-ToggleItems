let toggleListStatus= false;

//show and hide menu
let toggleList = function(){
    let container = document.querySelector(".container");
    let button= document.querySelector("button");
    
    if (toggleListStatus=== false){
        container.style.visibility = "hidden";
        button.innerHTML="show destinations";
        toggleListStatus= true;;
    }
    
    else if (toggleListStatus=== true){
        container.style.visibility =" visible";
        button.innerHTML="hide destinations";
        toggleListStatus= false;
    }
};

// make an item list active and other items nonactive
let list = document.getElementById("list");

list.addEventListener("click",function(e){
    e.preventDefault();

    let li = document.querySelectorAll(".list-group-item");
    for(i=0; i<li.length; i++){
        li[i].className="list-group-item";
        e.target.className="list-group-item active";
        

    // showing the selected favorite destination
    let selected = document.getElementById("selected");selected.innerHTML=`You have ${e.target.innerHTML} selected`;

    }
    // styling "selected destination div"
    selected.style.cssText="width:100%;height:80px; margin:auto;margin-top:1rem; background-color:#c7f9cc;text-align:center;line-height:80px"
});