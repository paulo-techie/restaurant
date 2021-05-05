export function loadHeader() {
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
}

export function loadAbout() {
  document.getElementById("aboutus").innerHTML = "<h3>About Us</h3>\
  <p>About Us<p>";
}

export function loadMenu() {
  document.getElementById("menu").innerHTML = "<h3>Menu</h3>\
  <p>Breakfast.Lunch.Dinner</p>";
}

export function loadContact() {
  document.getElementById("contactus").innerHTML = "<h3>Contact Us</h3>\
  <p>Thames River Road, London.</p>";
}
