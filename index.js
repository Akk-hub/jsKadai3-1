let count = 0;
const todos = [];

todo = {
  task: '',
  status: '作業中',
};

const showTodo = (target, element) => {
  target.appendChild(element);
};

const createStatusButton = (statusNow, target) => {
  statusNow = document.createElement('button');
  target.appendChild(statusNow);
  todo.status = '作業中';
  statusNow.textContent = todo.status;
};

const createDeleteButton = (deleteRow, target) => {
  deleteRow = document.createElement('button');
  target.appendChild(deleteRow);
  deleteRow.textContent = '削除';
};

document.getElementById('add').onclick = function () {
  todo.task = document.getElementById('text').value;
  const target = document.getElementById('table');
  document.getElementById('text').value = '';

  const task = document.createElement('tr');
  target.appendChild(task);

  let element = document.createElement('td');
  showTodo(target, element);
  element.textContent = count;

  element = document.createElement('td');
  showTodo(target, element);
  element.textContent = todo.task;

  element = document.createElement('td');
  showTodo(target, element);
  let statusNow;
  createStatusButton(statusNow, target);

  element = document.createElement('td');
  showTodo(target, element);
  let deleteRow;
  createDeleteButton(deleteRow, target);

  todos[count] = todo;
  count++;
};
