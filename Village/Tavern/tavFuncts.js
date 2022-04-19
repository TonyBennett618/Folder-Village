var current = document.getElementsByClassName("current");
var okBtn = document.getElementsByClassName("ok");
var span = document.getElementsByClassName("close");

function closeIt(){
// on button click, close function
  //var current = document.getElementsByClassName("current");
  //alert("boop");
  //current.style.display = "none"
  $(".modal").removeClass("current").css("display","none");
}

//bartender dialogue

function bar(){
    var modal = document.getElementById("barModal");

    // Get the button that opens the modal
    var btn = document.getElementById("Bartender");

    // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    Bartender.onclick = function() {
    modal.classList.add("current")
    modal.style.display = "block"
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
};


function barDialogueYes(){
    var prevModal = document.getElementById("barModal");
    var nextModal = document.getElementById("barModalYes");
    var ok = document.getElementsByClassName("ok");


    // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[1];

    span.onclick = function() {
    nextModal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == nextModal) {
        nextModal.style.display = "none";
    }
    }

    //alert("Sup")
    prevModal.classList.remove("current")
    nextModal.classList.add("current")
    prevModal.style.display = "none"
    nextModal.style.display = "block"

    ok.onclick = function(){
    nextModal.style.display = "none";
    }
};

function barDialogueNo(){
  var prevModal = document.getElementById("barModal");
  var nextModal = document.getElementById("barModalNo");
  var ok = document.getElementsByClassName("ok");


  // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[1];

  span.onclick = function() {
  nextModal.style.display = "none";
  }

  window.onclick = function(event) {
  if (event.target == nextModal) {
      nextModal.style.display = "none";
  }
  }

  //alert("Sup")
  prevModal.classList.remove("current")
  nextModal.classList.add("current")
  prevModal.style.display = "none"
  nextModal.style.display = "block"

  ok.onclick = function(){
  nextModal.style.display = "none";
  }
};

//Angela's dialogue

function angelaDialogue(){
    var modal = document.getElementById("angelaModal");

    // Get the button that opens the modal
    var btn = document.getElementById("Angela");

    // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    Angela.onclick = function() {
    modal.classList.add("current")
    modal.style.display = "block"
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
    // this is for dialogue etc

};


function angelaDialogueYes(){
    var prevModal = document.getElementById("angelaModal");
    var nextModal = document.getElementById("angelaModalYes");
    var ok = document.getElementsByClassName("ok");


    // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[1];

    span.onclick = function() {
    nextModal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == nextModal) {
        nextModal.style.display = "none";
    }
    }

    //alert("Sup")
    prevModal.classList.remove("current")
    nextModal.classList.add("current")
    prevModal.style.display = "none"
    nextModal.style.display = "block"

    ok.onclick = function(){
    nextModal.style.display = "none";
    }
};

function angelaDialogueNo(){
  var prevModal = document.getElementById("angelaModal");
  var nextModal = document.getElementById("angelaModalNo");
  var ok = document.getElementsByClassName("ok");


  // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[1];

  span.onclick = function() {
  nextModal.style.display = "none";
  }

  window.onclick = function(event) {
  if (event.target == nextModal) {
      nextModal.style.display = "none";
  }
  }

  //alert("Sup")
  prevModal.classList.remove("current")
  nextModal.classList.add("current")
  prevModal.style.display = "none"
  nextModal.style.display = "block"

  ok.onclick = function(){
  nextModal.style.display = "none";
  }
};

//bathroom function

function useToilet() {
  var toilet = document.getElementById("toilet")

  if (confirm("Use the toilet?") == true) {
    alert("You used the toilet.")
  } else {
    alert("You step away from the toilet.");
  }
}

function wash() {
  var toilet = document.getElementById("sink")

  if (confirm("Use the sink?") == true) {
    alert("You wash your hands.")
  } else {
    alert("You step away from the sink, you filthy bastard.");
  }
}
