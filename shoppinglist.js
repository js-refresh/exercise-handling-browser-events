// const button = document.querySelector('#submitButton');
// button.addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log()
// })

let list = document.getElementById("shoppingList");
const button = document.getElementById("submitButton");
let input = document.getElementById("item")

function addItem(event) {
    event.preventDefault()
    let newItem = document.createElement("li")
    newItem.innerText = input.value 
    list.appendChild(newItem)
    input.value = ""
    // list.prepend(newItem)
}

button.addEventListener("click", addItem)


// var input = document.getElementById("userinput");
// var enter = document.getElementById("enter");
// var ul = document.querySelector("ul");
// var listItem = document.querySelectorAll("li");


// function addListItemOnClick() {
//     if (input)
// }
// event.preventDefault

// var node = document.createElement('li');
// node.appendChild(document.createTextNode(''));
 
// document.querySelector('ul').appendChild(node);