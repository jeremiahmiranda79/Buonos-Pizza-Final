// Update the category through the API
const updateCategory = async(event) => {
  event.preventDefault();
  const catId = document.querySelector('input[name="cat-id"]').value;
  const name = document.querySelector('#name').value.trim();

  const image = document.querySelector('#image').value;

  const response = await fetch(`../../api/menu/updateCategory/${catId}`, {
    method: 'PUT',
    body: JSON.stringify({ name, image }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/menu');
  } 
  else {
    // alert(response.statusText);
  };
};

// Functionality for Delete button as well
const deleteCategory = async(event) => {
  // confirm("confirm!");
  if (confirm(`Are you sure you want to delete this category and ALL things related to it? This action CAN NOT be undone!!`) == true) {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/menu/deleteCategory/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/menu');
      } 
      else {
        // alert(response.statusText);
      };
    };
  } 
  else {
    document.location.replace('/menu');
  }
};

document.querySelector('#updateCategory').addEventListener('submit', updateCategory);

document.querySelector('#deleteButton').addEventListener('click', deleteCategory);