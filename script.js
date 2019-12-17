////////////////////LOADING////////////////////

$('head').append(
  '<style type="text/css">#contents { display: none; } #fade { display: block; }</style>'
);

jQuery.event.add(window, "load", function() { // 全ての読み込み完了後に呼ばれる関数
  var pageH = $("#contents").height();
  $("#fade").css("height", pageH).delay(0).fadeOut(500);
  $("#contents").css("display", "block");
});

///////////////////////////////////////////////

var windowWidth;
var windowHeight;
var colWidth;
var padding;
var colPadding;
var n;
var circlePosition = [];
var pararax;

//円の座標
var circles= [//x,y,r
  [213, -7, 32],
  [455, 126, 35],
  [362, 266, 100],
  [67, 581, 37],
  [376, 522, 141],
  [747, 80, 116],
  [1053, 265, 27],
  [1113, 58, 63],
  [1106, 337, 143],
  [853, 386, 379],
  [399, 64, 82],
  [169, 200, 222],
  [215, -16, 117],
  [373, 87, 52],
  [118, 303, 140],
  [176, 492, 21],
  [83, 575, 63],
  [334, 547, 81],
  [824, 152, 63],
  [918, 43, 27],
  [987, 54, 97],
  [1149, -54, 175],
  [1197, 218, 16],
  [1018, 245, 50],
  [1161, 546, 133]
];


$(document).ready(function() {
  ReLayout();
  $(window).on("load resize", ReLayout);
});


