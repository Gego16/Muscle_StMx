const toggleBtn = document.getElementById('toggle-btn');
const menu = document.getElementById('menu');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click', () => {
  if (menu.style.left === '-260px') {
    menu.style.left = '0';
  } else {
    menu.style.left = '-260px';
  }
});

closeBtn.addEventListener('click', () => {
  menu.style.left = '-260px';
});

