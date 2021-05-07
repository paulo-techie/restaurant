import { loadPage, loadTab } from './loaders.js';

export function init() {
  loadPage();
  navActions();
}

function navActions() {
  const aboutBtn = document.getElementById('aboutbutton');
  const menuBtn = document.getElementById('menubutton');
  const contactBtn = document.getElementById('contactbutton');

  aboutBtn.addEventListener('click', event => { loadTab(event, 'aboutus'); });
  menuBtn.addEventListener('click', event => { loadTab(event, 'menu'); });
  contactBtn.addEventListener('click', event => { loadTab(event, 'contactus'); });
}