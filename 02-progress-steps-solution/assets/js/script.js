const steps = document.querySelectorAll('.step');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
let lastActiveIndex = 0;

[prevBtn, nextBtn].forEach(function(btn) {
  btn.addEventListener('click', function() {
    const direction = (btn.id == 'prevBtn') ? -1 : 1;

    if (!this.classList.contains('disabled')) {
      updateLastActiveIndex(direction);
      updateButtonState();
    }
  })
});

function updateLastActiveIndex(direction) {
  lastActiveIndex = lastActiveIndex + direction;
  
  if (direction == 1) {
    steps[lastActiveIndex].classList.add('active');
  } else {
    steps[lastActiveIndex + 1].classList.remove('active');
  }
}

function updateButtonState() {
  if (lastActiveIndex > 0) {
    prevBtn.classList.remove('disabled');
  } else {
    prevBtn.classList.add('disabled');
  }
  
  if (lastActiveIndex < steps.length - 1) {
    nextBtn.classList.remove('disabled');
  } else {
    nextBtn.classList.add('disabled');
  }
}