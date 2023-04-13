console.log("hello");
const notesPreview = document.getElementsByClassName("notes-preview")[0];
const notesArr = [];
const input1 = document.getElementById("input-box");
const input2 = document.getElementById("input-box2");
const submit = document.getElementById("submit-button");

submit.addEventListener("submit", function (e) {
  e.preventDefault();
  const content = {
    title: input1.value,
    text: input2.value,
  };
  notesArr.push(content);

  showNotes();
});

function showNotes() {
  notesPreview.innerHTML = "";

  for (let a = 0; a < notesArr.length; a++) {
    const tag = document.createElement("div");
    // const text = document.createTextNode(notesArr[a]);
    let head = notesArr[a].title;
    let content = notesArr[a].text;
    tag.innerHTML = `<h1>${head}</h1> <p>${content}</p>`;

    // tag.innerHTML = notesArr.map(function(element){return `<h1>${element.title}</h1> <p>${element.text}</p>`});

    // tag.append(text);
    notesPreview.appendChild(tag);
    tag.classList.add("box");
    input1.value = "";
    input2.value = "";
  }
}
