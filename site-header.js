// Wrap every letter in a span
$('.ml12').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

$('.ml13').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

$('.ml14').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});



anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    // offset: 000, 
    delay: function(el, i) {
      return 100 + 30 * i;
    }
  })
  .add({
    targets: '.ml13 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    offset: 100, 
    delay: function(el, i) {
      return 1000 + 30 * i;
    }
  })
  .add({
    targets: '.ml14 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    offset: 100, 
    delay: function(el, i) {
      return 1900 + 30 * i;
    }
  });
