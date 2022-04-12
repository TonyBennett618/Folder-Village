function cyDialogue(){
    var name = document.getElementById("Cy")

    var alertMessage = "Oh, I've not seen you around here! Welcome to Crewnage Village. Do you need any assistance? (Ok for yes, Cancel for no)"
    var r = confirm(alertMessage);

    if(r==true)
    {
        alertMessage=("Ok! Well, we have an Inn, if you need a room to sleep. We have a tavern if you want a load off, and we have a market! Where you can spend your money! If you need me, I will be right here!")
    }
    else
    {
        alertMessage=("Oh, I see, well I hope you find what you are looking for.")
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