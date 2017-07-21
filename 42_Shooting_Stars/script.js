(function() {
  var STARS = 300;
  var SHOOTINGSTARS = 6;

  // Generate Random Location for Stars
  for(var i = 1; i <= STARS; i++) {
    var el = document.getElementsByClassName("star-" + i)[0];
    el.style.top = (Math.random() * 280 + 1) + "px";
    el.style.left = (Math.random() * 280 + 1) + "px";
    el.style.animation = (Math.random() * 20 + 21) / 10 + "s flicker " + ((Math.random() * 20 + 1) / -10) + "s infinite";
  }

  // Generate Random Shooting Stars
  for(var i = 1; i <= SHOOTINGSTARS; i++) {
    var el = document.getElementsByClassName("shooting-star-" + i)[0];
    el.style.top = (Math.random() * 100 - 30) + "px";
    el.style.animation = (Math.random() * 5 + 21) + "s shooting-star " + ((Math.random() * 250) / 10) + "s infinite";
  }
})();
