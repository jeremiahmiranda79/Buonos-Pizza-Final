//Create menu item
const createMenuItem = async(event) => {
  event.preventDefault();
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

  const categoryId = document.querySelector('#categories').value.trim();
  
  const response = await fetch('/api/menu/newitem', {
    method: 'POST',
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

      categoryId
    }),

    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert('Menu Item Created');
    document.location.replace('/menu-1');
  } 
  else {
    alert(response.statusText);
  };
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
  switchything.checked = false;
  switchything.value = false;
};

function mycheckbox(x) {
  var box = x;

  box.addEventListener('change', function(){
    if (this.checked) {
      box.value = true;
      console.log("test3")
    } 
    else if (this.checked == false) {
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

document.querySelector('#createMenuItem').addEventListener('submit', createMenuItem);