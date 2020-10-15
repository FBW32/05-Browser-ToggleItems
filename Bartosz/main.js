let h1 = document.querySelector('h1')
h1.innerHTML = 'My Favorite Destinations'

let p = document.querySelector('p')
p.innerHTML = 'Toggle my favorite destinations'


let ul = document.querySelector('ul');
let btn = document.querySelector('.btn')

function showList() {
    ul.classList.toggle('hide')
    btn.textContent = ul.classList.contains('hide') ? 'Show Destinations' : 'Hide Destinations';
}

btn.addEventListener('click', showList)

ul.addEventListener("click",(e)=>{
    //e.stopPropagation()    
    if(e.target.tagName==="LI"){
        let active = document.querySelector('.color')
        active.classList.remove('color')
        e.target.classList.add("color")
    }
})

let select = (e) => {
    let destination = e.target.innerText;
    let selected = document.querySelector(".select");
    selected.style.display= 'block'
    return (selected.innerHTML = `Your favourite destination is ${destination}`);
}

ul.addEventListener('click', select)