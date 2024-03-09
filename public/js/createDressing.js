// Create dressing
const createDressing = async(event) => {
  event.preventDefault();
  
  const id = document.querySelector('#id').value.trim();

  const name = document.querySelector('#name').value.trim();

  const price3oz = document.querySelector('#price3oz').value.trim();

  const price16oz = document.querySelector('#price16oz').value.trim();

  const response = await fetch('../../api/dressing/createDressing', {
    method: 'POST',
    body: JSON.stringify({ 
      id,
      name,
      price3oz,
      price16oz
    }),

    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Dressing Created');
    document.location.replace('/menu');
  } 
  else {
    alert(response.statusText);
  };
};

document.querySelector('#createDressing').addEventListener('submit', createDressing);