document.getElementsByClassName('menu-icon')[0].addEventListener('click', animateLines);

function animateLines() {
  this.classList.toggle('active');
  var divs = this.querySelectorAll('div');
  
  divs.forEach(function(div) {
    div.classList.remove('no-animation');
  });
}
