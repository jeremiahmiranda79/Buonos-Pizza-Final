// Create topping cold sub
const createToppingColdSub = async(event) => {
  event.preventDefault();
  
  const id = document.querySelector('#id').value.trim();
  const name = document.querySelector('#name').value.trim();
  const price = document.querySelector('#price').value.trim();

  const response = await fetch('../../api/toppingColdSub/createToppingColdSub', {
    method: 'POST',
    body: JSON.stringify({ 
      id,
      name,
      price
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Topping Cold Cold Created');
    document.location.replace('/menu');
  } 
  else {
    alert(response.statusText);
  };
};

document.querySelector('#createToppingColdSub').addEventListener('submit', createToppingColdSub);