 let addToDoButton = document.querySelector("#addToDo");
 let deleteToDoButton = document.querySelector("#deleteToDo");
 let toDoContainer = document.querySelector("#toDoContainer");
 let inputField = document.querySelector("#inputField");    

 addToDoButton.addEventListener("click", addToList);
 deleteToDoButton.addEventListener("click", deleteToList);

function addToList() {
   
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.textContent = inputField.value;


    paragraph.addEventListener("click", function() {
        paragraph.style.textDecoration = "line-through";
    });

    
    toDoContainer.appendChild(paragraph);

   
    inputField.value = "";
}

function deleteToList(){
    let firstP = toDoContainer.querySelector("p");
    if (firstP) {
        toDoContainer.removeChild(firstP);
    }
    else{
        alert("P yok")
    }
}

