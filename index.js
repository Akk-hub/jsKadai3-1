let count = 0;

const addTask = () => {
  const comment = document.getElementById("text").value;
  const target = document.getElementById("table");
  document.getElementById("text").value = "";

  const task = document.createElement("tr");
  target.appendChild(task);

  for (let i = 0; i < 4; i++) {
    const element = document.createElement("td");
    target.appendChild(element);

    if (i === 0) {
      element.innerHTML = count;
      count++;
    } else if (i === 1) {
      element.innerHTML = comment;
    } else if (i === 3) {
      const status = document.createElement("button");
      target.appendChild(status);
      status.innerHTML = "作業中";
    } else {
      const del = document.createElement("button");
      target.appendChild(del);
      del.innerHTML = "削除";
    }
  }
};
