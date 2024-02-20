// making a global structure from where I am maintaing my hole todo-list.
// empty todo-list
let todoList = [
   {
     item : 'Do 1 DSA Qn',
     dueDate : '21/02/2024'
   },
   {
      item : 'Learn Web Development',
      dueDate : '15/04/2024'
    }
];

displayItems();

function addTodo() {
   let inputElement = document.querySelector('#todo-input');
   let dateElement = document.querySelector('#todo-date');
let todoItem = inputElement.value;
let todoDate = dateElement.value;

todoList.push({item : todoItem, dueDate : todoDate});
inputElement.value = '';
dateElement.value = '';
displayItems();
}

function displayItems() {
   let containerElement = document.querySelector('.todo-container');
   let newHtml = '';
   for( let i=0; i<todoList.length; i++) {
      // The splice() method is used to add or remove elements of an existing array with parameters as index from deletiona nd how many no's to be deleted and the return value will be the removed items from the array.
      // let item = todoList[i].item;
      // let dueDate = todoList[i].dueDate;
      let {item, dueDate} = todoList[i];
      newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class='btn-delete' onclick="todoList.splice(${i}, 1);
      displayItems();">Delete</button>
      `;
   }
   //innerText returns innerText contained by element and innerHTML contains innerHTML contained by element.
   containerElement.innerHTML = newHtml;

}