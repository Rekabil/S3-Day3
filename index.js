const titleTask = () => {
  const title = document.getElementById("inputTitle").value;
  document.getElementById("taskTitle").innerHTML = title;
};

function deleteList(id) {
  const del = document.getElementById(`${id}`);
  del.remove();
}

const task = () => {
  let id = document.getElementById("inputTask").value;
  let tag = document.createElement("li");

  tag.setAttribute("class", id);
  let del = document.createElement("button");
  del.setAttribute("onclick", `deleteList(eventdel)`);

  let deltask1 = "Delete This Task";
  let deltask = document.createTextNode(deltask1);
  let taga = document.createElement("a");
  taga.setAttribute("onclick", `toggleCompleted(event)`);

  let text = document.createTextNode(id);

  taga.appendChild(text);
  tag.appendChild(taga);
  del.appendChild(deltask);
  tag.appendChild(del);

  let list = document.getElementById("taskList");
  list.appendChild(tag);
};

function toggleCompleted(event) {
  document.querySelector("event").classList.toggle("completed");
}
