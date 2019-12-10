// section_area.js
(function($){

  const viewBox = $('#viewBox');
  const guideBox = viewBox.children('.guide_box');
  const slideUl = guideBox.children('ul');
  const slideLi = slideUl.children('li');

  $('.pattern_box').css({zIndex:20});
  let len = slideLi.length;
  let myN = 0;
  let url = `./img/section/`;
  let imgBox = [ 'img02', 'img05', 'img06', 'img08'];
  for(let i=0; i<len; i++){
    slideLi.eq(i).children('a').css({background:`url(${url + imgBox[i]}.jpg)`, backgroundSize:'cover', backgroundPosition:'50% 50%', backgroundRepeat:'no-repeat'});
  }

  setInterval(function(){
    myN++;
    if( myN > len-1){
      myN = 0;
    }
    slideLi.eq(myN).css({zIndex:10});
    slideLi.eq(myN).fadeIn(function(){
      slideLi.eq(myN).siblings().hide(0);
      slideLi.css({zIndex:0});
    });
  }, 5000);

})(jQuery);