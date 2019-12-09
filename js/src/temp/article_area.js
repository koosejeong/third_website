// article_area.js
(function($){
  const conBox = $('#conBox');
  const fullBox = conBox.children('.fullBox');
  const tabUl = fullBox.children('ul');
  const tabLi = tabUl.children('li');
  const conArea = fullBox.children('.content_area');
  const conImg = conArea.children('.imgBox');
  const conTxt = conArea.children('.txtArea');
  const txtArea = conTxt.children('span');

  let url = `./img/article01/`;
  let img = [ 'img02', 'img04', 'img05', 'img03' ];
  let txtBox = [ 'Spring, something like spring','Summer, something like summer', 'In the end, it will be beautiful regardless of the season', 'Thats this perfume advertised here! Experience it!' ]; 

  for(let i=0; i<tabLi.length; i++){
    txtArea.eq(i+1).text(txtBox[i]);
  }

  tabLi.on('click mouseenter', function(e){
    e.preventDefault();
    let i = $(this).index();
    $(this).css({backgroundColor:'#fff'});
    $(this).siblings().css({backgroundColor:'transparent'});
    conImg.css({backgroundImage:`url(${url + img[i]}.jpg)`, backgroundSize:'cover', backgroundPosition:'50% 50%', backgroundRepeat:'no-repeat'});
    txtArea.siblings().css({display:'none'});
    txtArea.eq(i+1).css({display:'block'});
  });
})(jQuery);