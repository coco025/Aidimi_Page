function openNav() {
    document.getElementById("sideNav_Options").style.marginLeft = "0%";
    document.getElementById("sideNav_Back").style.marginLeft = "0%";
}

function closeNav() {
    document.getElementById("sideNav_Options").style.marginLeft = "-100%";
    document.getElementById("sideNav_Back").style.marginLeft = "-100%";
}

document.getElementById("sideNav_Back").setAttribute("onclick","closeNav();");

document.getElementById("openSideNav").setAttribute("onclick", "openNav();");

document.getElementById("edit_user").setAttribute("onclick","window.location.href = 'edit_user.html';");