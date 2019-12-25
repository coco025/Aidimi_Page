async function openNav() {
    document.getElementById("inside_mySideNav").style.marginLeft = "0px";
    document.getElementById("mySidenav").style.marginLeft = "0px";
}

function closeNav() {
        document.getElementById("inside_mySideNav").style.marginLeft = "-350px";
        document.getElementById("mySidenav").style.marginLeft = "-100%";
}

document.getElementById("mySidenav").setAttribute("onclick","closeNav();");

document.getElementById("openSideNav").setAttribute("onclick", "openNav();");

document.getElementById("edit_user").setAttribute("onclick","window.location.href = 'edit_user.html';");