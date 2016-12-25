setInterval(function(){
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
  function getMinOffset(){
    return Math.floor(Math.random() * 8);
  }
  var $smallGradContainer = $('#small-grad-container');
  for (var i = 0; i < 60; i++) {
    var $thisGrad = $('<div class="small-grad">');
    $thisGrad.css({
      'transform': 'rotate('+(6 * i)+'deg)'
    });
    $thisGrad.appendTo($smallGradContainer);
  }

  var minOffset = getMinOffset();

  var clockFunc = function(){
    var time = Math.floor(Date.now() / 1000);

    // 時差を補正
    time += (60 * 60 * 9);

    var second = time % 60;
    $('#second-hand').css({
      'transform':'rotate('+((360/60)*second)+'deg)'
    });

    var minute = (time + minOffset*60) % (60 * 60);
    $('#minute-hand').css({
      'transform':'rotate('+((360/(60*60))*minute)+'deg)'
    });

    var hour = time % (60 * 60 * 24);
    if(hour == 0){
      minOffset = getMinOffset();
    }
    $('#hour-hand').css({
      'transform':'rotate('+((360/(60*60*12))*hour)+'deg)'
    });
    $('#main').html( (new Date( (time+minOffset*60-(60*60*9)) * 1000 )).toLocaleString().replace(' ','<br>') );
    $('#unix').html( Math.floor(Date.now()/1000) );
  };
  setInterval(clockFunc, 200);
});
