import { loadAbout, loadMenu, loadContact, loadHeader } from './loaders.js';

function loadNavActions() {
  const aboutBtn = document.getElementById('aboutbutton');
  const menuBtn = document.getElementById('menubutton');
  const contactBtn = document.getElementById('contactbutton');

  aboutBtn.addEventListener('click', openTab(this, 'aboutus'));
  menuBtn.addEventListener('click', loadMenu());
  contactBtn.addEventListener('click', loadContact());

  function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
}

export function init() {
  loadHeader();
  loadNavActions();
}
