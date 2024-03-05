const tasks = [
  "add nav bar",
  " deploy app and then get into meeting with team",
  "go pick up pizza tonight",
];

let checklist = document.getElementById("list");

for (let i = 0; i < tasks.length; ++i) {
  let div = document.createElement("div");
  div.classList.add("task");
  div.innerHTML = `${tasks[i]} <div class="btns-modal"><button class='btn' id='btn-modal' onclick="editTask(${i})">edit</button><button class='btn' onclick="deleteTask(${i})">Delete</button></div>`;
  checklist.appendChild(div);
  if (i !== tasks.length - 1) {
    let line = document.createElement("div");
    line.classList.add("line");
    checklist.appendChild(line);
  }
}

const clean = () => {
  document.getElementById("add").value = "";
};

function add() {
  var value = document.getElementById("add").value;
  if (value.trim() !== "") {
    tasks.push(value);
  } else {
    alert("pleas write something in input");
  }
  rendertasks();
  clean();
}
const rendertasks = () => {
  checklist.innerHTML = "";

  for (let i = 0; i < tasks.length; ++i) {
    let div = document.createElement("div");
    div.classList.add("task");
    div.innerHTML = `${tasks[i]} <div class="btns-modal"><button class='btn' id='btn-modal' onclick="editTask(${i})">edit</button><button class='btn' onclick="deleteTask(${i})">Delete</button></div>`;
    checklist.appendChild(div);
    if (i !== tasks.length - 1) {
      let line = document.createElement("div");
      line.classList.add("line");
      checklist.appendChild(line);
    }
  }
};
const deleteTask = (index) => {
  tasks.splice(index, 1); //item indxom ta 1(خودش)
  rendertasks();
};

const btn = document.getElementById("btn-modal");

const modal = document.getElementById("myModal");

const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
const closeModal = () => {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const edit = document.getElementById("edit-btn");

const editTask = (index) => {
  modal.style.display = "block";
  const editInput = document.getElementById("edit-input");
  editInput.value = tasks[index];

  window.submitEdit = function () {
    tasks[index] = editInput.value;
    rendertasks();
    closeModal();
  };
};
