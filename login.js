//window.alert("Working");

function login(){
    //window.alert("Working");
    var loginEmail = document.getElementById("loginEmail").value;
    var loginPass = document.getElementById("loginPassword").value;
    
    //window.alert(loginEmail + " " + loginPass);
    
    firebase.auth().signInWithEmailAndPassword(loginEmail, loginPass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
        
          window.alert("Error:" + errorMessage);
          // ...
    });
}

function register(){
    //window.alert("Working");
    var registerEmail = document.getElementById("registerEmail").value;
    var registerPass = document.getElementById("registerPassword").value;
    var registerPassConfirm = document.getElementById("registerPasswordConfirm").value;
    var registerSubmit = document.getElementById("registerButton");
    
    //window.alert(registerEmail + " " + registerPass);
    if(registerPass == registerPassConfirm)
        {
            firebase.auth().createUserWithEmailAndPassword(registerEmail, registerPass).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;

              window.alert("Error:" + errorMessage);
              // ...
            });
        }
    else{
        window.alert("Passwords do not match.")
    }
    
    
}


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.alert("Login Successful");
    document.location.href = "index.html";
    // ...
  } else {
    // User is signed out.
    // ...
  }
});