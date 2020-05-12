async function deleteTeamMember() {
    var animationIn = "fadeInDown";
    var animationOut = "fadeOutRightBig";
    var x = document.getElementById("delete_TeamMember");
    var y = document.getElementById("delete_TeamMember_Main");
    
    var list = x.classList;
    if(list.contains(animationOut)){
        x.classList.remove(animationOut);
        x.classList.add(animationIn);
        document.getElementById("delete_TeamMember_Back").style.display = "block";
        y.style.display = "block";
    }else{
        x.classList.remove(animationIn);
        x.classList.add(animationOut);
        y.style.display = "block";
        document.getElementById("delete_TeamMember_Back").style.display = "none";
        
    }
    
}

document.getElementById("exec_delete_TeamMember").setAttribute("onclick","deleteTeamMember();");
document.getElementById("delete_TeamMember_Back").setAttribute("onclick","deleteTeamMember();");
document.getElementById("close_delete_teamMember").setAttribute("onclick","deleteTeamMember();");

