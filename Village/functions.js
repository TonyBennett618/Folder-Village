//past this point is dialogue functions
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


function cyDialogue(){
    var modal = document.getElementById("cyModal");

    // Get the button that opens the modal
    var btn = document.getElementById("Cy");

    // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    Cy.onclick = function() {
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


function cyDialogueYes(){
    var prevModal = document.getElementById("cyModal");
    var nextModal = document.getElementById("cyModalYes");
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

function cyDialogueNo(){
  var prevModal = document.getElementById("cyModal");
  var nextModal = document.getElementById("cyModalNo");
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

//Innkeepers dialogue

function innDialogue(){
    var modal = document.getElementById("innModal");

    // Get the button that opens the modal
    var btn = document.getElementById("Innkeeper");

    // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    Innkeeper.onclick = function() {
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


function innDialogueYes(){
    var prevModal = document.getElementById("innModal");
    var nextModal = document.getElementById("innModalYes");
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

function innDialogueNo(){
  var prevModal = document.getElementById("innModal");
  var nextModal = document.getElementById("innModalNo");
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
