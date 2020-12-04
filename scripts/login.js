function toggleForm(){
    var container = document.querySelector('.container');
    container.classList.toggle('active')
}

function Login(){
    var username = document.forms["signIn"]["username"].value;
    var password = document.forms["signIn"]["pswd"].value;
    
    // It will show pop up alert when username and password is empty
    if (username == "" || username == null) {
        alert("Check your username again");
        return false;
      }
    if (password == ""){
        alert("Check your password again");
        return false;
    }
    else{
        return true;
    }
}

function Registration(){
    var username = document.forms["registration"]["username"].value;
    var email = document.forms["registration"]["email"].value;
    var password = document.forms["registration"]["pswd"].value;
    var passwordConfirmation = document.forms["registration"]["pswdconfirm"].value;
    
    // Variable with email format
    var  formatmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    
    // It will show pop up alert when username and password is empty
    if (username == "" || username == null) {
        alert("Username must be filled out. Please check it again");
        return false;
      }
    if (email == "") {
        alert("Email must be filled out. Please check it again");
        return false;
      }
    // It will check the format of email and pop up alert with message if the format is invalid
    if (!email.match(formatmail)){
        alert("Invalid email, please check it again");
        return false;
    }

    if (password == ""){
        alert("You should enter password. Please check it again");
        return false;
    } 
    // Password should contain at least 1 uppercase, 1 lowercase, 1 digit and minimum 8 characters
    if (!password.match(/[a-z]/g) || !password.match(/[A-Z]/g) || !password.match(/[0-9]/g) || !password.length >= 8) {
        alert("Password should contain at least: 8 characters, 1 uppercase, 1 lowercase, 1 digit");
        return false;
        }
    // Will check two passwords 
    if (password != passwordConfirmation){
        alert("Passwords do not match. Check it again");
        return false;
    }  
    else{
        return true;
    }
}