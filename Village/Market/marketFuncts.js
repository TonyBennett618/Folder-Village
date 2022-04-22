function purchaseFruitAndCheese() {
    var stand = document.getElementById("fruitAndCheese")
    var anima = document.getElementById("coin")
    var anim = document.getElementsByClassName("animation-container")
    if (confirm("Purchase item?") == true) {
  
      //play sleep anim (create animation)
      coin.classList.add("visible");
    
      anime({
        targets: '.animation-container',
        delay: 5000,
        translateY: -500
      });
      const timeout = setTimeout(anima, 7000)
      function anima(){
            coin.classList.remove("visible");
            alert("begone thot")
      }
      alert("You have purchased half a dozen apples, and some goat cheese.")
    } else {
      alert("You decide not to buy anything.");
    }
  }