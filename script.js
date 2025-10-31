function showMessage() {
  alert("Welcome Abdul Samad EH! ?? Your first full website is working!");
}
// typing effect — multiple phrases
const phrases = [
  "I am Abdul Samad EH",
  "Learning Cybersecurity",
  "Building websites with HTML CSS JS",
  "Hacker-style portfolio"
];

const typedElem = document.getElementById('typed');
const typingDelay = 80;
const erasingDelay = 40;
const newPhraseDelay = 1200;
let phraseIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < phrases[phraseIndex].length) {
    typedElem.textContent += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newPhraseDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedElem.textContent = phrases[phraseIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, typingDelay + 200);
  }
}

// start when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
  if (phrases.length) setTimeout(type, 500);
});
