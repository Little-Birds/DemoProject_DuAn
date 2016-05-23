function XulyForm(){
				var username = document.forms["MyForm"]["nick"].value;
				if(username == ""){
					alert("UserName không được để trống");
					return false;
				}
				
				/* Thêm if để kiểm tra username */
				
				var pass = document.forms["MyForm"]["pass"].value;
				if(pass == ""){
					alert("Bạn chưa nhập password");
					return false;
				}
				
				var cfpass = document.forms["MyForm"]["cfpassword"].value;
				if(cfpass = "" || cfpass  != pass){
					alert("Confirm password is false");
					return false;
				}
				
				var email = document.forms["MyForm"]["email"].value;
				var aCong = email.indexOf("@");
				var dauCham = email.lastIndexOf(".");
				if(email == ""){
					alert("Email không được để trống");
					return false;
				}
				else 
					if((aCong < 1) || (dauCham < aCong + 2) || (dauCham +2 > email.length)){
						alert("Email điền không đúng");
						return false;
					} 
				
				var liv = document.forms["MyForm"]["living"].value;
				if(liv == ""){
					alert("Living không được để trống");
					return false;
				}
				
				var phoneNumber = document.forms["MyForm"]["phonenumber"].value;
				var checkphoneNumber = isNaN(phoneNumber);
				if(phoneNumber == ""){
					alert("Số điện thoại không để trống");
					return false;
				}	
				if(checkphoneNumber == true){
					alert("Số điện thoại phải ở dạng số");
					return false;
				}
				
}
