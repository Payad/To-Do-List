
// const btnCreate = document.querySelector('.addTask');
// const taskList = document.querySelector('ul');
// const listItems = taskList.children;


// function attachRemoveButton(li) {
// let remove = document.createElement('button');
// remove.className = 'remove';
// remove.textContent = 'remove';
// li.appendChild(remove);
// }

// for (let i = 0; i < listItems.length; i++) {
//     attachRemoveButton(listItems[i]);
// }

// btnCreate.addEventListener('click', () => {
//     let ul = document.getElementsByTagName('ul')[0];
//     const input = document.querySelector('.taskInput');
//     let li = document.createElement('li');
//     li.textContent = input.value;
//     attachRemoveButton(li);
//     ul.appendChild(li);
//     input.value = "";
// });

// taskList.addEventListener('click', (event) => {
//     if (event.target.tagName === "BUTTON") {
// const button = event.target;
// const li = button.parentNode;
// li.remove();

//     }
// });

// variables
const btnCreate = document.querySelector('.addTask');
const taskList = document.querySelector('ul');
const listItems = taskList.children;



//function that checks if text has been typed 

// function addSomenthing() {
//     btnCreate = document.querySelector(".addTask");
//     input = document.querySelector(".taskInput");
// }

//attaching event listener to btnCreate
btnCreate.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    const input = document.querySelector('.taskInput');
    let li = document.createElement('li');
    li.textContent = input.value;
    addRemoveButton(li);
    if (input.value === "") {
        alert("You must type in a Task");
    } else {
    ul.appendChild(li);
}
    input.value = "";

});

// looping through the list items
for (let i = 0; i < listItems.length; i++) {
    addRemoveButton(listItems[i]);
}

// creating remove button
 function addRemoveButton(li) {
     let remove = document.createElement('button');
     remove.className = "remove";
     remove.textContent = "Remove";
     li.appendChild(remove);
 }

 //adding event listener to ul
 taskList.addEventListener('click', (event) => {
     
     if (event.target.tagName === "BUTTON") {
        const button = event.target;
        const li = button.parentNode;
        li.remove();

     }
 });

//  taskList = document.querySelector('ul'); 

taskList.addEventListener('click', function (event) { 

    if (event.target.tagName === "LI") { 

       event.target.classList.toggle('checked'); 

    } 

}, false); 




// adding functionality to hide list button 

const button = document.querySelector('.hide_list'); 

button.addEventListener('click', () => { 

    let ul = document.querySelector('ul'); 

    if (button.textContent === "Hide List") { 

    ul.style.display = "none"; 

    button.textContent = "Show List"; 

    } else { 

        ul.style.display = "block"; 

        button.textContent = "Hide List"; 

    } 




   //  if (button.textContent === "Show List") { 

   //     ul.style.display = "block"; 

   //     button.textContent = "Hide List"; 

   //  }  

     

}); 

  
