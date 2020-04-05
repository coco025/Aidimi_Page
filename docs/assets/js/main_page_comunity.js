function deleteTeamMember(){
    confirm("¿Desea eliminar al miembro del equipo?");
}

function addTeamMember(){
    var person = prompt("Ingrese el correo del nuevo miembro del equipo");
}

document.getElementById("deleteTeamMember").setAttribute("onclick","deleteTeamMember();");

document.getElementById("addTeamMember").setAttribute("onclick","addTeamMember();");
