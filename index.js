let count = 0;

const showTodo = (target, element) => {
  target.appendChild(element);
};

const createStatusButton = (status, target) => {
  status = document.createElement('button');
  target.appendChild(status);
  status.textContent = '作業中';
};

const createDeleteButton = (deleteRow, target) => {
  deleteRow = document.createElement('button');
  target.appendChild(deleteRow);
  deleteRow.textContent = '削除';
};

document.getElementById('add').onclick = function () {
  const comment = document.getElementById('text').value;
  const target = document.getElementById('table');
  document.getElementById('text').value = '';

  const task = document.createElement('tr');
  target.appendChild(task);

  let element = document.createElement('td');
  showTodo(target, element);
  element.textContent = count;
  count++;

  element = document.createElement('td');
  showTodo(target, element);
  element.textContent = comment;

  element = document.createElement('td');
  showTodo(target, element);
  let status;
  createStatusButton(status, target);

  element = document.createElement('td');
  showTodo(target, element);
  let deleteRow;
  createDeleteButton(deleteRow, target);
};
