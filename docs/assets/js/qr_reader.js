async function Qrwait(ms){
    //alert("s");   
    document.getElementById("body_reader").style.opacity = 0;

    await sleep(ms);
    
    document.getElementById("body_reader").style.opacity = 1;

}

document.getElementById("body_reader").setAttribute("onload","Qrwait(2000);");
