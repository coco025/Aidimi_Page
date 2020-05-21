var xhr = new XMLHttpRequest();

function register_user_api()
{	
  var data = {
    name: "ABC",
    lastName: "CDE",
    email: "a@gmail.com",
    password: "abcde",
    username: "xyz"
  };
    
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//window.location.href = "mainPage_comunity.html";
			console.log(xhttp.responseText);
		}
	};
  

  var json = JSON.stringify(data);

    //xhr.open("POST", "https://api-aidimi.herokuapp.com/user/create");
    //xhr.setRequestHeader("Content-Type", "application/json");
  
	xhttp.open("post", "https://api-aidimi.herokuapp.com/user/create", true);
	xhr.send(json);
}
