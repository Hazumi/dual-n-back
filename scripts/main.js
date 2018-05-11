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
  const $correct = $('#correct');
  const $incorrect = $('#incorrect');
  const $totalPlacements = $('#total-placements');
  const $missedPosition = $('#missed-position');
  const $missedColor = $('#missed-color');
  const $locationBtn = $('#location-btn');
  const $colorBtn = $('#color-btn');

  const $newGameBtn = $('#new-game-btn');
  const posArr = [$1, $2, $3, $4, $5, $6, $7, $8, $9];
  const colorArr = ['red', 'blue', 'green', 'yellow', 'purple', 'black', 'pink', 'orange', 'gray', 'navy'];
  let total = 0;
  let correct = 0;
  let incorrect = 0;
  let missedPos = 0;
  let missedColor = 0;
  let square, color, rand9, rand10, lastColor1, lastColor2, lastColor3, lastPos1, lastPos2, lastPos3;
  let positionClicked;
  let colorClicked;
  let numPlacements = 0;
  let maxPlacements = 40;
  let gameOver = false;

  const genRandNum = num => {
    return Math.floor(Math.random() * num );
  }

  function gameEnd() {
    square.css('background-color', '#e8e8e8');
    gameOver = true;
  }

  if(!gameOver) {
    setInterval(function() {
      if(numPlacements < maxPlacements) {
        if(square == lastPos3 && typeof lastPos3 !== 'undefined' && locationClicked === false) {
          missedPos++;
          $missedPosition.text(missedPos);
        }
        if(color == lastColor3 && typeof lastColor3 !== 'undefined' && colorClicked === false) {
          missedColor++;
          $missedColor.text(missedColor);
        }

        locationClicked = false;
        colorClicked = false;

        if ($locationBtn.prop('disabled')) {
          $locationBtn.prop('disabled', false);
        }
        if ($colorBtn.prop('disabled')) {
          $colorBtn.prop('disabled', false);
        }

        if(square) {
          square.css('background-color', '#e8e8e8');
        }

        lastColor3 = lastColor2;
        lastColor2 = lastColor1;
        lastColor1 = color;

        lastPos3 = lastPos2;
        lastPos2 = lastPos1;
        lastPos1 = square;

        rand9 = genRandNum(9);
        rand10 = genRandNum(10);
        square = posArr[rand9];
        color = colorArr[rand10]
        square.css('background-color', color);

        total++;
        $totalPlacements.text(total);

        numPlacements++;
      } else {
        gameEnd();
      }
    }, 2500);
  }

  const updateCorrect = () => {
    correct++;
    $correct.text(correct);
  }

  const updateIncorrect = () => {
    incorrect++;
    $incorrect.text(incorrect);
  }

  $newGameBtn.on('click', function() {
    gameOver = false;
    numPlacements = 0;
    total = 0;
    correct = 0;
    incorrect = 0;
    missedPos = 0;
    missedColor = 0;
    $missedPosition.text(missedPos);
    $missedColor.text(missedColor);
    $totalPlacements.text(total);
    $correct.text(correct);
    $incorrect.text(incorrect);
  });

  $locationBtn.on('click', function() {
    locationClicked = true;
    if(square == lastPos2 && typeof lastPos2 !== 'undefined') {
      updateCorrect();
    } else {
      updateIncorrect();
    }
    $(this).prop('disabled', true);
  });

  $colorBtn.on('click', function() {
    colorClicked = true;
    if(color == lastColor2 && typeof lastColor2 !== 'undefined') {
      updateCorrect();
    } else {
      updateIncorrect();
    }
    $(this).prop('disabled', true);
    $(this).addClass('disabled');
  });

});
