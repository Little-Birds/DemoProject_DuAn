var person = [];
person[0] = {username: 'vantuduong', password: '20091996'}
person[1] = {username: 'caosytrung', password: 'trungsida'}
person[2] = {username: 'vantuduong2', password: '20091998'}
person[3] = {username: 'vantuduong3', password: '20091999'}
person[4] = {username: 'vantuduong4', password: '20091990'}
person[5] = {username: 'buitiendat', password: 'tiendat'}

var inputUsername = document.getElementById("username");
var inputPassword = document.getElementById("password");

var formLogin = document.getElementById("login");

if(formLogin.attachEvent){
	formLogin.attachEvent('submit', onFormSubmit);
} else formLogin.addEventListener('submit',onFormSubmit);

function onFormSubmit(e){
	if(e.preventDefault()) e.preventDefault();
	var username = inputUsername.value;
	var password = inputPassword.value;
	for(var i=0;i < person.length;i++){
		if(username == person[i].username && password == person[i].password){
		    window.location = 'Trangchu.html';
			break;
	    } 
		if(i == person.length - 1){
		    document.getElementById("error").innerHTML = "Username or Password incorrect";
		    
	    }
	}
	
}



