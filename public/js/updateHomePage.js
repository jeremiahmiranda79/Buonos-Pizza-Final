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

  const name3_1 = document.querySelector('#name3_1').value.trim();
  const description3_1 = document.querySelector('#description3_1').value.trim();
  const name3_1Switch = document.querySelector('#name3_1Switch').value.trim();

  const description3_2 = document.querySelector('#description3_2').value.trim();
  const name3_2Switch = document.querySelector('#name3_2Switch').value.trim();

  const name4 = document.querySelector('#name4').value.trim();
  const description4 = document.querySelector('#description4').value.trim();
  const name4Switch = document.querySelector('#name4Switch').value.trim();

  const name5_1 = document.querySelector('#name5_1').value.trim();
  const description5_1 = document.querySelector('#description5_1').value.trim();
  const name5_1Switch = document.querySelector('#name5_1Switch').value.trim();

  const description5_2 = document.querySelector('#description5_2').value.trim();
  const name5_2Switch = document.querySelector('#name5_2Switch').value.trim();

  const description5_3 = document.querySelector('#description5_3').value.trim();
  const name5_3Switch = document.querySelector('#name5_3Switch').value.trim();

  const description5_4 = document.querySelector('#description5_4').value.trim();
  const name5_4Switch = document.querySelector('#name5_4Switch').value.trim();

  const description5_5 = document.querySelector('#description5_5').value.trim();
  const name5_5Switch = document.querySelector('#name5_5Switch').value.trim();

  // const slice_switch = document.querySelector('#slice_switch').value.trim();
  // const doordash_switch = document.querySelector('#doordash_switch').value.trim();
  // const ubereats_switch = document.querySelector('#ubereats_switch').value.trim();
  // const grubhub_switch = document.querySelector('#grubhub_switch').value.trim();

  // const information_switch = document.querySelector('#information_switch').value.trim();
 
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

      name3_1,
      description3_1,
      name3_1Switch,

      description3_2,
      name3_2Switch,

      name4,
      description4,
      name4Switch,

      name5_1,
      description5_1,
      name5_1Switch,

      description5_2,
      name5_2Switch,

      description5_3,
      name5_3Switch,

      description5_4,
      name5_4Switch,

      description5_5,
      name5_5Switch,

      // slice_switch,
      // doordash_switch,
      // ubereats_switch,
      // grubhub_switch
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

function checkbox(x) {
  var box = x
  x.value = "false";
  //checkbox1.value = checkbox1.value;
  x.addEventListener('change', function(){
    if(this.checked){
      x.value = "true"
      console.log(`Checkbox is checked! Do something about it! ${x.value}`);
    } 
    else if(this.checked == false){
      x.value = "false"
      console.log(`Checkbox wasn't checked. Do something about it! ${x.value}`);
    }
    else {
      x.value = "false"
      console.log(`Forget it. Checkbox wasn't checked. ${x.value}`);
    }
  });

  return box;
}

// var checkbox1 = document.querySelector("#name1Switch");
// checkbox1.value = "false";
// //checkbox1.value = checkbox1.value;
// checkbox1.addEventListener('change', function(){
//   if(this.checked){
//     checkbox1.value = "true"
//     console.log(`Checkbox is checked! Do something about it! ${checkbox1.value}`);
//   } 
//   else if(this.checked == false){
//     checkbox1.value = "false"
//     console.log(`Checkbox wasn't checked. Do something about it! ${checkbox1.value}`);
//   }
//   else {
//     checkbox1.value = "false"
//     console.log(`Forget it. Checkbox wasn't checked. ${checkbox1.value}`);
//   }
// });

checkbox(name1Switch);

// var checkbox2 = document.querySelector("#name2Switch");
// checkbox2.value = "false";
// //checkbox2.value = checkbox2.value;
// checkbox2.addEventListener('change', function(){
//   if(this.checked){
//     checkbox2.value = "true"
//     console.log(`Checkbox is checked! Do something about it! ${checkbox2.value}`);
//   } 
//   else if(this.checked == false){
//     checkbox2.value = "false"
//     console.log(`Checkbox wasn't checked. Do something about it! ${checkbox2.value}`);
//   }
//   else {
//     checkbox2.value = "false"
//     console.log(`Forget it. Checkbox wasn't checked. ${checkbox2.value}`);
//   }
// });

checkbox(name2Switch);

// var checkbox3 = document.querySelector("#name3_1Switch");
// checkbox3.value = "false";
// //checkbox3.value = checkbox3.value;
// checkbox3.addEventListener('change', function(){
//   if(this.checked){
//     checkbox3.value = "true"
//     console.log(`Checkbox is checked! Do something about it! ${checkbox3.value}`);
//   } 
//   else if(this.checked == false){
//     checkbox3.value = "false"
//     console.log(`Checkbox wasn't checked. Do something about it! ${checkbox3.value}`);
//   }
//   else {
//     checkbox3.value = "false"
//     console.log(`Forget it. Checkbox wasn't checked. ${checkbox3.value}`);
//   }
// });

checkbox(name3_1Switch);

