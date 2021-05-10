import loadPage from './loaders';

function loadTab(evt, tabName) {
  // Get all elements with class="tabcontent" and hide them
  const tabcontent = document.getElementsByClassName('tabcontent');
  for (let i = 0; i < tabcontent.length; i += 1) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  const tablinks = document.getElementsByClassName('tablinks');
  for (let i = 0; i < tablinks.length; i += 1) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

loadPage();

const aboutBtn = document.getElementById('aboutBtn');
const menuBtn = document.getElementById('menuBtn');
const contactBtn = document.getElementById('contactBtn');

aboutBtn.addEventListener('click', (event) => { loadTab(event, 'aboutus') });
menuBtn.addEventListener('click', (event) => { loadTab(event, 'menu') });
contactBtn.addEventListener('click', (event) => { loadTab(event, 'contactus') });
