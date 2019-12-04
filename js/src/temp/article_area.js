// article_area.js
(function($){
  const conBox = $('#conBox');
  const fullBox = conBox.children('.fullBox');
  const tabUl = fullBox.children('ul');
  const tabLi = tabUl.children('li');
  const conArea = fullBox.children('.content_area');
  const conImg = conArea.children('.imgBox');
  const conTxt = conArea.children('.txtBox');

  let url = `./img/article01/`;
  let img = [ 'img02', 'img04', 'img05', 'img03' ];

  tabLi.on('click', function(e){
    e.preventDefault();
    let i = $(this).index();
    $(this).css({backgroundColor:'#fff'});
    $(this).siblings().css({backgroundColor:'transparent'});
    conImg.css({backgroundImage:`url(${url + img[i]}.jpg)`, backgroundSize:'cover', backgroundPosition:'50% 50%', backgroundRepeat:'no-repeat'});
  });
})(jQuery);