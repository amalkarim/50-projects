const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', function() {
    document.querySelector('.active')?.classList.remove('active');

    this.classList.add('active');
  })
})