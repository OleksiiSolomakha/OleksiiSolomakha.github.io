// add new item

const addForm = document.querySelector('.add')
const list = document.querySelector('.todos');
const checkbox = document.querySelectorAll('.checkbox');

console.log(checkbox);



const newItem = (item) => {

  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <input type="checkbox" class="checkbox">
    <span>${item}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;

  list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const item = addForm.add.value.trim();  

  if(item.length){
    newItem(item);
    addForm.reset();
  }  
});

// delete item

list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
})

// search item

const search = document.querySelector('.search input');

const filterItems = (term) => {

  Array.from(list.children)
  .filter((todo) =>  !todo.textContent.toLowerCase().includes(term))
  .forEach((todo) => todo.classList.add('filtered'));

  Array.from(list.children)
  .filter((todo) => todo.textContent.toLowerCase().includes(term))
  .forEach((todo) => todo.classList.remove('filtered'));
  
};

search.addEventListener('keyup', e => {
  e.preventDefault();
  const term = search.value.trim().toLowerCase();
  filterItems(term);
});

// checked item

list.addEventListener('click', e => {
  if(e.target.classList.contains('checkbox')){
    e.target.parentElement.style.textDecoration = 'line-through';
  }
});

