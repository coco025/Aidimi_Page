async function deletePurposeComunity() {
    var animationIn = "fadeInDown";
    var animationOut = "fadeOutRightBig";
    var x = document.getElementById("delete_PurposeComunity");
    var y = document.getElementById("delete_PurposeComunity_Main");
    
    var list = x.classList;
    if(list.contains(animationOut)){
        x.classList.remove(animationOut);
        x.classList.add(animationIn);
        document.getElementById("delete_PurposeComunity_Back").style.display = "block";
        y.style.display = "block";
    }else{
        x.classList.remove(animationIn);
        x.classList.add(animationOut);
        y.style.display = "block";
        document.getElementById("delete_PurposeComunity_Back").style.display = "none";
        
    }
    
}

document.getElementById("exec_delete_purpose").setAttribute("onclick","deletePurposeComunity();");
document.getElementById("delete_PurposeComunity_Back").setAttribute("onclick","deletePurposeComunity();");
document.getElementById("close_delete_purpose").setAttribute("onclick","deletePurposeComunity();");

