function addDivImage(){
    document.getElementById('divAddImage').style.backgroundImage = 'url("image_carnesRicas.svg")';
    document.getElementById("addImage").style.display = 'none';
}

document.getElementById("addImage").setAttribute("onclick", "addDivImage()");

function cleanPurposeName(){
    document.getElementById('purposeName').value = '';
}
document.getElementById("purposeName").setAttribute("onclick", "cleanPurposeName()");


function cleanInputHearts(){
    document.getElementById('inputHearts').style.backgroundImage = '';
}
document.getElementById("inputHearts").setAttribute("onclick", "cleanInputHearts()");
