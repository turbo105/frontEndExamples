//Variables

var currentPhone = document.getElementById("currentPhone");
var currentEmail = document.getElementById("currentEmail");
var userAdminPass = document.getElementById("userAdminPass");
var userPrimaryPass = document.getElementById("userPrimaryPass");
var userSecondaryPass = document.getElementById("userSecondaryPass");
var userTemp1Pass = document.getElementById("userTemp1Pass");
var userTemp2Pass = document.getElementById("userTemp2Pass");
var userTemp3Pass = document.getElementById("userTemp3Pass");
var userAlarmStatus = document.getElementById("userAlarmStatus");
var userLidStatus = document.getElementById("userLidStatus");
var userLockStatus = document.getElementById("userLockStatus");
var userPowerStatus = document.getElementById("userPowerStatus");
var updatedPrimaryPass = document.getElementById("newPrimaryPass");
var updatedSecondaryPass = document.getElementById("newSecondaryPass");
var updatedTemp1Pass = document.getElementById("newTemp1Pass");
var updatedTemp2Pass = document.getElementById("newTemp2Pass");
var updatedTemp3Pass = document.getElementById("newTemp3Pass");


//var firebaseEmail = firebase.database().ref('Lockbox User/654321/Email');
var firebasePhone = firebase.database().ref('Lockbox User/654321/Phone');
var firebaseAdminPass = firebase.database().ref('Lockbox User/654321/Passcode/Admin Unlock');
var firebasePrimaryPass = firebase.database().ref('Lockbox User/654321/Passcode/Primary');
var firebaseSecondaryPass = firebase.database().ref('Lockbox User/654321/Passcode/Secondary');
var firebaseTemp1Pass = firebase.database().ref('Lockbox User/654321/Passcode/Temp1');
var firebaseTemp2Pass = firebase.database().ref('Lockbox User/654321/Passcode/Temp2');
var firebaseTemp3Pass = firebase.database().ref('Lockbox User/654321/Passcode/Temp3');
var firebaseAlarmStatus = firebase.database().ref('Lockbox User/654321/Alarm Status');
var firebaseLidStatus = firebase.database().ref('Lockbox User/654321/Lid Status');
var firebaseLockStatus = firebase.database().ref('Lockbox User/654321/Lock Status');
var firebasePowerStatus = firebase.database().ref('Lockbox User/654321/Power Status');
    
/*firebaseEmail.on('value', function(snapshot){
    currentEmail.innerText = snapshot.val();
});*/

firebasePhone.on('value', function(snapshot){
    currentPhone.innerText = snapshot.val();
});

firebaseAdminPass.on('value', function(snapshot){
    userAdminPass.innerText = snapshot.val();    
});

firebasePrimaryPass.on('value', function(snapshot){
    userPrimaryPass.innerText = snapshot.val();     
});

firebaseSecondaryPass.on('value', function(snapshot){
    userSecondaryPass.innerText = snapshot.val();     
});

firebaseTemp1Pass.on('value', function(snapshot){
    userTemp1Pass.innerText = snapshot.val();     
});

firebaseTemp2Pass.on('value', function(snapshot){
    userTemp2Pass.innerText = snapshot.val();     
});

firebaseTemp3Pass.on('value', function(snapshot){
    userTemp3Pass.innerText = snapshot.val();     
});

firebaseAlarmStatus.on('value', function(snapshot){
    userAlarmStatus.innerText = snapshot.val();     
});

firebaseLidStatus.on('value', function(snapshot){
    userLidStatus.innerText = snapshot.val();     
});

firebaseLockStatus.on('value', function(snapshot){
    userLockStatus.innerText = snapshot.val();     
});

firebasePowerStatus.on('value', function(snapshot){
    userPowerStatus.innerText = snapshot.val();     
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    //window.alert("Logged In");
      var userEmail = user.email;
      //window.alert(userEmail);
      currentEmail.innerText = userEmail; 
    // ...
  } else {
    document.location.href = "login.html";
  }
});


function logout(){
    firebase.auth().signOut().then(function(){ 
        window.alert("Logout Successful");
    //Sign-out successful
    document.location.href = "login.html";
    }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        
        window.alert("Error:" + errorMessage);         
    });
}

