// POST method using information in an HTML <form> tag
const addMenuItem = async(event) => {
  event.preventDefault();
  
  const name = document.querySelector('#name').value.trim();
  const description = document.querySelector('#description').value.trim();
  const categoryId = document.querySelector('#categoryId').value.trim();
  const response = await fetch('/api/menu/newitem', {
    method: 'POST',
    body: JSON.stringify({ name, description, categoryId }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Menu Item Created');
    document.location.replace('/menu');
  } 
  else {
    alert(response.statusText);
  };
};

document.querySelector('#addMenuItem').addEventListener('submit', addMenuItem);