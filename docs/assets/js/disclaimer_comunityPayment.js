function openDisclaimerComunityPayment() {
    var animationIn = "fadeInUp";
    var animationOut = "fadeOutDown";
    var x = document.getElementById("disclaimerPayment");
    var y = document.getElementById("disclaimerPaymentMain");
    
    var list = x.classList;
    if(list.contains(animationOut)){
        x.classList.remove(animationOut);
        x.classList.add(animationIn);
        document.getElementById("disclaimerPayment_Back").style.display = "block";
        y.style.display = "block";
    }else{
        x.classList.remove(animationIn);
        x.classList.add(animationOut);
        y.style.display = "block";
        document.getElementById("disclaimerPayment_Back").style.display = "none";
        
    }
    
}

document.getElementById("exec_disclaimerPayment").setAttribute("onclick","openDisclaimerComunityPayment();");
document.getElementById("disclaimerPayment_Back").setAttribute("onclick","openDisclaimerComunityPayment();");
document.getElementById("close_disclaimerPayment").setAttribute("onclick","openDisclaimerComunityPayment();");

