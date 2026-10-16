const audio = new Audio('/audios/scorpion.mp3');
audio.addEventListener('ended', () => {
  window.location.replace("https://theuselessweb.com/")
})

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

function toggleDetails(panelId) {
  const panel = document.getElementById(panelId);
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
    // Hace un scroll suave hacia el panel expandido
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function toggleLyric(lyricId) {
  const lyric = document.getElementById(lyricId);
  if (lyric.style.display === "block") {
    lyric.style.display = "none";
  } else {
    lyric.style.display = "block";
  }
}