const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

function newTodo() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}

function addTodo() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);

  var x = document.createElement("input");
  x.setAttribute("type", "checkbox");
  x.className = "TODO_CHECKBOX";

  x.setAttribute("onchange", "count()");
  li.appendChild(x);

  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("todo-list").appendChild(li);
    document.getElementById("myDIV").style.display = "none";
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "todo-delete";
  span.appendChild(txt);
  li.appendChild(span);

  /* Functionality for the Delete Button */
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      this.parentElement.remove();
      count();
    };
  }
  count();
}

function count() {
  var tasks = document.getElementById("todo-list").getElementsByTagName("li")
    .length;
  itemCountSpan.innerHTML = tasks;
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  uncheckedCountSpan.innerHTML = tasks - checkboxes.length;
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("todo-delete");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    this.parentElement.remove();
  };
}