// var checkbox4 = document.querySelector("#name3_2Switch");
// checkbox4.value = "false";
// //checkbox4.value = checkbox4.value;
// checkbox4.addEventListener('change', function(){
//   if(this.checked){
//     checkbox4.value = "true"
//     console.log(`Checkbox is checked! Do something about it! ${checkbox4.value}`);
//   } 
//   else if(this.checked == false){
//     checkbox4.value = "false"
//     console.log(`Checkbox wasn't checked. Do something about it! ${checkbox4.value}`);
//   }
//   else {
//     checkbox4.value = "false"
//     console.log(`Forget it. Checkbox wasn't checked. ${checkbox4.value}`);
//   }
// });

checkbox(name3_2Switch);

// var checkbox5 = document.querySelector("#name4Switch");
// checkbox5.value = "false";
// //checkbox5.value = checkbox5.value;
// checkbox5.addEventListener('change', function(){
//   if(this.checked){
//     checkbox5.value = "true"
//     console.log(`Checkbox is checked! Do something about it! ${checkbox5.value}`);
//   } 
//   else if(this.checked == false){
//     checkbox5.value = "false"
//     console.log(`Checkbox wasn't checked. Do something about it! ${checkbox5.value}`);
//   }
//   else {
//     checkbox5.value = "false"
//     console.log(`Forget it. Checkbox wasn't checked. ${checkbox5.value}`);
//   }
// });

checkbox(name4Switch);

// var checkbox6 = document.querySelector("#name5_1Switch");
// checkbox6.value = "false";
// //checkbox5.value = checkbox5.value;
// checkbox6.addEventListener('change', function(){
//   if(this.checked){
//     checkbox6.value = "true"
//     console.log(`Checkbox is checked! Do something about it! ${checkbox6.value}`);
//   } 
//   else if(this.checked == false){
//     checkbox6.value = "false"
//     console.log(`Checkbox wasn't checked. Do something about it! ${checkbox6.value}`);
//   }
//   else {
//     checkbox6.value = "false"
//     console.log(`Forget it. Checkbox wasn't checked. ${checkbox6.value}`);
//   }
// });

checkbox(name5_1Switch);

// var checkbox7 = document.querySelector("#name5_2Switch");
// checkbox7.value = "false";
// //checkbox7.value = checkbox7.value;
// checkbox7.addEventListener('change', function(){
//   if(this.checked){
//     checkbox7.value = "true"
//     console.log(`Checkbox is checked! Do something about it! ${checkbox7.value}`);
//   } 
//   else if(this.checked == false){
//     checkbox7.value = "false"
//     console.log(`Checkbox wasn't checked. Do something about it! ${checkbox7.value}`);
//   }
//   else {
//     checkbox7.value = "false"
//     console.log(`Forget it. Checkbox wasn't checked. ${checkbox7.value}`);
//   }
// });

checkbox(name5_2Switch);

// var checkbox8 = document.querySelector("#name5_3Switch");
// checkbox8.value = "false";
// //checkbox8.value = checkbox8.value;
// checkbox8.addEventListener('change', function(){
//   if(this.checked){
//     checkbox8.value = "true"
//     console.log(`Checkbox is checked! Do something about it! ${checkbox8.value}`);
//   } 
//   else if(this.checked == false){
//     checkbox8.value = "false"
//     console.log(`Checkbox wasn't checked. Do something about it! ${checkbox8.value}`);
//   }
//   else {
//     checkbox8.value = "false"
//     console.log(`Forget it. Checkbox wasn't checked. ${checkbox8.value}`);
//   }
// });

checkbox(name5_3Switch);

// var checkbox9 = document.querySelector("#name5_4Switch");
// checkbox9.value = "false";
// //checkbox9.value = checkbox9.value;
// checkbox9.addEventListener('change', function(){
//   if(this.checked){
//     checkbox9.value = "true"
//     console.log(`Checkbox is checked! Do something about it! ${checkbox9.value}`);
//   } 
//   else if(this.checked == false){
//     checkbox9.value = "false"
//     console.log(`Checkbox wasn't checked. Do something about it! ${checkbox9.value}`);
//   }
//   else {
//     checkbox9.value = "false"
//     console.log(`Forget it. Checkbox wasn't checked. ${checkbox9.value}`);
//   }
// });

checkbox(name5_4Switch);

// var checkbox10 = document.querySelector("#name5_5Switch");
// checkbox10.value = "false";
// //checkbox10.value = checkbox10.value;
// checkbox10.addEventListener('change', function(){
//   if(this.checked){
//     checkbox10.value = "true"
//     console.log(`Checkbox is checked! Do something about it! ${checkbox10.value}`);
//   } 
//   else if(this.checked == false){
//     checkbox10.value = "false"
//     console.log(`Checkbox wasn't checked. Do something about it! ${checkbox10.value}`);
//   }
//   else {
//     checkbox10.value = "false"
//     console.log(`Forget it. Checkbox wasn't checked. ${checkbox10.value}`);
//   }
// });

checkbox(name5_5Switch);

document.querySelector('#updateHomePage').addEventListener('submit', updateHomePage);