var xhttp = new XMLHttpRequest();

function login()
{	
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//window.location.href = "mainPage_comunity.html";
			console.log(xhttp.responseText);
		}
	};
	
xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhttp.open("post", "https://api-aidimi.herokuapp.com/auth/login", true);
	xhttp.send();	
}
