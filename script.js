// JavaScript code (script.js)

// Array to store items
let items = [];

// Function to display items in the list
function displayItems() {
  const itemList = document.getElementById('item-list');
  itemList.innerHTML = ''; // Clear previous items

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'item';
    li.textContent = item;

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteItem(index));

    li.appendChild(deleteBtn);
    itemList.appendChild(li);
  });
}

// Function to add new item
function addItem(newItem) {
  items.push(newItem);
  displayItems();
}

// Function to delete item
function deleteItem(index) {
  items.splice(index, 1);
  displayItems();
}

// Event listener for form submission
document.getElementById('add-item-form').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  const newItemInput = document.getElementById('new-item-input');
  const newItem = newItemInput.value.trim(); // Trim whitespace
  if (newItem !== '') {
    addItem(newItem);
    newItemInput.value = ''; // Clear input field
  }
});

// Initial display of items
displayItems();