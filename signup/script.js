function submitHandler(event){
    console.log('submitHandler');
	var name =
		document.forms.RegForm.Name.value;
	var email =
		document.forms.RegForm.EMail.value;
	var phone =
		document.forms.RegForm.Telephone.value;
	var password =
		document.forms.RegForm.Password.value;
	//Javascript reGex for Email Validation.
	var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; 
	// Javascript reGex for Phone Number validation.
	var regPhone=/^\d{10}$/;					 
	// Javascript reGex for Name validation
	var regName = /\d+$/g;						 

	if (name == "" || regName.test(name)) {
        document.getElementById("err_name").style.visibility = "visible";
		document.getElementById("err_name").innerHTML = "*name is required";
	}
    else{
        document.getElementById("err_name").style.visibility = "hidden";	
    }

	if (email == "" ) {
		document.getElementById("err_email").style.visibility = "visible";
		document.getElementById("err_email").innerHTML = "*email is required";	
	}
	else if(!regEmail.test(email)){
		document.getElementById("err_email").style.visibility = "visible";
		document.getElementById("err_email").innerHTML = "*email is invalid";	
	}
    else{
        document.getElementById("err_email").style.visibility = "hidden";	
    }
	
	if (password == "") {
		document.getElementById("err_pass").style.visibility = "visible";
		document.getElementById("err_pass").innerHTML = "*password is required";	
	}
	else if(password.length <6){
        document.getElementById("err_pass").style.visibility = "visible";
		document.getElementById("err_pass").innerHTML = "*password is short";
	}
    else{
        document.getElementById("err_pass").style.visibility = "hidden";	
    }

	if (phone == "" ) {
		document.getElementById("err_tel").style.visibility = "visible";
		document.getElementById("err_tel").innerHTML = "*telephone is required";
	}
	else if( !regPhone.test(phone)){
		document.getElementById("err_tel").style.visibility = "visible";
		document.getElementById("err_tel").innerHTML = "*telephone is invalid ";
	
	}
    else{
        document.getElementById("err_tel").style.visibility = "hidden";	
    } 
	
}