export default function loadContact() {
  const menuItemTitle = document.createElement('h3');
  const menuItemBody = document.createElement('p');
  const tabcontent = document.getElementById('contactus');
  menuItemTitle.textContent = 'Contact Us';
  menuItemBody.textContent = 'We are located at Plainsview Plaza off Mombasa Road in Nairobi.';
  tabcontent.appendChild(menuItemTitle);
  tabcontent.appendChild(menuItemBody);
  tabcontent.style.display = 'none';
}
