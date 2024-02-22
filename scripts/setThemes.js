//check for them value and set theme at startup
setTheme();

//set light or dark themes with flexswitch
$("#flexSwitch").click(function(event) {
    if ($("#flexSwitch").is(':checked')) {
        setLight();
    } else {
        setDark();
    }
});


//check to see if the theme is set 
function setTheme() {
    const themeValue = localStorage.getItem("theme");
    if(themeValue !== null) {
        if (themeValue == "dark") {
            setDark();
        } else {
            setLight();
            $("#flexSwitch").prop("checked", true);
        }
    } else {
        console.log("Value not set");
    }
}

function setDark() {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    $("#theme-label").text("Light");
    $("button").addClass("btn-secondary").removeClass("btn-primary");
    localStorage.setItem("theme", "dark");
    
}

function setLight() {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    $("#theme-label").text("Dark");
    $("button").removeClass("btn-secondary").addClass("btn-primary");
    localStorage.setItem("theme", "light");
    
}
