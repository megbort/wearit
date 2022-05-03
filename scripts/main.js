// NAVIGATION MANU

function toggleMenu() {
    var menu = document.getElementById("myLinks");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
    }
}

function updateNav(windowSize) {
    if (windowSize.matches) { // If media query matches
        document.getElementById("myLinks").style.display = "none";
    } else {
        document.getElementById("myLinks").style.display = "block";
        document.getElementById("myLinks").style.textAlign = "right";
    }
}

// Call listener function at run time
var windowSize = window.matchMedia("(max-width: 670px)"); 
// Attach listener function when the window size changes    
windowSize.addListener(updateNav); 


// FLICKITY SLIDER

$('.main-carousel').flickity({
  // options
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  autoPlay: true,
  pauseAutoPlayOnHover: false 
});