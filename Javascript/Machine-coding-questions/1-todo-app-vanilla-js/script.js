document.addEventListener("DOMContentLoaded",function(){
    let todoForm = document.getElementById("todoForm");
    let todoInput = document.getElementById("todoInput");
    let todoButton = document.getElementById("todoButton");
    let todoList = document.getElementById("todoList");
    let editMode = false;
    let editItem = "";
    todoForm.addEventListener("submit",function(e){
        e.preventDefault();
        let todoText = todoInput.value.trim();
        if(todoText != ""){
            if(editMode){
                editItem.firstChild.textContent = todoText;
                todoButton.innerText = 'Add Todo';
                editMode = false;
                editItem = null;
            }else{
                addTodoItem(todoText);
            }
            todoInput.value="";
        }else{
            window.alert("Please enter todo descriptiion")
        }
    
    })
    function addTodoItem(todoText){
        const todoItem = document.createElement('li');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        todoItem.innerText = todoText;
        editButton.innerText='🖊';
        deleteButton.innerText='❌';
        todoItem.appendChild(editButton);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    }
    todoList.addEventListener("click",function(e){
        const target = e.target;
        if(target.tagName ==='BUTTON'){
            const todoItem = target.parentNode;
            if(target.innerText === '❌'){
                todoItem.remove();
            }else if(target.innerText === '🖊'){
                editMode = true;
                editItem = todoItem;
                todoButton.innerText = 'Edit Todo';
                todoInput.value = todoItem.firstChild.textContent;
                todoInput.focus();
            }
        }
    })

})