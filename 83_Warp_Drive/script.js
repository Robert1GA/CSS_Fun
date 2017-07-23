(function() {
  // Based on HTML, number of Rings and Stripes/Ring
  var RINGS = 30, STRIPES = 24, DURATION = 4;

  // Grab all the divs with class ring-[i] and all the children with class stripe
  for(var i = 1; i <= RINGS; i++) {
    var ringEl = document.getElementsByClassName("ring-" + i)[0],
      stripeEls = ringEl.getElementsByClassName("stripe"),
      timeDelay = (i - 1) * (DURATION / RINGS) * -1;

    ringEl.style.animation = "ring " + DURATION + "s cubic-bezier(0.98, 0.02, 0.97, 0.12) " + timeDelay + "s infinite";

    // Modify the style of all the stripes under each ring
    var j = 1;

    Array.prototype.forEach.call(stripeEls, function(el) {
      var degrees = ((360 / STRIPES) * (j - 1)) - (Math.random() * 10 + 1),
        transformOffset = 100 - (Math.random() * 40 + 1);

      el.style.transform = "rotate(" + degrees + "deg) translate3d(0, " + transformOffset + "px, 0) scaleY(" + (transformOffset/100) + ")";
      j++;
    })
  }
})();
