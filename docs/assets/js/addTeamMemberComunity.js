function addTeamMemberComunity() {
    var animationIn = "jackInTheBox";
    var animationOut = "fadeOutRightBig";
    var x = document.getElementById("addTeamMemberComunity");
    var y = document.getElementById("addTeamMemberComunity_Main");
    
    var list = x.classList;
    if(list.contains(animationOut)){
        x.classList.remove(animationOut);
        x.classList.add(animationIn);
        document.getElementById("addTeamMemberComunity_Back").style.display = "block";
        y.style.display = "block";
    }else{
        x.classList.remove(animationIn);
        x.classList.add(animationOut);
        y.style.display = "block";
        document.getElementById("addTeamMemberComunity_Back").style.display = "none";
        
    }
    
}

document.getElementById("exec_addTeamMemberComunity").setAttribute("onclick","addTeamMemberComunity();");
document.getElementById("addTeamMemberComunity_Back").setAttribute("onclick","addTeamMemberComunity();");
document.getElementById("close_addTeamMemberComunity").setAttribute("onclick","addTeamMemberComunity();");

