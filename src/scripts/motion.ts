const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let initialized = false;
let parallaxStarted = false;

function formatCount(el: HTMLElement, value: number) {
  const prefix = el.dataset.prefix ?? '';
  const suffix = el.dataset.suffix ?? '';
  el.textContent = `${prefix}${value}${suffix}`;
}

export function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header || header.dataset.ready === 'true') return;

  header.dataset.ready = 'true';
  const toggle = header.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = header.querySelector<HTMLElement>('[data-mobile-menu]');
  const logoInk = header.querySelectorAll<SVGElement>('[data-logo-ink]');

  const applyTheme = () => {
    const probeY = Math.round(header.getBoundingClientRect().height / 2);
    let theme: 'dark' | 'light' = 'light';

    document.querySelectorAll<HTMLElement>('[data-nav]').forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= probeY && rect.bottom >= probeY) {
        theme = section.dataset.nav === 'dark' ? 'dark' : 'light';
      }
    });

    const onDark = theme === 'dark';
    header.classList.toggle('on-dark', onDark);
    header.classList.toggle('on-light', !onDark);
    logoInk.forEach((node) => node.setAttribute('stroke', onDark ? '#fff' : '#141519'));
  };

  const closeMenu = () => {
    header.classList.remove('menu-open');
    toggle?.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
  };

  toggle?.addEventListener('click', () => {
    const open = !header.classList.contains('menu-open');
    header.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.documentElement.style.overflow = open ? 'hidden' : '';
  });

  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('scroll', applyTheme, { passive: true });
  window.addEventListener('resize', applyTheme);
  applyTheme();
}

export function initReveals() {
  if (reducedMotion()) {
    document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => el.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });

  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => observer.observe(el));
}

export function initCounters() {
  const counters = document.querySelectorAll<HTMLElement>('[data-count]');

  if (reducedMotion()) {
    counters.forEach((el) => formatCount(el, Number(el.dataset.count ?? 0)));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);

      const el = entry.target as HTMLElement;
      const end = Number(el.dataset.count ?? 0);
      const started = performance.now();
      const duration = 1100;

      const tick = (time: number) => {
        const progress = Math.min(1, (time - started) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        formatCount(el, Math.round(end * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    });
  }, { threshold: .6 });

  counters.forEach((el) => observer.observe(el));
}

export function initParallax() {
  if (reducedMotion() || parallaxStarted) return;
  parallaxStarted = true;

  const items = [...document.querySelectorAll<HTMLElement>('[data-plx]')];
  if (!items.length) return;
  let scheduled = false;

  const update = () => {
    scheduled = false;
    const viewportHeight = window.innerHeight;

    items.forEach((el) => {
      const container = el.parentElement;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      const centerOffset = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
      const intensity = Number(el.dataset.plx ?? 0);
      el.style.transform = `translateY(${(-centerOffset * intensity * 100).toFixed(2)}px)`;
    });
  };

  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  schedule();
}

function initPointClouds() {
  if (reducedMotion()) return;

  document.querySelectorAll<HTMLCanvasElement>('[data-point-cloud]').forEach((canvas) => {
    if (canvas.dataset.ready === 'true') return;
    canvas.dataset.ready = 'true';

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const points: Array<{ x: number; y: number; z: number }> = [];
    const box = (cx: number, cy: number, cz: number, sx: number, sy: number, sz: number, step: number) => {
      for (let x = -sx; x <= sx; x += step) {
        for (let y = -sy; y <= sy; y += step) {
          for (let z = -sz; z <= sz; z += step) {
            const edgeX = Math.abs(Math.abs(x) - sx) < 1e-6;
            const edgeY = Math.abs(Math.abs(y) - sy) < 1e-6;
            const edgeZ = Math.abs(Math.abs(z) - sz) < 1e-6;
            if ((edgeX ? 1 : 0) + (edgeY ? 1 : 0) + (edgeZ ? 1 : 0) >= 2 || (edgeY && y === sy)) {
              points.push({ x: cx + x, y: cy + y, z: cz + z });
            }
          }
        }
      }
    };

    box(0, 62, 0, 95, 10, 70, 13);
    box(-38, 12, -14, 34, 38, 34, 12);
    box(40, 22, 10, 32, 28, 30, 12);
    box(18, -28, -20, 26, 22, 26, 12);

    let time = 0;
    let raf = 0;
    let running = false;

    const draw = () => {
      running = true;
      time += .0032;

      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const cr = Math.cos(time);
      const sr = Math.sin(time);
      const ct = Math.cos(-.32);
      const st = Math.sin(-.32);
      const scanY = Math.sin(time * 2.1) * 95;
      const projected: Array<{ sx: number; sy: number; z: number; near: boolean }> = [];

      points.forEach((point) => {
        const x = point.x * cr - point.z * sr;
        const z = point.x * sr + point.z * cr;
        const y2 = point.y * ct - z * st;
        const z2 = point.y * st + z * ct;
        const factor = 430 / (430 + z2);

        projected.push({
          sx: width / 2 + x * factor * 2,
          sy: height / 2 + y2 * factor * 2 - 20,
          z: z2,
          near: Math.abs(point.y - scanY) < 11,
        });
      });

      projected.sort((a, b) => b.z - a.z);

      projected.forEach((point) => {
        const depth = Math.max(.25, Math.min(1, (200 - point.z) / 260));
        ctx.fillStyle = point.near ? `rgba(95,212,232,${.95 * depth})` : `rgba(70,190,212,${.5 * depth})`;
        ctx.beginPath();
        ctx.arc(point.sx, point.sy, (point.near ? 2.6 : 1.7) * depth, 0, 7);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !running) draw();
        if (!entry.isIntersecting) stop();
      });
    }, { threshold: .05 }).observe(canvas);
  });
}

export function initV4Parallax() {
  if (reducedMotion()) return;

  const ghost = document.querySelector<HTMLElement>('[data-ghost]');
  const float = document.querySelector<HTMLElement>('[data-float]');
  if (!ghost && !float) return;

  let pending = false;

  const update = () => {
    pending = false;
    const viewportHeight = window.innerHeight;

    if (ghost && ghost.parentElement) {
      const rect = ghost.parentElement.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < viewportHeight) {
        const center = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        ghost.style.transform = `translate(calc(-50% + ${(-center * 60).toFixed(1)}px), -50%)`;
      }
    }

    if (float) {
      const rect = float.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < viewportHeight) {
        const center = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        float.style.transform = `translateY(${(center * 36).toFixed(1)}px)`;
      }
    }
  };

  window.addEventListener('scroll', () => {
    if (!pending) {
      pending = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
}

export function init() {
  initHeader();
  if (initialized) return;
  initialized = true;
  initReveals();
  initCounters();
  initParallax();
  initV4Parallax();
  initPointClouds();
}
