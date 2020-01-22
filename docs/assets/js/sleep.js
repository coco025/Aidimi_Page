function sleep_aux(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleep(ms) {
    await sleep_aux(ms);
    var element = document.getElementById("img_center"); 
    document.getElementById("body_start_page").style.backgroundColor = "#dddddd";
    element.classList.add("zoomOutDown");
    
        await sleep_aux(1000);
    window.location.replace("login.html");
}

document.getElementById("body_start_page").setAttribute("onload", "sleep(3000);");