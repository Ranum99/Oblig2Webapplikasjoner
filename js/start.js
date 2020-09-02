window.onload = start;

function start() {
    var addTodoBtn = document.getElementById('addTodoBtn');
    var createTodo = document.getElementById('beforeCreateTodo');
    var body = document.getElementById('body');
    var exitCreateTodo = document.getElementById('exitCreateTodo');

    addTodoBtn.addEventListener("click", function() {
        createTodo.style.display = "block";
        body.style.overflowY = "hidden";
    });

    exitCreateTodo.addEventListener("click", function() {
        createTodo.style.display = "none";
        body.style.overflowY = "scroll";
    });

    var deleteTodos = document.getElementsByClassName('deleteTodo');
    for (var i = 0; i < deleteTodos.length; i++) {
        deleteTodos[i].addEventListener("click", function() {
            var articleOfAddedTodo = this.parentElement.parentElement;
            articleOfAddedTodo.remove();
        });
    }


    var completeTodo = document.getElementsByClassName('completeTodo');
    for (var i = 0; i < completeTodo.length; i++) {
        completeTodo[i].addEventListener("click", function() {
            var articleOfAddedTodo = this.parentElement.parentElement;
            var titleOfTodo = articleOfAddedTodo.children[0].innerHTML;
            var descriptionOfTodo = articleOfAddedTodo.children[1].innerHTML;
            var listOfCompletedTodos = document.getElementById('listOfCompletedTodos');
            var date = new Date();
            var year = date.getFullYear().toString().substr(-2);
            var month = (parseInt(date.getMonth()) + 1 < 10 ? ("0"+(parseInt(date.getMonth()) + 1)): (parseInt(date.getMonth()) + 1));
            var day = (date.getDate() < 10 ? ("0"+date.getDate()) : date.getDate());


            listOfCompletedTodos.innerHTML +=
                "<article>" +
                    "<p class='title'>" + titleOfTodo + "</p>" +
                    "<p class='author'>Author author</p>" +
                    "<p class='description'>" + descriptionOfTodo + "</p>" +
                    "<p class='completedDate'>" + day + "." + month + "." + year+ "</p>" +
                "</article>";
            articleOfAddedTodo.remove();
        });
    }
}