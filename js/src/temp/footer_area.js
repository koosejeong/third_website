// footer_area.js
(function($){

  const footBox = $('#footBox');
  const fullBox = footBox.children('.fullBox');
  const iconArea = fullBox.children('.icon_area');
  const iconUl = iconArea.children('ul');
  const iconLi = iconUl.children('li');

  let url = `./img/etc/`;
  let iconBox = ['company-info-01', 'terms-icon-02-01', 'sns-icon-02-01', 'cs-icon-02-01' ];
  for(let i=0; i<iconLi.length; i++){
    iconLi.eq(i).children('a').css({backgroundImage:`url(${url + iconBox[i]}.png)`, backgroundSize:'cover', backgroundPosition:'50% 50%', bakcgroundRepeat:'no-repeat'});
  }
})(jQuery);