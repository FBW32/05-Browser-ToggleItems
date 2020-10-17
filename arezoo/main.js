function hideDestination() {
  var destinationTable = document.getElementById("div-des");
  var textButton = document.getElementById("p-des");
  if (destinationTable.style.display === "none") {
    destinationTable.style.display = "block";
    textButton.innerHTML = "Hide destination";
  } else {
    destinationTable.style.display = "none";
    textButton.innerHTML = "Show destination";
  }
}
var anchor_arr = document.getElementsByClassName("list-group-item");
console.dir(anchor_arr);
for (var i = 0; i < anchor_arr.length; i++) {
  anchor_arr[i].addEventListener("click", showSelectedDestination);
}

function showSelectedDestination(obj) {
  let favouriteDes = obj.target.innerText;
  let message = document.getElementById("message");
  return (message.innerHTML = `your favourite Destination is ${favouriteDes}`);
}
