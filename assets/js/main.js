"use strict";
textBtn.onclick = async (event) => {
  const res = await fetch("http://localhost:9000/", {
    method: "POST",
    body: text.value,
  });
};

async function createLIElement(data) {
  const ul = document.getElementById("tasks");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(data));
  ul.appendChild(li);
}

refr.onclick = async (event) => {
  const res = await fetch("http://localhost:9000/todo/all");
  const json = await res.json();
  await createLIElement(json);
};
