(() => {
  'use strict';

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header scroll state ---------- */
  const header = document.getElementById('site-header');
  const onScroll = () => {
    if (window.scrollY > 12) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      mainNav.classList.remove('open');
    });
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- Animated stat counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  counters.forEach((el) => counterObserver.observe(el));

  /* ---------- Contact form (front-end only demo) ---------- */
  const form = document.getElementById('contact-form');
  const formNote = document.getElementById('form-note');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      formNote.textContent = 'Thanks — your message has been noted. We\'ll be in touch shortly.';
      form.reset();
    });
  }

  /* ---------- Particle network background ---------- */
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let width, height, particles;
  const PARTICLE_COUNT = 70;
  const LINK_DIST = 130;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const accentHex = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
  const accentRGB = accentHex.replace('#', '').match(/.{1,2}/g).map((h) => parseInt(h, 16)).join(', ');

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function initParticles() {
    particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          ctx.strokeStyle = `rgba(${accentRGB}, ${0.09 * (1 - dist / LINK_DIST)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${accentRGB}, 0.45)`;
      ctx.fill();
    });

    if (!prefersReducedMotion) requestAnimationFrame(tick);
  }

  resize();
  initParticles();
  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });

  if (!prefersReducedMotion) {
    requestAnimationFrame(tick);
  }
})();
