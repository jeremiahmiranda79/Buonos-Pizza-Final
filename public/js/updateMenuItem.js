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

//var checkbox = document.querySelector("input[type='checkbox']");
var checkbox1 = document.querySelector("#toppingPizzaFull");
checkbox1.value = "false";
//checkbox1.value = checkbox1.value;
checkbox1.addEventListener('change', function(){
  if(this.checked){
    checkbox1.value = "true"
    console.log(`Checkbox is checked! Do something about it! ${checkbox1.value}`);
  } 
  else if(this.checked == false){
    checkbox1.value = "false"
    console.log(`Checkbox wasn't checked. Do something about it! ${checkbox1.value}`);
  }
  else {
    checkbox1.value = "false"
    console.log(`Forget it. Checkbox wasn't checked. ${checkbox1.value}`);
  }
});

var checkbox2 = document.querySelector("#toppingPizzaSlice");
checkbox2.value = "false";
checkbox2.addEventListener('change', function(){
  if(this.checked){
    checkbox2.value = "true"
    console.log(`Checkbox is checked! Do something about it! ${checkbox2.value}`);
  } 
  else if(this.checked == false){
    checkbox2.value = "false"
    console.log(`Checkbox wasn't checked. Do something about it! ${checkbox2.value}`);
  }
  else {
    checkbox2.value = "false"
    console.log(`Forget it. Checkbox wasn't checked. ${checkbox2.value}`);
  }
});

var checkbox3 = document.querySelector("#toppingPizzaGlutenFree");
checkbox3.value = "false";
checkbox3.addEventListener('change', function(){
  if(this.checked){
    checkbox3.value = "true"
    console.log(`Checkbox is checked! Do something about it! ${checkbox3.value}`);
  } 
  else if(this.checked == false){
    checkbox3.value = "false"
    console.log(`Checkbox wasn't checked. Do something about it! ${checkbox3.value}`);
  }
  else {
    checkbox3.value = "false"
    console.log(`Forget it. Checkbox wasn't checked. ${checkbox3.value}`);
  }
});

var checkbox4 = document.querySelector("#toppingHotSub");
checkbox4.value = "false";
checkbox4.addEventListener('change', function(){
  if(this.checked){
    checkbox4.value = "true"
    console.log(`Checkbox is checked! Do something about it! ${checkbox4.value}`);
  } 
  else if(this.checked == false){
    checkbox4.value = "false"
    console.log(`Checkbox wasn't checked. Do something about it! ${checkbox4.value}`);
  }
  else {
    checkbox4.value = "false"
    console.log(`Forget it. Checkbox wasn't checked. ${checkbox4.value}`);
  }
});

var checkbox5 = document.querySelector("#toppingColdSub");
checkbox5.value = "false";
checkbox5.addEventListener('change', function(){
  if(this.checked){
    checkbox5.value = "true"
    console.log(`Checkbox is checked! Do something about it! ${checkbox5.value}`);
  } 
  else if(this.checked == false){
    checkbox5.value = "false"
    console.log(`Checkbox wasn't checked. Do something about it! ${checkbox5.value}`);
  }
  else {
    checkbox5.value = "false"
    console.log(`Forget it. Checkbox wasn't checked. ${checkbox5.value}`);
  }
});

var checkbox6 = document.querySelector("#toppingDesert");
checkbox6.value = "false";
checkbox6.addEventListener('change', function(){
  if(this.checked){
    checkbox6.value = "true"
    console.log(`Checkbox is checked! Do something about it! ${checkbox6.value}`);
  } 
  else if(this.checked == false){
    checkbox6.value = "false"
    console.log(`Checkbox wasn't checked. Do something about it! ${checkbox6.value}`);
  }
  else {
    checkbox6.value = "false"
    console.log(`Forget it. Checkbox wasn't checked. ${checkbox6.value}`);
  }
});

var checkbox7 = document.querySelector("#saladDressing");
checkbox7.value = "false";
checkbox7.addEventListener('change', function(){
  if(this.checked){
    checkbox7.value = "true"
    console.log(`Checkbox is checked! Do something about it! ${checkbox7.value}`);
  } 
  else if(this.checked == false){
    checkbox7.value = "false"
    console.log(`Checkbox wasn't checked. Do something about it! ${checkbox7.value}`);
  }
  else {
    checkbox7.value = "false"
    console.log(`Forget it. Checkbox wasn't checked. ${checkbox7.value}`);
  }
});

var checkbox8 = document.querySelector("#wingSauce");
checkbox8.value = "false";
checkbox8.addEventListener('change', function(){
  if(this.checked){
    checkbox8.value = "true"
    console.log(`Checkbox is checked! Do something about it! ${checkbox8.value}`);
  } 
  else if(this.checked == false){
    checkbox8.value = "false"
    console.log(`Checkbox wasn't checked. Do something about it! ${checkbox8.value}`);
  }
  else {
    checkbox8.value = "false"
    console.log(`Forget it. Checkbox wasn't checked. ${checkbox8.value}`);
  }
});

var checkbox9 = document.querySelector("#pastaType");
checkbox9.value = "false";
checkbox9.addEventListener('change', function(){
  if(this.checked){
    checkbox9.value = "true"
    console.log(`Checkbox is checked! Do something about it! ${checkbox9.value}`);
  } 
  else if(this.checked == false){
    checkbox9.value = "false"
    console.log(`Checkbox wasn't checked. Do something about it! ${checkbox9.value}`);
  }
  else {
    checkbox9.value = "false"
    console.log(`Forget it. Checkbox wasn't checked. ${checkbox9.value}`);
  }
});

var checkbox10 = document.querySelector("#marinaraSauce");
checkbox10.value = "false";
checkbox10.addEventListener('change', function(){
  if(this.checked){
    checkbox10.value = "true"
    console.log(`Checkbox is checked! Do something about it! ${checkbox10.value}`);
  } 
  else if(this.checked == false){
    checkbox10.value = "false"
    console.log(`Checkbox wasn't checked. Do something about it! ${checkbox10.value}`);
  }
  else {
    checkbox10.value = "false"
    console.log(`Forget it. Checkbox wasn't checked. ${checkbox10.value}`);
  }
});

var checkbox11 = document.querySelector("#desertSauce");
checkbox11.value = "false";
checkbox11.addEventListener('change', function(){
  if(this.checked){
    checkbox11.value = "true"
    console.log(`Checkbox is checked! Do something about it! ${checkbox11.value}`);
  } 
  else if(this.checked == false){
    checkbox11.value = "false"
    console.log(`Checkbox wasn't checked. Do something about it! ${checkbox11.value}`);
  }
  else {
    checkbox11.value = "false"
    console.log(`Forget it. Checkbox wasn't checked. ${checkbox11.value}`);
  }
});

document.querySelector('#updateMenuItem').addEventListener('submit', updateMenuItem);

document.querySelector('#deleteButton').addEventListener('click', deleteMenuItem);