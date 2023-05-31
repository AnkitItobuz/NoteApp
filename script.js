const icons = document.getElementById("add-notes-icon");
const addNotes = document.getElementsByClassName("add-notes-modal");
const back = document.getElementById("back-button");
const submit = document.getElementById("submit-button");

icons.addEventListener("click", function () {
  addNotes[0].classList.toggle("hide");
});

back.addEventListener("click", function () {
  addNotes[0].classList.toggle("hide");
});

function deleteSomething(el) {
  val = el.value;
  a;
  i = this.toDo.indexOf(val);

  if (i > -1) {
    array.splice(i, 1);
  }

  el.parentElement.remove();
}

const notesPreview = document.getElementsByClassName("notes-preview")[0];
const notesArr = [];

const input1 = document.getElementById("input-box");
const input2 = document.getElementById("input-box2");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
submit.addEventListener("click", function () {
  let date = new Date();
  let month = months[date.getMonth()];
  let day = date.getDate();
  let year = date.getFullYear();

  let currDate = `${month} ${day}, ${year}`;
  if (input1.value === "") {
    return false;
  }
  
  else if (input2.value === "") {
    return false;
  }

  const content = {
    title: input1.value,
    content: input2.value,
    date: currDate,
  };

  notesArr.push(content);

  showNotes();

  function showNotes() {
    notesPreview.innerHTML = "";
    for (let a = 0; a < notesArr.length; a++) {
      const tag = document.createElement("div");
      let date = notesArr[a].date;
      let head = notesArr[a].title;
      let content = notesArr[a].content;
      tag.innerHTML = `<h4>${date}</h4> <h1>${head}</h1> <p>${content}</p>  <span class="box-button"> <i class="fa-solid fa-check"></i> <i class="fa-regular fa-trash-can"></i> </span>`;
      notesPreview.appendChild(tag);
      tag.classList.add("box");
      input1.value = "";
      input2.value = "";
    }
  }
  
  addNotes[0].classList.toggle("hide");
});
