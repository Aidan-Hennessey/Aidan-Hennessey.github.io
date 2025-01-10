function setColorMode(mode) {
    if(mode == 'light') {
        sessionStorage.setItem('theme', 'light');
        document.styleSheets[2].disabled = true;
        document.getElementById("darkmode").innerHTML = "Dark mode";
    } else {
        sessionStorage.setItem('theme', 'dark');
        document.styleSheets[2].disabled = false;
        document.getElementById("darkmode").innerHTML = "Light mode";
    }
}

function toggleStyle() {
    if (sessionStorage.getItem('theme') == 'light') {
        setColorMode('dark');
    } else {
        setColorMode('light');
    }
}

function initializeColorMode() {
    if(sessionStorage.getItem('theme') == null) {
        setColorMode('light');
    } else {
        setColorMode(sessionStorage.getItem('theme'));
    }
}

