export default function loadMenu() {
  const menuItemTitle = document.createElement('h3');
  const menuItemBody = document.createElement('p');
  const tabcontent = document.getElementById('menu');
  menuItemTitle.textContent = 'Menu';
  menuItemBody.textContent = 'BREAKFAST\r\nToast, bacon, sausages, eggs, black pudding,'
    + 'baked beans, tomatoes, mushrooms and a mug of coffee or tea.\r\n\r\n'
    + 'LUNCH\r\nMouthwatering chunks of Certified Angus Beef brisket, juicy pork or chunks of delicious '
    + 'polish sausage served with coleslaw, French fries, Texas toast and pickles.\n\r\n'
    + 'DINNER\r\nGrilled Chicken. Served with leftover brown rice seasoned with salt, pepper, '
    + 'and cilantro. Topped with sliced avocado.';
  tabcontent.appendChild(menuItemTitle);
  tabcontent.appendChild(menuItemBody);
  tabcontent.style.display = 'none';
}
