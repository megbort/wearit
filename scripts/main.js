/*****************************************************
    WearIt - Javascript - Megan Krenbrink - Oct.18.21
 ****************************************************/

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

var windowSize = window.matchMedia("(max-width: 670px)"); // Call listener function at run time
windowSize.addListener(updateNav); // Attach listener function when the window size changes    