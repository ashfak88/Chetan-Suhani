document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('invitation-overlay');
  const openBtn = document.getElementById('open-invitation-btn');

  if (openBtn && overlay) {
    openBtn.addEventListener('click', () => {
      overlay.classList.remove('opacity-100');
      overlay.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 700);
    });
  }

  const revealElements = document.querySelectorAll('.reveal, .reveal-line');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach((el) => el.classList.add('reveal-visible'));
  }

  const checkInitialVisibility = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
        el.classList.add('reveal-visible');
      }
    });
  };
  checkInitialVisibility();
  window.addEventListener('scroll', checkInitialVisibility, { passive: true });

  // 3. Live Countdown Timer
  const targetDate = new Date('2026-09-23T00:00:00+05:30').getTime();
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minutesEl = document.getElementById('cd-minutes');
  const secondsEl = document.getElementById('cd-seconds');

  let prevSec = null;

  function updateCountdown() {
    const now = Date.now();
    const diff = targetDate - now;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (diff > 0) {
      days = Math.floor(diff / (1000 * 60 * 60 * 24));
      hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((diff / (1000 * 60)) % 60);
      seconds = Math.floor((diff / 1000) % 60);
    }

    const pad = (num) => String(num).padStart(2, '0');

    if (daysEl) daysEl.textContent = pad(days);
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minutesEl) minutesEl.textContent = pad(minutes);
    if (secondsEl) {
      const formattedSec = pad(seconds);
      if (prevSec !== formattedSec) {
        secondsEl.textContent = formattedSec;
        secondsEl.classList.remove('animate-tick');
        // trigger reflow to restart tick animation
        void secondsEl.offsetWidth;
        secondsEl.classList.add('animate-tick');
        prevSec = formattedSec;
      }
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});

