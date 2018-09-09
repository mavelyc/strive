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
  var firestore = firebase.firestore();

  const docRef = firestore.doc("samples/sandwichData");
  const profileName = document.querySelector("#profileName");
  const btnSubmit = document.querySelector("#btnSubmit");

  btnSubmit.addEventListener("click", function() {
    const textToSave = profileName.value;
    console.log(textToSave);
    docRef
      .set({
        name: textToSave
      })
      .then(function() {
        console.log("Status saved!");
      })
      .catch(function(error) {
        console.log("Got an error; ", error);
      });
  });
});
