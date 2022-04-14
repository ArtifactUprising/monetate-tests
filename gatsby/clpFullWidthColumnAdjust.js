function checkWidth() {

    try {
        var gW = window.innerWidth;

        if (gW < 600) {
            stylezMP();
        }

        if (gW >= 600 && gW < 1024) {
            stylezT();
        }

        if (gW >= 1024) {
            stylez();
        }
    } catch (e) {}
}



function stylez() {
    try {
        var sidebar = document.querySelectorAll('[class^="SideMenu"]')[0];
        sidebar = sidebar.parentNode;
        sidebar.style.display = "none";
        var proGrid = document.querySelectorAll('[class^="ProductGrid__GridWrapper"]')[0];
        proGrid.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
        proGrid.style.gridTemplateAreas = "...";

    } catch (e) {

    }
}

function stylezT() {
    try {
        var sidebar = document.querySelectorAll('[class^="SideMenu"]')[0];
        sidebar = sidebar.parentNode;
        sidebar.style.display = "none";
        var proGrid = document.querySelectorAll('[class^="ProductGrid__GridWrapper"]')[0];
        proGrid.style.gridTemplateColumns = "1fr 1fr 1fr";
        proGrid.style.gridTemplateAreas = "...";

    } catch (e) {

    }
}


function stylezMP() {
    try {

        var proGrid = document.querySelectorAll('[class^="ProductGrid__GridWrapper"]')[0];
        proGrid.style.gridTemplateColumns = "1fr";
        proGrid.style.gridTemplateAreas = "initial";
    } catch (e) {

    }
}


try {
    checkWidth();
    window.addEventListener("resize", checkWidth);
} catch (e) {}