function ReLayout() {

  windowWidth = document.documentElement.clientWidth;
  windowHeight = document.documentElement.clientHeight;

  console.log(windowWidth);
  console.log(windowHeight);

  initCircles();
  moveCircles();

  //SP
  if (windowWidth <= 800) {

    //common
    $('.h_section').css('font-size', 7 + 'px');
    $('.logobox').css('height', 140 + 'px');
    $('.tentologo').css('height', 140 + 'px');

    //Top
    $('#top').css('height', windowHeight + 'px');
    $('.navi').css('top', 25 + 'px');
    $('.link').css('padding-left', 25+'px');
    $('.link').css('height', 12+'px');
    $('.link').css('line-height', 12+'px');
    $('.link').css('margin-bottom', 7+'px');
    $('.storeLink').css('padding-left', 25+'px');
    $('.storeLink').css('height', 24+'px');
    $('.storeLink').css('width', 40+'px');
    $('.storeLink').css('line-height', 12+'px');
    $('.storeLink').css('margin-bottom', 19+'px');
    $('.language').css('margin-left', 25+'px');
    $('.language').css('padding', 0+'px '+0+'px '+0+'px '+1+'px');
    $('.link').css('margin-bottom', 7+'px');
    $('.h_navi').css('font-size', 7 + 'px');
    $('.h_navi').css('letter-spacing', 0.15 + 'em');
    $('#top-logobox').css('padding-top', windowHeight / 2 - 70 + 'px');

    //About
    $('.section').css('padding-left', 20 + 'px');
    $('.section').css('padding-top', 20 + 'px');
    $('.catchcopy').css('padding-left', 5 + '%');
    $('.catchcopy').css('padding-right', 5 + '%');
    $('.sentence').css('padding-left', 5 + '%');
    $('.sentence').css('padding-right', 5 + '%');
    $('.h_aboutTitle').css('font-size', 15 + 'px');
    $('.h_aboutTitle').css('line-height', 26 + 'px');
    $('.h_aboutText').css('font-size', 8 + 'px');
    $('.h_aboutText').css('line-height', 14 + 'px');

    //Product
    $('.series').css('padding-top', 50 + 'px');
    $('.h_seriesTitle').css('font-size', 10 + 'px');
    $('.h_seriesTitle').css('line-height', 17 + 'px');
    $('.h_seriesTitle').css('margin-bottom', 30 + 'px');
    $('.h_seriesText').css('font-size', 9 + 'px');
    $('.h_seriesText').css('line-height', 14 + 'px');
    $('.h_seriesText_en').css('font-size', 9 + 'px');
    $('.h_seriesText_en').css('line-height', 14 + 'px');
    $('.container').css('padding', 30 + 'px ' + 25 + 'px');
    $('.container').css('text-align', 'left');
    $('.cover').css('padding', 10 + 'px ' + 10 + 'px ' + 15 + 'px ' + 10 + 'px');

    $('.h_productTitleEn').css('font-size', 9 + 'px');
    $('.h_productTitleEn').css('line-height', 15 + 'px');
    $('.h_productTitleJp').css('font-size', 7 + 'px');
    $('.h_productTitleJp').css('line-height', 12 + 'px');
    $('.h_taste').css('font-size', 8 + 'px');
    $('.h_taste').css('line-height', 14 + 'px');
    $('.h_explanation').css('font-size', 8 + 'px');
    $('.h_explanation').css('line-height', 12 + 'px');
    $('.h_explanation_en').css('font-size', 8 + 'px');
    $('.h_explanation_en').css('line-height', 12 + 'px');

    $('.productImage').css('margin-bottom', 20 + 'px');
    $('.ball').css('margin-bottom', 20 + 'px');
    $('.btm16').css('margin-bottom', 10 + 'px');
    $('.btm50').css('margin-bottom', 20 + 'px');

    $('.split').css('height', 7 + 'px');
    $('.splitImg').css('height', 15 + 'px');
    $('.split').css('width', windowWidth - 40 + 'px');
    $('.split').css('margin-left', 20 + 'px');

    $('.photoFrame').css('height', 250+'px');
    $('.photo').css('display', 'none');

    n = 2;
    $('.cover').css('width', (windowWidth - 25 * n - 10 * n * 2) / n + 'px');

    //news
    $('#news_contents').css('margin', 50 + 'px ' + 20 + 'px ' + 50 + 'px ' + 20 + 'px');
    $('.news_each').css('font-size', 7 + 'px');
    $('.news_each').css('line-height', 16 + 'px');
    $('.news_each').css('height', 20 + 'px');

    //map
    $('#map').css('width', windowWidth - 80 + 'px');
    $('#map').css('height', 150 + 'px');
    $('#map').css('margin', 70 + 'px ' + 40 + 'px ' + 30 + 'px ' + 40 + 'px');
    $('#map').css('float', 'none');
    $('#addressbox').css('margin', 10 + 'px' + ' ' + 40 + 'px' + ' ' + 50 + 'px' + ' ' + 40 + 'px');
    $('.address').css('font-size', 7 + 'px');
    $('.address').css('line-height', 16 + 'px');
    $('.address_en').css('font-size', 7 + 'px');
    $('.address_en').css('line-height', 16 + 'px');

    //bannar
    $('#bannar').css('width', windowWidth-80+'px');
    $('#bannar').css('height', 150+'px');
    $('#bannar_left').css('width', windowWidth-80-150 + 'px');
    $('#bannar_right').css('width', 150 + 'px');

    //footer
    $('#footer').css('height', 400 + 'px');
    $('#footer-logobox').css('padding-top', 100 + 'px');
    $('.footer-snsIcon').css('width', 19 + 'px');
    $('.footer-snsIcon').css('margin', 40 + 'px ' + 0 + 'px ' + 20 + 'px ' + 0 + 'px');
    $('#footer-credit').css('font-size', 6 + 'px');

  }
  //PC
  else {

    //common
    $('.h_section').css('font-size', 11 + 'px');
    $('.logobox').css('height', 300 + 'px');
    $('.tentologo').css('height', 300 + 'px');

    //Top
    $('#top').css('height', windowHeight + 'px');
    $('.navi').css('top', 50 + 'px');
    $('.link').css('padding-left', 50+'px');
    $('.link').css('height', 19+'px');
    $('.link').css('line-height', 19+'px');
    $('.link').css('margin-bottom', 13+'px');
    $('.storeLink').css('padding-left', 50+'px');
    $('.storeLink').css('height', 19+'px');
    $('.storeLink').css('width', 120+'px');
    $('.storeLink').css('line-height', 19+'px');
    $('.storeLink').css('margin-bottom', 32+'px');
    $('.language').css('margin-left', 50+'px');
    $('.language').css('padding', 1+'px '+0+'px '+1+'px '+3+'px');
    $('.link').css('margin-bottom', 13+'px');
    $('.h_navi').css('font-size', 11 + 'px');
    $('.h_navi').css('letter-spacing', 0.25 + 'em');
    $('#top-logobox').css('padding-top', windowHeight / 2 - 150 + 'px');

    //About
    $('.section').css('padding-left', 50 + 'px');
    $('.section').css('padding-top', 40 + 'px');
    $('.catchcopy').css('padding-left', 12 + '%');
    $('.catchcopy').css('padding-right', 12 + '%');
    $('.sentence').css('padding-left', 12 + '%');
    $('.sentence').css('padding-right', 12 + '%');
    $('.h_aboutTitle').css('font-size', 24 + 'px');
    $('.h_aboutTitle').css('line-height', 42 + 'px');
    $('.h_aboutText').css('font-size', 12 + 'px');
    $('.h_aboutText').css('line-height', 24 + 'px');

    //Product
    $('.series').css('padding-top', 90 + 'px');
    $('.h_seriesTitle').css('font-size', 16 + 'px');
    $('.h_seriesTitle').css('line-height', 28 + 'px');
    $('.h_seriesTitle').css('margin-bottom', 40 + 'px');
    $('.h_seriesText').css('font-size', 12 + 'px');
    $('.h_seriesText').css('line-height', 19 + 'px');
    $('.h_seriesText_en').css('font-size', 12 + 'px');
    $('.h_seriesText_en').css('line-height', 19 + 'px');
    $('.container').css('padding', 80 + 'px ' + 50 + 'px '+ 90 + 'px '+ 50 + 'px');
    $('.container').css('text-align', 'center');
    $('.cover').css('padding', 17.5 + 'px');

    $('.h_productTitleEn').css('font-size', 12 + 'px');
    $('.h_productTitleEn').css('line-height', 21 + 'px');
    $('.h_productTitleJp').css('font-size', 9 + 'px');
    $('.h_productTitleJp').css('line-height', 15 + 'px');
    $('.h_taste').css('font-size', 10 + 'px');
    $('.h_taste').css('line-height', 17.5 + 'px');
    $('.h_explanation').css('font-size', 10 + 'px');
    $('.h_explanation').css('line-height', 17.5 + 'px');
    $('.h_explanation_en').css('font-size', 10 + 'px');
    $('.h_explanation_en').css('line-height', 17.5 + 'px');

    $('.productImage').css('margin-bottom', 50 + 'px');
    $('.ball').css('margin-bottom', 25 + '%');
    $('.btm16').css('margin-bottom', 16 + 'px');
    $('.btm50').css('margin-bottom', 50 + 'px');

    $('.split').css('height', 15 + 'px');
    $('.splitImg').css('height', 31 + 'px');
    $('.split').css('width', windowWidth - 100 + 'px');
    $('.split').css('margin-left', 50 + 'px');

    $('.photoFrame').css('height', 700+'px');
    $('.photo').css('display', 'block');

    n = 5;
    $('.cover').css('width', (windowWidth - 50 * 2 - 17.5 * n * 2) / n + 'px');

    //news
    $('#news_contents').css('margin', 80 + 'px ' + 150 + 'px ' + 100 + 'px ' + 150 + 'px');
    $('.news_each').css('font-size', 11 + 'px');
    $('.news_each').css('line-height', 32 + 'px');
    $('.news_each').css('height', 31 + 'px');

    //map
    $('#map').css('width', 600 + 'px');
    $('#map').css('height', 300 + 'px');
    $('#map').css('margin', 80 + 'px ' + -70 + 'px ' + 0 + 'px ' + 150 + 'px');
    $('#map').css('float', 'left');
    $('#addressbox').css('margin', 75 + 'px ' + 0 + 'px ' + 120 + 'px ' + 150 + 'px');
    $('.address').css('font-size', 11 + 'px');
    $('.address').css('line-height', 31 + 'px');
    $('.address_en').css('font-size', 11 + 'px');
    $('.address_en').css('line-height', 31 + 'px');

    //bannar
    if(windowWidth-300-300>380){
      $('#bannar').css('width', windowWidth-300+'px');
      $('#bannar').css('height', 350+'px');
      $('#bannar_left').css('width', windowWidth-300-380 + 'px');
    }else{
      $('#bannar').css('width', 380+300+'px');
      $('#bannar').css('height', 350+'px');
      $('#bannar_left').css('width', 300 + 'px');
    }
    $('#bannar_right').css('width', 380 + 'px');

    //footer
    $('#footer').css('height', 800 + 'px');
    $('#footer-logobox').css('padding-top', 120 + 'px');
    $('.footer-snsIcon').css('width', 38 + 'px');
    $('.footer-snsIcon').css('margin', 80 + 'px ' + 0 + 'px ' + 40 + 'px ' + 0 + 'px');
    $('#footer-credit').css('font-size', 11 + 'px');

    //photo

    var tento = document.getElementById("tento");
    var ann = document.getElementById("ann");
    var bar = document.getElementById("bar");
    var tentoRect = tento.getBoundingClientRect();
    var annRect = ann.getBoundingClientRect();
    var barRect = bar.getBoundingClientRect();

    // 画面内の位置
    var tentoY = tentoRect.top;
    var annY = annRect.top;
    var barY = barRect.top;

    var speed=1/10;
    var frameHeight=700;
    var margin=(windowHeight+frameHeight)*speed;
    var rate=1800/1200;

    clearInterval(pararax);

    if (windowWidth/rate-frameHeight > margin) {//画面が横長
      $('.photo').css('width', windowWidth + 'px');
      $('.photo').css('margin-left', 0 + 'px');

      pararax=setInterval(function() {

        tentoRect = tento.getBoundingClientRect();
        annRect = ann.getBoundingClientRect();
        barRect = bar.getBoundingClientRect();

        // 画面内の位置
        tentoY = tentoRect.top;
        annY = annRect.top;
        barY = barRect.top;

        $('#tentoPhoto').css('margin-top', -(windowWidth/rate-frameHeight)*(windowHeight-tentoY)/(windowHeight+frameHeight) + 'px');
        $('#annPhoto').css('margin-top', -(windowWidth/rate-frameHeight)*(windowHeight-annY)/(windowHeight+frameHeight) + 'px');
        $('#barPhoto').css('margin-top', -(windowWidth/rate-frameHeight)*(windowHeight-barY)/(windowHeight+frameHeight) + 'px');


      }, 10);
    }else{//画面が縦長
      $('.photo').css('width', (frameHeight+margin)*rate + 'px');
      $('.photo').css('margin-left', -((frameHeight+margin)*rate-windowWidth)/2 + 'px');

      pararax=setInterval(function() {

        tentoRect = tento.getBoundingClientRect();
        annRect = ann.getBoundingClientRect();
        barRect = bar.getBoundingClientRect();

        // 画面内の位置
        tentoY = tentoRect.top;
        annY = annRect.top;
        barY = barRect.top;

        $('#tentoPhoto').css('margin-top', -(windowHeight-tentoY)*speed + 'px');
        $('#annPhoto').css('margin-top', -(windowHeight-annY)*speed + 'px');
        $('#barPhoto').css('margin-top', -(windowHeight-barY)*speed + 'px');


      }, 10);
    }





  }
}

