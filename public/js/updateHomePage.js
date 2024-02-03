// Update the Home Page through the API
const updateHomePage = async(event) => {
  event.preventDefault();

  const homeId = document.querySelector('input[name="home-id"]').value;

  const name = document.querySelector('#name').value.trim();

  const name1 = document.querySelector('#name1').value.trim();
  const description1 = document.querySelector('#description1').value.trim();
  const name1Switch = document.querySelector('#name1Switch').value.trim();

  const name2 = document.querySelector('#name2').value.trim();
  const description2 = document.querySelector('#description2').value.trim();
  const name2Switch = document.querySelector('#name2Switch').value.trim();

  // const name3_1 = document.querySelector('#name3_1').value.trim();
  // const description3_1 = document.querySelector('#description3_1').value.trim();
  // const name3_1Switch = document.querySelector('#name3_1Switch').value.trim();

  // const description3_2 = document.querySelector('#description3_2').value.trim();
  // const name3_2Switch = document.querySelector('#name3_2Switch').value.trim();


  const response = await fetch(`../../api/home/updateHome/${homeId}`, {
    method: 'PUT',
    body: JSON.stringify({
      name,

      name1,
      description1,
      name1Switch,

      name2,
      description2,
      name2Switch,

      // name3_1,
      // description3_1,
      // name3_1Switch,

      // description3_2,
      // name3_2Switch
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  }
  else {
    alert(response.statusText);
  }
}

document.querySelector('#updateHomePage').addEventListener('submit', updateHomePage);