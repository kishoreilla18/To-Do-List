// document.querySelector('#push').onclick = function(){
//     if(document.querySelector('#newtask input').value.length ==0){
//         alert("please Enter a task")
//     }
//     else{
//         document.querySelector('tasks').innerHTML=innerHTML+ '
//         ';
//     }
// }

// Wait until the DOM is fully loaded
window.onload = function () {
    const input = document.querySelector("#newtask input");
    const addButton = document.querySelector("#push");
    const taskContainer = document.querySelector("#tasks");

    addButton.onclick = function () {
        if (input.value.trim() === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new task div
        const task = document.createElement("div");
        task.classList.add("task");

        task.innerHTML = `
            <span class="taskname">${input.value}</span>
            <button class="delete"><i class="fa-solid fa-trash"></i></button>
        `;

        taskContainer.appendChild(task);

        // Clear the input field
        input.value = "";

        // Add delete functionality
        task.querySelector(".delete").onclick = function () {
            task.remove();
        };
    };
};
