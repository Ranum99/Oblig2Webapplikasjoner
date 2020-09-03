window.onload = start;

function start() {
    var addTodoBtn = document.getElementById('addTodoBtn');
    var createTodo = document.getElementById('beforeCreateTodo');
    var body = document.getElementById('body');
    var exitCreateTodo = document.getElementById('exitCreateTodo');

    var descriptionOnNewTODO = document.getElementById('descriptionOnNewTODO');
    var charLeftInDescription = document.getElementById('charLeftInDescription');
    descriptionOnNewTODO.addEventListener("keydown", function() {
        charLeftInDescription.innerHTML = 125 - descriptionOnNewTODO.value.length;
    });
    descriptionOnNewTODO.addEventListener("keyup", function() {
        charLeftInDescription.innerHTML = 125 - descriptionOnNewTODO.value.length;
    });

    var addTodoToTodos = document.getElementById('addTodoToTodos');
    addTodoToTodos.addEventListener("click", function() {
        var titleOnNewTODO = document.getElementById('titleOnNewTODO').value;
        var descriptionOnNewTODO = document.getElementById('descriptionOnNewTODO').value;
        var authorOnNewTODO = document.getElementById('authorOnNewTODO').value;
        var feilmeldingen = document.getElementById('feilmelding');

        var feilmelding = "";
        if (titleOnNewTODO == "")
            feilmelding += "<p>Please add: title.</p>";
        if (descriptionOnNewTODO == "")
            feilmelding += "<p>Please add: description.</p>";
        if (authorOnNewTODO == "")
            feilmelding += "<p>Please add: author.</p>";

        if (feilmelding == "") {
            addNewTodoToTodos(titleOnNewTODO, descriptionOnNewTODO, authorOnNewTODO);
            feilmeldingen.innerHTML = "";
            feilmeldingen.style.display = "none";
        } else {
            feilmeldingen.innerHTML = feilmelding;
            feilmeldingen.style.display = "block";
        }
    });

    addTodoBtn.addEventListener("click", function() {
        createTodo.style.display = "block";
        body.style.overflowY = "hidden";
    });

    exitCreateTodo.addEventListener("click", function() {
        createTodo.style.display = "none";
        body.style.overflowY = "scroll";
    });

    updateVisibleTodos();
    deleteBtn();
    completeBtn();
}

function updateVisibleTodos() {
    var children = document.getElementById('todoList').children;
    if (children.length > 3) {
        for (let i = 0; i < children.length; i++) {
            console.log(children[i])
            if (i<3)
                children[i].style.display = "block";
            else
                children[i].style.display = "none";
        }
    }
}

function deleteBtn() {
    var deleteTodos = document.getElementsByClassName('deleteTodo');
    for (var k = 0; k < deleteTodos.length; k++) {
        deleteTodos[k].addEventListener("click", function() {
            var articleOfAddedTodo = this.parentElement.parentElement;
            articleOfAddedTodo.remove();
            updateVisibleTodos();
        });
    }
}

function completeBtn() {
    var completeTodo = document.getElementsByClassName('completeTodo');
    for (var i = 0; i < completeTodo.length; i++) {
        completeTodo[i].addEventListener("click", function() {
            var articleOfAddedTodo = this.parentElement.parentElement;
            var titleOfTodo = articleOfAddedTodo.children[0].innerHTML;
            var descriptionOfTodo = articleOfAddedTodo.children[1].innerHTML;
            var authorOfTodo = articleOfAddedTodo.children[3].innerHTML;
            console.log(authorOfTodo);
            var listOfCompletedTodos = document.getElementById('listOfCompletedTodos');
            var date = new Date();
            var year = date.getFullYear().toString().substr(-2);
            var month = (parseInt(date.getMonth()) + 1 < 10 ? ("0"+(parseInt(date.getMonth()) + 1)): (parseInt(date.getMonth()) + 1));
            var day = (date.getDate() < 10 ? ("0"+date.getDate()) : date.getDate());


            listOfCompletedTodos.innerHTML +=
                "<article class='sortList'>" +
                "<p class='title'>" + titleOfTodo + "</p>" +
                "<p class='author'>" + authorOfTodo + "</p>" +
                "<p class='description'>" + descriptionOfTodo + "</p>" +
                "<p class='completedDate'>" + day + "." + month + "." + year+ "</p>" +
                "</article>";
            articleOfAddedTodo.remove();
            updateVisibleTodos();
        });
    }
}

function addNewTodoToTodos(title, description, author) {
    var todoList = document.getElementById('todoList');
    var todoListElements = todoList.innerHTML;

    todoList.innerHTML = "<article style='sortList'>\n" +
        "                 <p class=\"titleForTodo\">"+title+"</p>\n" +
        "                 <p class=\"descriptionForTodo\">"+description+"</p>\n" +
        "                 <div>\n" +
        "                     <button class=\"deleteTodo\">Delete</button>\n" +
        "                     <button class=\"completeTodo\">Complete</button>\n" +
        "                 </div>\n" +
        "                 <p style=\"display: none\" class=\"authorForTodo\">"+author+"</p>\n" +
        "             </article>";
    todoList.innerHTML += todoListElements;

    document.getElementById('beforeCreateTodo').style.display = "none";
    document.getElementById('body').style.overflowY = "scroll";
    document.getElementById('titleOnNewTODO').value = null;
    document.getElementById('descriptionOnNewTODO').value = null;
    document.getElementById('authorOnNewTODO').value = null;
    document.getElementById('charLeftInDescription').innerHTML = 125;
    updateVisibleTodos();
    deleteBtn()
    completeBtn()
}