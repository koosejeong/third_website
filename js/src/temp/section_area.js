// section_area.js
(function($){

  const viewBox = $('#viewBox');
  const guideBox = viewBox.children('.guide_box');
  const slideUl = guideBox.children('ul');
  const slideLi = slideUl.children('li');
  const btnArea = guideBox.children('.btn_area');
  const btn = btnArea.children('button');

  let len = slideLi.length;
  let myN = 0;
  let timed = 500;
  let url = `./img/section/`;
  let imgBox = [ 'img02', 'img05', 'img06', 'img08'];
  for(let i=0; i<len; i++){
    slideLi.eq(i).children('a').css({background:`url(${url + imgBox[i]}.jpg)`, backgroundSize:'cover', backgroundPosition:'50% 50%', backgroundRepeat:'no-repeat'});
  }
  slideLi.eq(-1).clone(true).prependTo(slideUl);
  len++;

  const moveSlide = function(){
    btnArea.children('.next').trigger('click');
  }
  slideLi.on('click', function(e){
    e.preventDefault();
    let va = $(this).index();
    myN = va;
    moveSlide(myN);
  });
  const goSlide = function(){
    go = setInterval(function(){
      moveSlide();
    }, timed * 10); 
  }
  const stopSlide = function(){
    clearInterval(go);
  };
  goSlide();

  viewBox.on({'mouseenter':stopSlide, 'mouseleave':goSlide});

  btn.on('click focus', function(e){
    e.preventDefault();
    let hasCl = $(this).hasClass('next');
    if(hasCl){
      myN++;
      if(myN >= len-1){
        myN = 0;
        slideUl.css({marginLeft:'100%'});
      }
    } else {
      myN--;
    } slideUl.animate({marginLeft:-100 * myN + '%'}, function(){
      if(myN < 0){
        myN = len-2;
        slideUl.css({marginLeft:-100 * myN + '%'});
      }
    });
  });

})(jQuery);