import loadAbout from './about';
import loadMenu from './menu';
import loadContact from './contact';

export default function loadPage() {
  const content = document.getElementById('content');
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');

  h1.textContent = 'Furaha Restaurant';
  h2.textContent = '"Best place to eat in town"';
  content.appendChild(h1);
  content.appendChild(h2);

  const tabcontainer = document.createElement('div');
  tabcontainer.classList.add('tab');

  content.appendChild(tabcontainer);

  const aboutbutton = document.createElement('button');
  aboutbutton.innerText = 'About';
  aboutbutton.classList.add('tablinks');
  aboutbutton.id = 'aboutBtn';

  const menubutton = document.createElement('button');
  menubutton.innerText = 'Menu';
  menubutton.classList.add('tablinks');
  menubutton.id = 'menuBtn';

  const contactbutton = document.createElement('button');
  contactbutton.innerText = ('Contact');
  contactbutton.classList.add('tablinks');
  contactbutton.id = 'contactBtn';

  tabcontainer.appendChild(aboutbutton);
  tabcontainer.appendChild(menubutton);
  tabcontainer.appendChild(contactbutton);

  const aboutTab = document.createElement('div');
  aboutTab.classList.add('tabcontent');
  aboutTab.id = 'aboutus';
  const menuTab = document.createElement('div');
  menuTab.classList.add('tabcontent');
  menuTab.id = 'menu';
  const contactTab = document.createElement('div');
  contactTab.classList.add('tabcontent');
  contactTab.id = 'contactus';

  content.appendChild(aboutTab);
  content.appendChild(menuTab);
  content.appendChild(contactTab);

  loadAbout();
  loadMenu();
  loadContact();
}
