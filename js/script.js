document.addEventListener('DOMContentLoaded', function() {

const symbols = ['✕', '■', '▲', '●'];
const container = document.querySelector('.particle-container');

let intervalId = null;

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  const size = Math.random() * 20 + 15;
  particle.style.fontSize = `${size}px`;
  particle.style.left = `${Math.random() * 100}%`;

  const duration = 4 + Math.random() * 3;
  particle.style.animationDuration = `${duration}s`;

  container.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, duration * 1000);
}

function startParticles() {
  if (!intervalId) {
    intervalId = setInterval(createParticle, 300);
  }
}

function stopParticles() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function checkScroll() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.scrollHeight;

  if (scrollTop + windowHeight >= bodyHeight - 10) { // está en el final
    startParticles();
  } else {
    stopParticles();
  }
}

window.addEventListener('scroll', checkScroll); });