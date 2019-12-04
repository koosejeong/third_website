// article_area_02.js
(function($){
  const conBox02 = $('#conBox02');
  const fullBox = conBox02.children('.fullBox');
  const boxUl = fullBox.children('ul');
  const boxLi = boxUl.children('li');
  const line = fullBox.children('.line');
  const lineUl = line.children('ul');
  const lineLi = lineUl.children('li');
  const lineA = lineLi.children('a');
  
  let url = `./img/article02/`;
  let imgBox = [ 'img01', 'img04', 'img03' ];

  for(let i=0; i<boxLi.length; i++){
    boxLi.eq(i).children('a').css({backgroundImage:`url(${url+imgBox[i]}.jpg)`, backgroundSize:'cover', backgroundPosition:'50% 50%', backgroundRepeat:'no-repeat'});
  }

  let url02 = `./img/etc/`;
  let noBox = [ 'no-01', 'no-02', 'no-03' ];
  for(let i=0; i<lineLi.length; i++){
    lineLi.eq(i).children(lineA).css({backgroundImage:`url(${url02 + noBox[i]}.png)`, backgroundSize:'cover', backgroundPosition:'50% 50%', backgroundRepeat:'no-repeat'});
  }

  boxLi.on('mouseenter click', function(e){
    e.preventDefault();
    let i = $(this).index();
    $(this).find('p').stop().fadeIn();
    if( i == 0){
      lineLi.eq(0).addClass('action');
      lineLi.eq(0).siblings().removeClass('action');
    } else if( i == 1 ){
      lineLi.eq(1).addClass('action');
      lineLi.eq(1).siblings().removeClass('action');
    } else if( i == 2 ){
      lineLi.eq(2).addClass('action');
      lineLi.eq(2).siblings().removeClass('action');
    }
  });


})(jQuery);