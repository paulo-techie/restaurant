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

  function loadAbout() {
    const menuItemTitle = document.createElement('h3');
    const menuItemBody = document.createElement('p');
    const tabcontent = document.getElementById('aboutus');
    menuItemTitle.textContent = 'About Us';
    menuItemBody.textContent = 'We are a small start-up restaurant '
      + 'offering convenient and affordable meals to our clients';
    tabcontent.appendChild(menuItemTitle);
    tabcontent.appendChild(menuItemBody);
  }

  function loadMenu() {
    const menuItemTitle = document.createElement('h3');
    const menuItemBody = document.createElement('p');
    const tabcontent = document.getElementById('menu');
    menuItemTitle.textContent = 'Menu';
    menuItemBody.textContent = 'Breakfast\r\nToast, bacon, sausages, eggs, black pudding,'
      + 'baked beans, tomatoes, mushrooms and a mug of coffee or tea.\r\n\r\n'
      + 'Lunch\r\nMouthwatering chunks of Certified Angus Beef brisket, juicy pork or chunks of delicious'
      + 'polish sausage served with coleslaw, French fries, Texas toast and pickles.\n\r\n'
      + 'Dinner\r\nGrilled Chicken. Served with leftover brown rice seasoned with salt, pepper, '
      + 'and cilantro. Topped with sliced avocado.';
    tabcontent.appendChild(menuItemTitle);
    tabcontent.appendChild(menuItemBody);
    tabcontent.style.display = 'none';
  }

  function loadContact() {
    const menuItemTitle = document.createElement('h3');
    const menuItemBody = document.createElement('p');
    const tabcontent = document.getElementById('contactus');
    menuItemTitle.textContent = 'Contact Us';
    menuItemBody.textContent = 'We are located at Plainsview Plaza off Mombasa Road in Nairobi.';
    tabcontent.appendChild(menuItemTitle);
    tabcontent.appendChild(menuItemBody);
    tabcontent.style.display = 'none';
  }

  loadAbout();
  loadMenu();
  loadContact();
}
