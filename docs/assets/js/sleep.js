function sleep_aux(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleep(ms) {
    await sleep_aux(ms);
    window.location.replace("login.html");
}

//document.getElementById("body_start_page").setAttribute("onload", "sleep(3000);");