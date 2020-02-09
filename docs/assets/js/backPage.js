function goBack() {
  window.history.back();
}

document.getElementById("backPage").setAttribute("onclick", "goBack();")