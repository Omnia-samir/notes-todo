
// Function to add a note
function addNote() {
    const noteInput = document.getElementById("noteInput");
    const noteText = noteInput.value.trim();

    if (noteText !== "") {
        const noteList = document.getElementById("noteList");
        const li = document.createElement("li");
        li.textContent = noteText;

        // Create edit and delete icons
        const editIcon = document.createElement("i");
        editIcon.className = "fas fa-edit edit-icon";
        const deleteIcon = document.createElement("i");
        deleteIcon.className = "fas fa-trash-alt delete-icon";

        // Add event listeners for edit and delete
        editIcon.addEventListener("click", () => editNote(li));
        deleteIcon.addEventListener("click", () => deleteNote(li));

        li.appendChild(editIcon);
        li.appendChild(deleteIcon);

        noteList.appendChild(li);
        noteInput.value = "";
        
        updateContainerBackground("note-container");
    }
}

// Function to add a task
function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const todoList = document.getElementById("todoList");
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                li.classList.add("checked");
            } else {
                li.classList.remove("checked");
            }
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(todoText));

        // Create edit and delete icons
        const editIcon = document.createElement("i");
        editIcon.className = "fas fa-edit edit-icon";
        const deleteIcon = document.createElement("i");
        deleteIcon.className = "fas fa-trash-alt delete-icon";

        // Add event listeners for edit and delete
        editIcon.addEventListener("click", () => editTodo(li));
        deleteIcon.addEventListener("click", () => deleteTodo(li));

        li.appendChild(editIcon);
        li.appendChild(deleteIcon);

        todoList.appendChild(li);
        todoInput.value = "";

        updateContainerBackground("task-container");
    }
}

// Function to edit a note
function editNote(li) {
    const noteInput = document.getElementById("noteInput");
    noteInput.value = li.textContent.trim();
    li.remove();
}

// Function to edit a task
function editTodo(li) {
    const todoInput = document.getElementById("todoInput");
    todoInput.value = li.textContent.trim();
    li.remove();
}

// Function to delete a note
function deleteNote(li) {
    li.remove();
    updateContainerBackground("note-container");
}

// Function to delete a task
function deleteTodo(li) {
    li.remove();
    updateContainerBackground("task-container");
}

// Function to update container background
function updateContainerBackground(containerType) {
    const container = document.querySelector(`.${containerType}`);    
    const list = container.querySelector("ul");

    // Check if there are any items in the list
    if (list.children.length > 0) {
        container.style.backgroundColor = "#c5d3e2";    
    } else {
        container.style.backgroundColor = "transparent";   
    }
}
