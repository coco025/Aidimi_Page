function openDisclaimerComunity() {
    var animationIn = "fadeInUp";
    var animationOut = "fadeOutDown";
    var x = document.getElementById("disclaimer");
    var y = document.getElementById("disclaimerMain");
    
    var list = x.classList;
    if(list.contains(animationOut)){
        x.classList.remove(animationOut);
        x.classList.add(animationIn);
        document.getElementById("disclaimerComunity_Back").style.display = "block";
        y.style.display = "block";
    }else{
        x.classList.remove(animationIn);
        x.classList.add(animationOut);
        y.style.display = "block";
        document.getElementById("disclaimerComunity_Back").style.display = "none";
        
    }
    
}

document.getElementById("exec_disclaimer").setAttribute("onclick","openDisclaimerComunity();");
document.getElementById("disclaimerComunity_Back").setAttribute("onclick","openDisclaimerComunity();");
document.getElementById("close_disclaimer").setAttribute("onclick","openDisclaimerComunity();");

