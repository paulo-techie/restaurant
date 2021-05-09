export function loadPage() {
  const content = document.getElementById("content");
  const h1 = document.createElement('h1');
  const h2 = document.createElement('h2');
  h1.textContent = 'Furaha Restaurant';
  h2.textContent = '\"Best place to eat in town\"'
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
  contactbutton.innerText = 'Contact';
  contactbutton.classList.add('tablinks');
  contactbutton.id = 'contactBtn';

  tabcontainer.appendChild(aboutbutton);
  tabcontainer.appendChild(menubutton);
  tabcontainer.appendChild(contactbutton);

  let aboutTab = document.createElement('div');
  aboutTab.classList.add('tabcontent');
  aboutTab.id = 'aboutus';
  let menuTab = document.createElement('div');
  menuTab.classList.add('tabcontent');
  menuTab.id = 'menu';
  let contactTab = document.createElement('div');
  contactTab.classList.add('tabcontent');
  contactTab.id = 'contactus';

  content.appendChild(aboutTab);
  content.appendChild(menuTab);
  content.appendChild(contactTab);

  loadAbout();
  loadMenu();
  loadContact();
}

function loadAbout() {
  document.getElementById("aboutus").innerHTML = "<h3>About Us</h3>\
  <p>About Us<p>";
}

function loadMenu() {
  let tabcontent = document.getElementById("menu")
  tabcontent.innerHTML = "<h3>Menu</h3>\
  <p>Breakfast.Lunch.Dinner</p>";
  tabcontent.style.display = "none";
}

function loadContact() {
  let tabcontent = document.getElementById("contactus")
  tabcontent.innerHTML = "<h3>Contact Us</h3>\
  <p>Thames River Road, London.</p>";
  tabcontent.style.display = "none";
}
