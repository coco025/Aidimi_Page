function showImage(){
    var style = document.getElementById("showImage").style;
    alert(style.display);
    if(style.display == "none"){
        style.display = "";
    }else{
        style.display = "none";
    }
}

document.getElementById("addImage").setAttribute("onclick", "showImage()");
