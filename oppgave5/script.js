window.onload = oppgave5;

function oppgave5() {
    var body = document.getElementsByTagName('body')[0];
    //
    var main = document.createElement('main');
    //
    body.appendChild(main);
    //
    var paragraph = document.createElement('p');
    //
    var textNode = document.createTextNode('Jeg trener på JavaScript');
    paragraph.appendChild(textNode);
    //
    paragraph.className = "klasse";
    //
    main.appendChild(paragraph);
    //
    var selectBox = document.createElement('select');
    //
    var option = document.createElement('option');
    var textToOption = document.createTextNode('option');
    option.value = "meme";
    option.appendChild(textToOption);
    selectBox.appendChild(option);
    main.appendChild(selectBox);
    //
    main.style.display = "flex";
    main.style.justifyContent = "center";
    main.style.flexDirection = "column";
    main.style.maxWidth = "500px";
    //
    var button1 = document.createElement('button');
    var textForButton1 = document.createTextNode('test');
    button1.appendChild(textForButton1);
    var button2 = document.createElement('button');
    var textForButton2 = document.createTextNode('reset');
    button2.appendChild(textForButton2);
    //
    main.appendChild(button1);
    main.appendChild(button2);
    //
    button1.addEventListener("click", function() {
        //
        var paragraph = textNode.wholeText.split(/\s/).reverse().join(' ');
        var textToScreen = document.createTextNode(paragraph);
        main.appendChild(textToScreen);
    });
    //
    var ul = document.createElement('ul');
    ul.id = "listen";
    for (var i = 0; i < 4; i++) {
        var li = document.createElement('li');
        var textToLi = document.createTextNode('li' + (i+1));
        //
        var deleteToLi = document.createElement('button');
        var textToDelete = document.createTextNode('Delete li' + (i+1));
        deleteToLi.className = "buttonDeleteLi";
        deleteToLi.appendChild(textToDelete);
        li.appendChild(textToLi);
        li.appendChild(deleteToLi);
        ul.appendChild(li);
    }
    main.appendChild(ul);

    var buttons = document.getElementsByClassName('buttonDeleteLi');

    var arrayWitDeletedLis = [];

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            var liToDelete = this.parentElement;
            arrayWitDeletedLis.push(liToDelete);
            liToDelete.remove();
        });
    }

    button2.addEventListener("click", function() {
        for (var i = 0; i < arrayWitDeletedLis.length; i++) {
            document.getElementById('listen').innerHTML += "<li>" + arrayWitDeletedLis[i].innerHTML + "</li>";
        }
        arrayWitDeletedLis = [];
    });


}