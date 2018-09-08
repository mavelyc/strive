(function() {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBegO-coeV9SLIGJILD0nx1087yTc2kg_8",
    authDomain: "strive-c70c3.firebaseapp.com",
    databaseURL: "https://strive-c70c3.firebaseio.com",
    projectId: "strive-c70c3",
    storageBucket: "strive-c70c3.appspot.com",
    messagingSenderId: "15027244781"
  };
  firebase.initializeApp(config);

  // Get elements
  const txtEmail = document.getElementById("uname1");
  const txtPassword = document.getElementById("pwd1");
  const btnLogin = document.getElementById("btnLogin");
  const newEmail = document.getElementById("uname2");
  const newPassword = document.getElementById("pwd2");
  const btnSignup = document.getElementById("btnSignup");
  const btnLogout = document.getElementById("btnLogout");

  // Add login event
  btnLogin.addEventListener("click", e => {
    // Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  //Add signup event
  btnSignup.addEventListener("click", e => {
    const email = newEmail.value;
    const pass = newPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  btnLogout.addEventListener("click", e => {
    firebase.auth().signOut();
  });

  //Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      window.location = "../dashboard/index2.html"; //After successful login, user will be redirected to home.html
      console.log(firebaseUser);
    } else {
      console.log("not logged in");
    }
  });
})();
