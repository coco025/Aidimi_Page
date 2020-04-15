function endPurpose (){
    var end = confirm("¿Desea finalizar el propósito?");
    if(end == true){
        window.location.replace("thanks_comunity.html");
    }
}

document.getElementById("endPurpose").setAttribute("onclick","endPurpose();");