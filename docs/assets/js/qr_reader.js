async function Qrwait(){
    alert("s");   document.getElementById("main_qrReader").style.opacity = 0;

    await sleep(2000);
    
    document.getElementById("main_qrReader").style.opacity = 1;

}

document.getElementById("main_qrReader").setAttribute("onclick","Qrwait()");
