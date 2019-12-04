// haed_area.js
(function($){
let url = './data/menu.json';
let rel = null;
$.ajax({
  async:false,
  dataType:'json',
  url:url,
  success: function(data){
    return rel= data;}  
});
console.log(rel);
// -------------------------------

  const headBox = $('#headBox');
  const gnbArea = headBox.children('.gnb_area');
  const gnb = gnbArea.children('nav');
  const gnbUl = gnb.children('ul');
  const gnbLi = gnbUl.children('li');
  const bars = gnbArea.children('.btn_area');
  const barsUl = bars.children('ul');

  for(let i=0; i<gnbLi.length; i++){
    gnbLi.eq(i).append('<dl><dt></dt><dd></dd></dl');
    const gnbDl = gnbLi.children('dl');
    const gnbDt = gnbDl.children('dt');
    const gnbDd = gnbDl.children('dd');
    gnbDt.eq(i).append(rel[i].title);
    for(let j=0; j<rel[i].subtitle.length; j++){
      gnbDd.eq(i).append(`<a href="#">${rel[i].subtitle[j]}</a>`)
    }
  }

  gnb.find('dl').on('click mouseenter', function(e){
    e.preventDefault();
    $(this).children('dd').stop().slideDown();
  });
  gnb.find('dl').on('mouseleave', function(e){
    e.preventDefault();
    $(this).children('dd').stop().slideUp();
  });

  bars.on('click mouseenter', function(e){
    e.preventDefault();
    barsUl.css({display:'block'});
  });
  barsUl.on('mouseleave', function(e){
    e.preventDefault();
    $(this).css({display:'none'});
  });


})(jQuery);