function forceAlarmOff(){
    var firebaseForceAlarm = firebase.database().ref('Lockbox User/654321/Force Alarm Off');
    
    firebaseForceAlarm.set(true);
}

function forceUnlock(){
    var firebaseForceUnlock = firebase.database().ref('Lockbox User/654321/Force Unlock');
    
    firebaseForceUnlock.set(true);
}

function updatePrimaryPass(){
    var firebaseUpdatePrimaryPass = firebase.database().ref('Lockbox User/654321/Passcode/Primary');
    var newPrimary = updatedPrimaryPass.value;
    
    firebaseUpdatePrimaryPass.set(newPrimary);
}

function updateSecondaryPass(){
    var firebaseUpdateSecondaryPass = firebase.database().ref('Lockbox User/654321/Passcode/Secondary');
    var newSecondary = updatedSecondaryPass.value;
    
    firebaseUpdateSecondaryPass.set(newSecondary);
}

function updateTemp1Pass(){
    var firebaseUpdateTemp1Pass = firebase.database().ref('Lockbox User/654321/Passcode/Temp1');
    var newTemp1 = updatedTemp1Pass.value;
    
    firebaseUpdateTemp1Pass.set(newTemp1);
}

function updateTemp2Pass(){
    var firebaseUpdateTemp2Pass = firebase.database().ref('Lockbox User/654321/Passcode/Temp2');
    var newTemp2 = updatedTemp2Pass.value;
    
    firebaseUpdateTemp2Pass.set(newTemp2);
}

function updateTemp3Pass(){
    var firebaseUpdateTemp3Pass = firebase.database().ref('Lockbox User/654321/Passcode/Temp3');
    var newTemp3 = updatedTemp3Pass.value;
    
    firebaseUpdateTemp3Pass.set(newTemp3);
}

function changePassword(){
    var pass1 = document.getElementById("changePassword").value;
    var pass2 = document.getElementById("changePasswordConfirm").value;
    if(pass1 == pass2)
        {
            var user = firebase.auth().currentUser;

            user.updatePassword(pass1).then(function() {
            window.alert("Password Updated");
              // Update successful.
            }).catch(function(error) {
              // An error happened.
              var errorCode = error.code;
              var errorMessage = error.message;

              window.alert("Error:" + errorMessage);
            });
        }
    else{
        window.alert("Passwords do not match.")
    }
}

function changeEmail(){
    var email1 = document.getElementById("changeEmail").value;
    var email2 = document.getElementById("changeEmailConfirm").value;
    if(email1 == email2)
        {
            var user = firebase.auth().currentUser;

            user.updateEmail(email1).then(function() {
            window.alert("Email Updated");
              // Update successful.
            }).catch(function(error) {
              // An error happened.
              var errorCode = error.code;
              var errorMessage = error.message;

              window.alert("Error:" + errorMessage);
            });
        }
    else{
        window.alert("Emails do not match.")
    }
}

function changePhoneNumber(){
    var firebaseUpdatePhoneNumber = firebase.database().ref('Lockbox User/654321/Phone');
    var newPhone = document.getElementById("changePhoneNumber").value;
    
    firebaseUpdatePhoneNumber.set(newPhone);
}

function addLockbox(){
    var newLockboxID = document.getElementById("addingLockboxID").value;
    //window.alert(newLockboxID);
    var firebaseRegisteredStatus = firebase.database().ref('Lockbox User/' + newLockboxID + '/Registered');
    //window.alert(firebaseRegisteredStatus);
    var registeredStatus;
    
    firebaseRegisteredStatus.on('value', function(snapshot){
    registeredStatus = snapshot.val();     
    });
        
    if(registeredStatus == "false"){
        firebaseRegisteredStatus.set("true");
        window.alert("Lockbox Added Successfully");
    }
    else{
        window.alert("Error Adding Lockbox: Lockbox may already be registered.")
    }
}

/*function addLockboxRemove(){
    document.getElementById("addLockboxPopup").style.display = "none";
}*/