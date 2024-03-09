// Create topping desert
const createToppingDesert = async(event) => {
  event.preventDefault();
  
  const id = document.querySelector('#id').value.trim();
  const name = document.querySelector('#name').value.trim();
  const price = document.querySelector('#price').value.trim();
 
  const response = await fetch('../../api/toppingDesert/createToppingDesert', {
    method: 'POST',
    body: JSON.stringify({ 
      id,
      name,
      price
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Topping Desert Created');
    document.location.replace('/menu');
  } 
  else {
    alert(response.statusText);
  };
};

document.querySelector('#createToppingDesert').addEventListener('submit', createToppingDesert);