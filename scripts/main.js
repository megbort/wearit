// NAVIGATION MANU

// Toggle nav menu
function toggleMenu() {
  var menu = document.getElementById("myLinks");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// change from desktop to mobile menu layout on window size event
function updateNav(windowSize) {
  if (windowSize.matches) {
    document.getElementById("myLinks").style.display = "none";
    console.log('somthing');
  } else {
    document.getElementById("myLinks").style.display = "block";
    document.getElementById("myLinks").style.textAlign = "right";
  }
}

// Store value with the window size and run funtion at 670px 
let windowSize = window.matchMedia("(max-width: 670px)");
windowSize.addEventListener('change', updateNav);

// Keep the mobile nav closed on page load
function closeNav() {
  if (windowSize.matches) {
  document.getElementById("myLinks").style.display = "none";
  console.log(windowSize);
  }
}

// FLICKITY SLIDER
$('.main-carousel').flickity({
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  autoPlay: true,
  pauseAutoPlayOnHover: false,
  pageDots: false
});
