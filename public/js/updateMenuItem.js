//Update the Menu Item through the API
const updateMenuItem = async(event) => {
  event.preventDefault();
  const itemId = document.querySelector('input[name="item-id"]').value;
  const name = document.querySelector('#name').value.trim();
  const description = document.querySelector('#description').value.trim();

  const switchy = document.querySelector('#switchy').value.trim();

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

      switchy,

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
    document.location.replace('/menu-1');
  } 
  else {
    alert(response.statusText);
  };
};

// Functionality for Delete button
const deleteMenuItem = async(event) => {
  if (confirm("Are you sure you want to delete this MENU ITEM and all things related to it? This action cannot be undone!!") == true) {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/menu/deleteMenuItem/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        document.location.replace('/menu-1');
      } 
      else {
        alert(response.statusText);
      };
    };
  }
  else 
  {
    document.location.replace('/menu-1');
  }
};

onPageLoad(switchy);
onPageLoad(toppingPizzaFull);
onPageLoad(toppingPizzaSlice);
onPageLoad(toppingPizzaGlutenFree);
onPageLoad(toppingHotSub);
onPageLoad(toppingColdSub);
onPageLoad(toppingDesert);

onPageLoad(saladDressing);
onPageLoad(wingSauce);
onPageLoad(pastaType);
onPageLoad(marinaraSauce);
onPageLoad(desertSauce);

function onPageLoad(switchything) {
  console.log("start")
  console.log("check switchy value " + switchything.value)

  // switchy.checked = switchy.value;
  // switchy.value = 'false';

  if (switchything.value == 'true') {
    console.log("checked 12: " + switchything.checked)
    switchything.checked = true;
  } 
  else if (switchything.value == 'false') {
    console.log("checked 22: " + switchything.checked)
    switchything.checked = false;
  }


  // else if (switchything.value == 'null') {
  //   console.log("checked 23: " + switchything.value)
  //   switchything.value = false;
  // }


  else {
    console.log("Fail")
  }

  console.log("check switchy checked " + switchy.checked)
};



  // console.log("check switchy value " + switchy.value)

  // if (switchy.value == true) {
  //   switchy.checked = true;
  //   console.log("checked 12: " + switchy.checked)
  // } 
  // else if (switchy.value == false) {
    
  //   switchy.checked = false
  //   console.log("checked 22: " + switchy.checked)
  // }

  // console.log("check switchy checked " + switchy.checked)


function mycheckbox(x) {
  var box = x;

  console.log("test0")
  console.log("box " +  box.value)

  // if(box.value == false){
  //   //  box.value = false; 
  //    box.checked = false;
  //    console.log("test1")

  //   //  return box;
  // }
  // else if(box.value == true){
  //   // box.value = true;
  //   box.checked = true;
  //   console.log("test2")

  //   // return box;
  // }

  box.addEventListener('change', function(){
    if(this.checked){
      box.value = true;
      console.log("test3")
    } 
    else if(this.checked == false){
      box.value = false;
      console.log("test4")
    }
  });

  return box;
};

mycheckbox(switchy);
mycheckbox(toppingPizzaFull);
mycheckbox(toppingPizzaSlice);
mycheckbox(toppingPizzaGlutenFree);
mycheckbox(toppingHotSub);
mycheckbox(toppingColdSub);
mycheckbox(toppingDesert);
mycheckbox(saladDressing);
mycheckbox(wingSauce);
mycheckbox(pastaType);
mycheckbox(marinaraSauce);
mycheckbox(desertSauce);

document.querySelector('#updateMenuItem').addEventListener('submit', updateMenuItem);
document.querySelector('#deleteButton').addEventListener('click', deleteMenuItem);