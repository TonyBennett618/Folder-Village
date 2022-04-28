var anima = document.getElementById("coin")

function purchaseFruitAndCheese() {
    var stand = document.getElementById("fruitAndCheese")
    var anim = document.getElementsByClassName("animation-container")
    if (confirm("Purchase item?") == true) {

      //play sleep anim (create animation)
      coin.classList.add("visible");

      anime({
        targets: '.animation-container',
        delay: 5000,
        translateY: -600,
        easing: 'easeInOutSine',
      });
      const timeout = setTimeout(anima, 7000)
      function anima(){
            coin.classList.remove("visible");
      }

      alert("You have purchased half a dozen apples, and some goat cheese.")
    } else {
      alert("You decide not to buy anything.");
    }
  };
function purchaseClothing() {
    var stand = document.getElementById("fruitAndCheese")
    var anim = document.getElementsByClassName("animation-container")
    if (confirm("Purchase item?") == true) {

      //play sleep anim (create animation)
      coin.classList.add("visible");

      anime({
        targets: '.animation-container',
        delay: 5000,
        translateY: -600,
        easing: 'easeInOutSine',
      });
      const timeout = setTimeout(anima, 7000)
      function anima(){
            coin.classList.remove("visible");
      }

      alert("You have purchased half a dozen apples, and some goat cheese.")
    } else {
      alert("You decide not to buy anything.");
    }
  };
function purchaseTrinket() {
    var stand = document.getElementById("trinkets")
    var anim = document.getElementsByClassName("animation-container")
    if (confirm("Purchase item?") == true) {

      //play sleep anim (create animation)
      coin.classList.add("visible");

      anime({
        targets: '.animation-container',
        delay: 5000,
        translateY: -600,
        easing: 'easeInOutSine',
      });
      const timeout = setTimeout(anima, 7000)
      function anima(){
            coin.classList.remove("visible");
      }

      alert("You have purchased an silver amulet with a small switch on the back of it. Maybe it opens something.")
    } else {
      alert("You decide not to buy anything.");
    }
  };
