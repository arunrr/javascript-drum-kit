function playAudio(evt) {
  const audio = this.document.querySelector(`audio[data-key="${evt.code}"]`);
  const key = this.document.querySelector(`.key[data-key="${evt.code}"]`);

  if (!audio) return;

  // Reset audio play
  audio.currentTime = 0;

  audio.play();

  key.classList.add("playing");
}

function removeTransition(evt) {
  // Skip all other properties
  if (evt.propertyName !== "transform") return;

  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  // transsitionend is an event triggered after a css transition is executed
  key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playAudio);
