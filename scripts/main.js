$(document).ready(function() {

  const $1 = $('#1');
  const $2 = $('#2');
  const $3 = $('#3');
  const $4 = $('#4');
  const $5 = $('#5');
  const $6 = $('#6');
  const $7 = $('#7');
  const $8 = $('#8');
  const $9 = $('#9');

  const posArr = [$1, $2, $3, $4, $5, $6, $7, $8, $9];
  const colorArr = ['red', 'blue', 'green', 'yellow', 'purple', 'black', 'pink', 'orange', 'gray', 'navy'];

  const genRandNum = num => {
    return Math.floor(Math.random() * num );
  }

  let square, color, rand9, rand10, lastColor1, lastColor2, lastPos1, lastPos2;

  const $locationBtn = $('#location-btn');
  const $colorBtn = $('#color-btn');

  console.log(  );

  setInterval(function() {

    if ($locationBtn.prop('disabled')) {
      $locationBtn.prop('disabled', false);
    }
    if ($colorBtn.prop('disabled')) {
      $colorBtn.prop('disabled', false);
    }

    if(square) {
      square.css('background-color', '#e8e8e8');
    }

    lastColor2 = lastColor1;
    lastColor1 = color;
    lastPos2 = lastPos1;
    lastPos1 = square;

    rand9 = genRandNum(9);
    rand10 = genRandNum(10);
    square = posArr[rand9];
    color = colorArr[rand10]
    square.css('background-color', color);

  }, 2500);


  $locationBtn.on('click', function() {
    if(square == lastPos2 && typeof lastPos2 !== 'undefined') {
      console.log('success');
    } else {
      console.log('wrong');
    }
    $(this).prop('disabled', true);
  });

  $colorBtn.on('click', function() {
    if(color == lastColor2 && typeof lastColor2 !== 'undefined') {
      console.log('color success');
    } else {
      console.log('wrong');
    }
    $(this).prop('disabled', true);
    $(this).addClass('disabled');
  });

});
