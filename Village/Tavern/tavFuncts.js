var current = document.getElementsByClassName("current");
var okBtn = document.getElementsByClassName("ok");
var span = document.getElementsByClassName("close");

function closeIt(){
// on button click, close function
  //var current = document.getElementsByClassName("current");
  //alert("boop");
  //current.style.display = "none"
  $(".modal").removeClass("current").css("display","none");
  $("#coin").removeClass("visible").css("display","none");
  $(".animation-container1").removeClass("visible").css("display","none");
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
      nextModal.style.display = "none"
    }
};

function coin(){
  closeIt()
  var aCoin = document.getElementById("coin");
  
  $(".animation-container").addClass("visible").css("display","flex");
  setTimeout(() => {
    closeIt()
  }, 4000);
};

function beerTime(){
  closeIt()
  var beer = document.getElementsByClassName("animation-container-1")

  //alert("beer time")

  $(".animation-container1").addClass("visible").css("display","flex");

  anime({
    targets:'#beer',
    translateY: [
      {value: 100},
      {value: 0, delay: 7600}
    ],
    scaleY:[
      {value: [0, 100], delay: 1000},
      {value: [100, 0], delay: 7500}
    ]
    
  });
  anime({
    targets: ".bubbles",
    delay: 3000,
    opacity: [
      {value: [0, 1]},
      {value: 0, delay:7500}
    ]

  });

  anime({
    targets: ".beerContainer",
    translateX: (
      {value: 50, delay: 4000},
      {value: -50, delay: 7500}
    )
  });

  setTimeout(() => {
    closeIt()
  }, 7500);

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
