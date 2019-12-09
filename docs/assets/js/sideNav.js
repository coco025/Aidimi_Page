async function openNav() {   
    document.getElementById("mySidenav").style.marginLeft = "0px";
}

function closeNav() {
	
        document.getElementById("mySidenav").style.marginLeft = "-350px";                                      
    
}

document.getElementById("mySidenav").setAttribute("onclick","closeNav();");

document.getElementById("openSideNav").setAttribute("onclick", "openNav();");

document.getElementById("main").setAttribute("onclick", "closeNav();");

document.getElementById("edit_user").setAttribute("onclick","window.location.href = 'edit_user.html';");