textBtn.onclick = async (event) => {
  const res = await fetch("http://localhost:9000/", {
    method: "POST",
    body: text.value,
  });
  console.log(res);
};

refr.onclick = async (event) => {
  const res = await fetch("http://localhost:9000/todo/all");
  const json = await res.json();
  document.getElementById("allTodos").innerHTML = json;
};
