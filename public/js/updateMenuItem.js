//Update the Menu Item through the API
const updateMenuItem = async(event) => {
  event.preventDefault();

  const itemId = document.querySelector('input[name="item-id"]').value;

  const name = document.querySelector('#name').value.trim();
  const description = document.querySelector('#description').value.trim();

  const size1 = document.querySelector('#size1').value.trim();
  const price1 = document.querySelector('#price1').value.trim();

  const size2 = document.querySelector('#size2').value.trim();
  const price2 = document.querySelector('#price2').value.trim();

  const size3 = document.querySelector('#size3').value.trim();
  const price3 = document.querySelector('#price3').value.trim();

  const addonsDescription1 = document.querySelector('#addonsDescription1').value.trim();
  const addonsPrice1 = document.querySelector('#addonsPrice1').value.trim();

  const addonsDescription2 = document.querySelector('#addonsDescription2').value.trim();
  const addonsPrice2 = document.querySelector('#addonsPrice2').value.trim();

  const addonsDescription3 = document.querySelector('#addonsDescription3').value.trim();
  const addonsPrice3 = document.querySelector('#addonsPrice3').value.trim();

  const toppingPizzaFull = document.querySelector('#toppingPizzaFull').value.trim().toLowerCase();
  const toppingPizzaSlice = document.querySelector('#toppingPizzaSlice').value.trim().toLowerCase();
  const toppingPizzaGlutenFree = document.querySelector('#toppingPizzaGlutenFree').value.trim().toLowerCase();
  const toppingHotSub = document.querySelector('#toppingHotSub').value.trim().toLowerCase();
  const toppingColdSub = document.querySelector('#toppingColdSub').value.trim().toLowerCase();
  const toppingDesert = document.querySelector('#toppingDesert').value.trim().toLowerCase();
  const saladDressing = document.querySelector('#saladDressing').value.trim().toLowerCase();
  const wingSauce = document.querySelector('#wingSauce').value.trim().toLowerCase();
  const pastaType = document.querySelector('#pastaType').value.trim().toLowerCase();
  const marinaraSauce = document.querySelector('#marinaraSauce').value.trim().toLowerCase();
  const desertSauce = document.querySelector('#desertSauce').value.trim().toLowerCase();
  const desertType = document.querySelector('#desertType').value.trim().toLowerCase();
  
  const categoryId = document.querySelector('#categories').value;

  const response = await fetch(`../../api/menu/updateMenuItem/${itemId}`, {
    method: 'PUT',
    body: JSON.stringify({ 
      name, 
      description, 
      size1,
      price1,
      size2,
      price2,
      size3,
      price3,
      addonsDescription1,
      addonsPrice1,
      addonsDescription2,
      addonsPrice2,
      addonsDescription3,
      addonsPrice3,
      toppingPizzaFull,
      toppingPizzaSlice,
      toppingPizzaGlutenFree,
      toppingHotSub,
      toppingColdSub,
      toppingDesert,
      saladDressing,
      wingSauce,
      pastaType,
      marinaraSauce,
      desertSauce,
      desertType,
      categoryId,
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
  if (confirm("Are you sure you want to delete this MENU ITEM and all things related to it? This action cannot be undone!!") == true) {
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