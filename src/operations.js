
export function navActions() {
  let aboutBtn = document.getElementById('aboutBtn');
  let menuBtn = document.getElementById('menuBtn');
  let contactBtn = document.getElementById('contactBtn');

  aboutBtn.addEventListener('click', event => { loadTab(event, 'aboutus') });
  menuBtn.addEventListener('click', event => { loadTab(event, 'menu') });
  contactBtn.addEventListener('click', event => { loadTab(event, 'contactus') });
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
