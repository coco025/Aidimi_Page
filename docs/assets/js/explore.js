function filterBy(element){
    //alert(element.classList.contains("tagSelected"));
    
    if (element.classList.contains("tagSelected")){
        element.classList.add("tagNotSelected");
        element.classList.remove("tagSelected");
    }else{
        element.classList.add("tagSelected");
        element.classList.remove("tagNotSelected");
    }
}

document.getElementById("button").setAttribute("onclick","filterBy(this)");
document.getElementById("button1").setAttribute("onclick","filterBy(this)");
document.getElementById("button2").setAttribute("onclick","filterBy(this)");