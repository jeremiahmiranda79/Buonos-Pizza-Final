// Update the Menu Item through the API
const updateMenuItem = async(event) => {
  event.preventDefault();

  const itemId = document.querySelector('input[name="item-id"]').value;

  const name = document.querySelector('#name').value.trim();
  
  const description = document.querySelector('#description').value.trim();
  
  const categoryId = document.querySelector('#categories').value;

  const response = await fetch(`../../api/menu/updateMenuItem/${itemId}`, {
    method: 'PUT',
    body: JSON.stringify({ 
      name, 
      description, 
      categoryId 
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/menu');
  } 
  else {
    alert(response.statusText);
  };
};

// Functionality for Delete button as well
const deleteMenuItem = async(event) => {
  if (confirm("Are you sure you want to delete this menu item and all things related to it? This action cannot be undone!!") == true) {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/menu/deleteMenuItem/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        // alert('Are you sure you want to delete this menu item and all things related to it? This action cannot be undone.');
        document.location.replace('/menu');
      } 
      else {
        alert(response.statusText);
      };
    };
  }
  else 
  {
    document.location.replace('/menu');
  }
};

document.querySelector('#updateMenuItem').addEventListener('submit', updateMenuItem);

document.querySelector('#deleteButton').addEventListener('click', deleteMenuItem)