
$("#image_favorite").click(function(){
    var imageName = document.getElementById("image_favorite").src;
    var pos = imageName.search("solid");
    if(pos == -1){
        $("#image_favorite").attr("src","heart-solid-132.png");
    }else{
        $("#image_favorite").attr("src"," heart-regular-132.png");
       
    }
});

document.getElementById("purpose").setAttribute("onclick","window.location.href = 'join_purpose.html';");



