function openDisclaimerQRComunity() {
    var animationIn = "fadeInUp";
    var animationOut = "fadeOutDown";
    var x = document.getElementById("disclaimerQRComunity");
    var y = document.getElementById("disclaimerQRComunityMain");
    
    var list = x.classList;
    if(list.contains(animationOut)){
        x.classList.remove(animationOut);
        x.classList.add(animationIn);
        document.getElementById("disclaimerQRComunity_Back").style.display = "block";
        y.style.display = "block";
    }else{
        x.classList.remove(animationIn);
        x.classList.add(animationOut);
        y.style.display = "block";
        document.getElementById("disclaimerQRComunity_Back").style.display = "none";
        
    }
    
}

document.getElementById("exec_disclaimerQR").setAttribute("onclick","openDisclaimerQRComunity();");
document.getElementById("disclaimerQRComunity_Back").setAttribute("onclick","openDisclaimerQRComunity();");
document.getElementById("close_disclaimerQR").setAttribute("onclick","openDisclaimerQRComunity();");

