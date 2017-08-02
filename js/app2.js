var main = function() {
 
  var i = 0;
  var images = [];
  var time = 4000;

  images[0] = 'homberg-1959229__340.jpg';
  images[1] = 'bled-1899264__340.jpg';
  images[2] = 'clouds-2517653_1920.jpg';
  images[3] = 'big-waves-2193828_1920.jpg';
  images[4] = 'suns-rays-478249_1920.jpg';
  images[5] = 'lebanon-2542916_1920.jpg';
  
  function changeImg() {
  document.slide.src = images[i];
	if (i < images.length - 1){
		i++;
	} else {
		i = 0;
	}
  
  setTimeout('changeImg()', time);
  }
  
  window.onload = changeImg;
}
  
$(main);
