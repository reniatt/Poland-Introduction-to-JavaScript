  var main = function() {
  
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
  
}
  
  var i = 0;
  var images = [];
  var time = 4000;

  images[0] = "../image/homberg-1959229__340.jpg";
  images[1] = "../image/bled-1899264__340.jpg";
  images[2] = "../image/clouds-2517653_1920.jpg";
  images[3] = "../image/big-waves-2193828_1920.jpg";
  images[4] = "../image/suns-rays-478249_1920.jpg";
  images[5] = "../image/lebanon-2542916_1920.jpg";
  
  function changeImg() {
  document.slide.src = images[i];
	if (i < images.length - 1){
		i++;
	} else {
		i = 0;
	}
  
  setTimeout('changeImg()', time);
  }

  window.onload = 'changeImg()';

$(main);
