const audio = new Audio('/audios/scorpion.mp3');

const konamiCode = ['ArrowLeft', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'ArrowRight', 'ArrowLeft', 'ArrowLeft', 'ArrowRight', 'ArrowRight'];
let konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
  const requiredKey = konamiCode[konamiCodePosition];
  if (e.key === requiredKey) {
    konamiCodePosition++;
    if (konamiCodePosition === konamiCode.length) {
      activateCheats();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

function activateCheats() {
  audio.play();
}
