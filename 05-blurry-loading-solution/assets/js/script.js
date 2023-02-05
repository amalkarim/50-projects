const bg = document.querySelector('.bg');
const overlay = document.querySelector('.overlay');
let blurValue = 30;
const unblurStep = 0.3;
let percent = 0;

let unblur = setInterval(function() {
  if (blurValue <= 0) {
    bg.style.filter = 'blur(0)';
    clearInterval(unblur);
  }

  bg.style.filter = 'blur(' + blurValue + 'px)';
  blurValue = blurValue - unblurStep;
  overlay.textContent = percent++ + '%';
  overlay.style.opacity = (100 - percent) / 100;
}, 30);