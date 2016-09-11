setInterval(function(){
  document.getElementById('main').innerHTML = (new Date()).toLocaleString();
},200);
$(function(){
  // 目盛を初期化
  var $bigGradContainer = $('#big-grad-container');
  var $numberContainer = $('#numbers-container');
  for (var i = 0; i < 12; i++) {
    var $thisGrad = $('<div class="big-grad">');
    $thisGrad.css({
      'transform': 'rotate('+(30 * i)+'deg)'
    });
    $thisGrad.appendTo($bigGradContainer);
    var $thisNumner = $('<div class="number">');
    var $innerNumber = $('<div>');
    $thisNumner.css({
      'transform': 'rotate('+(30 * i)+'deg)'
    });
    $innerNumber.css({
      'transform': 'rotate(-'+(30 * i)+'deg)'
    });
    var nowNumber = (i > 0) ? (i) : (12);
    $innerNumber.text(nowNumber);
    $innerNumber.appendTo($thisNumner);
    $thisNumner.appendTo($numberContainer);
  }
  var $smallGradContainer = $('#small-grad-container');
  for (var i = 0; i < 60; i++) {
    var $thisGrad = $('<div class="small-grad">');
    $thisGrad.css({
      'transform': 'rotate('+(6 * i)+'deg)'
    });
    $thisGrad.appendTo($smallGradContainer);
  }

  var rotateCountScond = 0;
  var rotateCountMinute = 0;
  var rotateCountHour = 0;
  var clockFunc = function(){
    var time = Math.floor((new Date()).getTime() / 1000);
    // 時差を補正
  time += (60 * 60 * 9);

  var second = time % 60;
  if (second == 0) {
    rotateCountScond ++;
  }
  $('#second-hand').css({
    'transform':'rotate('+((360*rotateCountScond)+(360/60)*second)+'deg)'
  });

  var minute = time % (60 * 60);
  if (minute == 0) {
    rotateCountMinute ++;
  }
  $('#minute-hand').css({
    'transform':'rotate('+((360*rotateCountMinute)+((360/(60*60))*minute))+'deg)'
  });

  var hour = time % (60 * 60 * 24);
  if (hour == 0) {
    rotateCountHour ++;
  }
  $('#hour-hand').css({
    'transform':'rotate('+((360*rotateCountHour)+((360/(60*60*12))*hour))+'deg)'
  });
};
setInterval(clockFunc, 1000);
});
