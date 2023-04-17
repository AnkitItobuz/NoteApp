console.log("hello");
const notesPreview = document.getElementsByClassName("notes-preview")[0];
const notesArr = [];
const input1 = document.getElementById("input-box");
const input2 = document.getElementById("input-box2");
const submit = document.getElementById("submit-button");

submit.addEventListener("submit", function (e) {
  e.preventDefault();
  var date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let currDate = `${day} - ${month} - ${year}`;
  const content = {
    title: input1.value,
    content: input2.value,
    date: currDate,
  };
  notesArr.push(content);

  showNotes();
});


function showNotes() {
  notesPreview.innerHTML = "";

  for (let a = 0; a < notesArr.length; a++) {
    const tag = document.createElement("div");
    let date = notesArr[a].date;
    let head = notesArr[a].title;
    let content = notesArr[a].content;

    tag.innerHTML = `<h4>${date}</h4> <h1>${head}</h1> <p>${content}</p>`;

    notesPreview.appendChild(tag);

    tag.classList.add("box");
    input1.value = "";
    input2.value = "";
  }
}
