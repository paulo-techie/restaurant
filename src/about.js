export default function loadAbout() {
  const menuItemTitle = document.createElement('h3');
  const menuItemBody = document.createElement('p');
  const tabcontent = document.getElementById('aboutus');
  menuItemTitle.textContent = 'About Us';
  menuItemBody.textContent = 'We are a small start-up restaurant '
    + 'offering convenient and affordable meals to our clients';
  tabcontent.appendChild(menuItemTitle);
  tabcontent.appendChild(menuItemBody);
}