//ファーストビューの円を動かす
function initCircles(){
  for(var i=0; i<circles.length; i++){
    var diameter=circles[i][2]*windowHeight/720
    var left=circles[i][0]*windowWidth/1280-circles[i][2]*(windowHeight/720-1)/2;
    var top=circles[i][1]*windowHeight/720-circles[i][2]*(windowHeight/720-1)/2;
    $('#circle'+i).css('left',  left+ 'px');
    $('#circle'+i).css('top',  top+ 'px');
    $('#circle'+i).css('width',  diameter+ 'px');
    circlePosition[i]=[left,top]
  }
}

var move;
function moveCircles(){
  var count=0;
  clearInterval(move);

  function moveInterval(){
    for(var i=0; i<circles.length; i++){
      var deltaX=Math.sin(i+count/100)/10;
      var deltaY=Math.cos(i+count/100)/10;
      circlePosition[i][0]=circlePosition[i][0]+deltaX;
      circlePosition[i][1]=circlePosition[i][1]+deltaY;
      $('#circle'+i).css('left',  circlePosition[i][0]+ 'px');
      $('#circle'+i).css('top',  circlePosition[i][1]+ 'px');
    }
    count++;
  }

  move =setInterval(function(){
    moveInterval();
  }, 10);
}

//ページ内遷移
$(function() {
  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});
