
$(document).ready(function(){


var animation = bodymovin.loadAnimation({
  container: document.getElementById('animation'), // Required
  path: '../json/writting.json', // Required
  renderer: 'svg', // Required
  loop: false, // Optional
  autoplay: true, // Optional
});

setTimeout(function() { 
    $('.save-the-date, .body-text, .date, h2').css('opacity', '1');
}, 3000);

});