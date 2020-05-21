var xhttp = new XMLHttpRequest();

function login()
{	
	 var data = {
    email: "a@a",
    password: "abc"
  };
	var json = JSON.stringify(data);
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//window.location.href = "mainPage_comunity.html";
			console.log(xhttp.responseText);
		}
	};
	xhttp.open("post", "https://api-aidimi.herokuapp.com/auth/login", true);
	xhttp.send(json);	
}
