'use strict';


// Get the button открывающая кнопка имя переменной
const btn = document.getElementById("myBtn");

const visible = document.getElementById("cardsVisible");

const icon = document.getElementById("btnIcon");

// When the user clicks on the button,меняется класс елемента
/* btn.onclick = function() {

  if (visible.className == 'cards__visible_full') {visible.className = 'cards__visible';
}
  else{
  visible.className = 'cards__visible_full';
}
}*/

//две функции на одном клике срабатывающие методомами addEventListener
function changeIcon() {

  if (icon.className == 'fa fa-chevron-down') {icon.className = 'fa fa-chevron-up';
}
  else{
  icon.className = 'fa fa-chevron-down';
}
}

function changeSize() {

  if (visible.className == 'cards__visible_full') {visible.className = 'cards__visible';
}
  else{
  visible.className = 'cards__visible_full';
}
}

btn.addEventListener("click", changeSize);
btn.addEventListener("click", changeIcon);
