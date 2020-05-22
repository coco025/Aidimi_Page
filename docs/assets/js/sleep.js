function sleep_aux(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleep(ms){
    await sleep_aux(ms);
}
async function indexPage(ms){
    await sleep(ms);
    var element = document.getElementById("img_center"); 
    element.classList.add("zoomOutRight");
    element = document.getElementById("loading"); 
    element.classList.remove("fadeIn");
    element.classList.remove("slower");
    element.classList.add("zoomOutLeft");
    await sleep(1000);
    window.location.replace("both_login.html");
}

document.getElementById("body_start_page").setAttribute("onload", "indexPage(3000);");