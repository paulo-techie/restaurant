
export function loadPage() {
  document.getElementById("content").innerHTML =
    '<div class="tab">\
    <button class="tablinks" id="aboutbutton">About</button>\
    <button class="tablinks" id="menubutton">Menu</button>\
    <button class="tablinks" id="contactbutton">Contact</button>\
    </div>\
    <!-- Tab content -->\
    <div id="aboutus" class="tabcontent"></div>\
    <div id="menu" class="tabcontent"></div>\
    <div id="contactus" class="tabcontent"></div>';
  loadAbout();
  loadMenu();
  loadContact();
}

export function loadNavActions() {
  const aboutBtn = document.getElementById('aboutbutton');
  const menuBtn = document.getElementById('menubutton');
  const contactBtn = document.getElementById('contactbutton');

  aboutBtn.addEventListener('click', event => { loadTab(event, 'aboutus'); });
  menuBtn.addEventListener('click', event => { loadTab(event, 'menu'); });
  contactBtn.addEventListener('click', event => { loadTab(event, 'contactus'); });
}

function loadTab(evt, tabName) {
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
