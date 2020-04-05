function endPurpose (){
    var end = confirm("Ingrese el correo del nuevo miembro del equipo");
    if(end == true){
        window.location.replace("thanks_comunity.html");
    }
}

document.getElementById("endPurpose").setAttribute("onclick","endPurpose();");