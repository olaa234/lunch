const firebaseConfig = {
    apiKey: "AIzaSyDY6XogKkzpa7eHZLmoPYCk207Gah71P0k",
    authDomain: "registrationform-7aae5.firebaseapp.com",
    databaseURL: "https://registrationform-7aae5-default-rtdb.firebaseio.com",
    projectId: "registrationform-7aae5",
    storageBucket: "registrationform-7aae5.appspot.com",
    messagingSenderId: "406221870969",
    appId: "1:406221870969:web:a761b7c11f6190d25d01a8",
    measurementId: "G-EB7SW2TYG3",
  };

  // initialize Firebase 
  firebase.initializeApp(firebaseConfig);

  // reference message collecttion 

  var registrationFormDB = firebase.database().ref("registerForm");

  document.getElementById('registerForm').addEventListener('submit', submitForm);
  

  function submitForm(e){
    e.preventDefault();

    // get the values of the form

    var name = getElementVal('name');
    var email = getElementVal('email');
    var password = getElementVal('password');
    var repassword = getElementVal('repassword');

    saveMessages(name, email, password, repassword);

    document.querySelector('.alert').style.display = "block";

    setTimeout (()=>{
        document.querySelector(".alert").style.display = "none";
        document.getElementById("registerForm").reset();
    }, 2000);

    
  }

  const saveMessages = (
    name, email, password, repassword
  ) => {
    var newRegisterForm = registrationFormDB.push();
    newRegisterForm.set({
      name: name,
      email: email,
      password: password,
      repassword:repassword
    });
      };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };