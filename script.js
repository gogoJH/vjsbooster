console.log('script running');

var h1 = document.querySelector('h1');
var button = document.getElementById('btn1');
var input = document.getElementById('input1');
var ul = document.querySelector('ul');

var createListItem = function (event) {

  // 1. keypress => enter 인지
  // 2. keypress => !enter > not list item create
  // 3. click > create list item

  if(event.type === 'keypress' ? (event.keyCode === 13 ? input.value !== '' : false) : input.value !== ''){
    var t_li = document.createElement('li');
    t_li.appendChild(document.createTextNode(input.value));

    ul.appendChild(t_li);

    input.value = '';

  }

//   if(event.type === 'keypress') {
//     if(event.keyCode === 13) {
//
//       if(input.value !== '') {
//       var t_li = document.createElement('li');
//       t_li.appendChild(document.createTextNode(input.value));
//
//       ul.appendChild(t_li);
//
//       input.value = '';
//       }
//     }
//   } else {
//
//     if(input.value !== '') {
//     var t_li = document.createElement('li');
//     t_li.appendChild(document.createTextNode(input.value));
//
//     ul.appendChild(t_li);
//
//     input.value = '';
//     }
//   }
}

button.addEventListener("click", createListItem)


input.addEventListener("keypress", createListItem)
