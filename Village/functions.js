

//past this point is dialogue

function cyDialogue(){
    var modal = document.getElementById("cyModal");

    // Get the button that opens the modal
    var btn = document.getElementById("Cy");



    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    Cy.onclick = function() {
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
    var hidden = document.getElementById("hidden");
    var yes = document.getElementsByClassName("yes");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    yes.onclick = function() {
        nextModal.style.display = "block";

    }


};

function goToSleep(){
    var bed = document.getElementById("bed");

    var alertMessage = "You feel well rested."
    var r = confirm(alertMessage);

    if(r==true)
    {
        return
    }
    else
    {
        return
    }
}
