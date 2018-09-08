  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCFwcRWfD4IFZP2xwllDBtZupuL1C94kWc",
    authDomain: "messagetracker-fdcb7.firebaseapp.com",
    databaseURL: "https://messagetracker-fdcb7.firebaseio.com",
    projectId: "messagetracker-fdcb7",
    storageBucket: "messagetracker-fdcb7.appspot.com",
    messagingSenderId: "752908261736"
  };

  
firebase.initializeApp(config);
var database = firebase.database();


//Retrieve all messages. 
database.ref().on("child_added", function(childSnapshot) {
            var name = childSnapshot.val().senderName;
            var email = childSnapshot.val().senderEmail;
            var time = childSnapshot.val().timeStamp;
            var message = childSnapshot.val().SenderMessage;
            var messageRow = `<tr>
                                    <td>${name}</td>
                                    <td>${email}</td>
                                    <td>${time}</td>
                                    <td class="text-truncate" style="max-width: 50px;">${message}</td>
                                    <td><button text="${message}" type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Unread</button></td>
                                </tr>`;
            // if ($(`span[data-meal="${snapMeal}"]`).length > 0) return;
            $('tbody').prepend(messageRow);
        }, 
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
});


$(document).on('click','button',function () { 
  $(this).text('Read');
  $('#modalBody').empty(); 
  var message = $(this).attr('text');
  var text = `<p>${message}</p>`;
  $('#modalBody').append(text); 
});




