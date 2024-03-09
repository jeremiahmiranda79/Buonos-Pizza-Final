// Create topping hot sub
const createToppingHotSub = async(event) => {
  event.preventDefault();
  
  const id = document.querySelector('#id').value.trim();
  const name = document.querySelector('#name').value.trim();
  const price = document.querySelector('#price').value.trim();

  const response = await fetch('../../api/toppingHotSub/createToppingHotSub', {
    method: 'POST',
    body: JSON.stringify({ 
      id,
      name,
      price
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Topping Hot Sub Created');
    document.location.replace('/menu');
  } 
  else {
    alert(response.statusText);
  };
};

document.querySelector('#createToppingHotSub').addEventListener('submit', createToppingHotSub);