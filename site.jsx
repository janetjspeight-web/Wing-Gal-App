// Wing Gal website — interactivity layer (mounted after all app-kit scripts).
(function () {
  const { useState, useEffect } = React;

  /* ---------- 1. Mount collage + utility icons into placeholders ---------- */
  function mountIcons() {
    document.querySelectorAll('[data-collage]').forEach((el) => {
      if (el.dataset.mounted) return;
      el.dataset.mounted = '1';
      const name = el.getAttribute('data-collage');
      const size = parseInt(el.getAttribute('data-size') || '64', 10);
      el.style.display = 'inline-flex';
      ReactDOM.createRoot(el).render(<CollageIcon name={name} size={size} />);
    });
    document.querySelectorAll('[data-ico]').forEach((el) => {
      if (el.dataset.mounted) return;
      el.dataset.mounted = '1';
      const name = el.getAttribute('data-ico');
      const size = parseInt(el.getAttribute('data-size') || '18', 10);
      const color = el.getAttribute('data-color') || '#F09457';
      el.style.display = 'inline-flex';
      el.style.flexShrink = '0';
      ReactDOM.createRoot(el).render(<Ico name={name} size={size} color={color} />);
    });
  }

  /* ---------- 2. Scroll reveal ---------- */
  function initReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  }

  /* ---------- 3. Hero direction switcher ---------- */
  function initHeroSwitch() {
    const NAMES = { a: 'Editorial split', b: 'Full-bleed image', c: 'Type-forward' };
    const sw = document.getElementById('hero-switch');
    const nameEl = document.getElementById('hero-name');
    sw.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        const h = btn.getAttribute('data-h');
        document.body.setAttribute('data-hero', h);
        sw.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b === btn));
        nameEl.textContent = NAMES[h];
        // re-mount any icons that were in a hidden panel + reveal them
        mountIcons();
        document.querySelectorAll('#hero-' + h + ' .reveal').forEach((el) => el.classList.add('in'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  /* ---------- 4. Working waitlist form ---------- */
  function initWaitlist() {
    const form = document.getElementById('wl-form');
    const email = document.getElementById('wl-email');
    const msg = document.getElementById('wl-msg');
    const success = document.getElementById('wl-success');
    const valid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    email.addEventListener('input', () => {
      email.classList.remove('err'); msg.classList.remove('error');
      msg.textContent = 'No spam. Just the moment we go live near you.';
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!valid(email.value.trim())) {
        email.classList.add('err');
        msg.classList.add('error');
        msg.textContent = 'Hmm, that email doesn\u2019t look right. Mind checking it?';
        email.focus();
        return;
      }
      form.style.display = 'none';
      msg.style.display = 'none';
      success.classList.add('show');
    });
  }

  /* ---------- 5. Embedded interactive app demo ---------- */
  const DEMO_SCREENS = [
    { id: 'onboarding', label: 'Onboarding' },
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'booking', label: 'Booking' },
    { id: 'session', label: 'Live session' },
    { id: 'chat', label: 'Chat' },
  ];

  function AppDemo() {
    const [screen, setScreen] = useState('home');
    const [wing, setWing] = useState(WING_WOMEN[0]);
    const controlsEl = document.getElementById('demo-controls');

    useEffect(() => {
      if (!controlsEl) return;
      controlsEl.innerHTML = '';
      DEMO_SCREENS.forEach((s) => {
        const b = document.createElement('button');
        b.textContent = s.label;
        b.className = s.id === screen ? 'on' : '';
        b.onclick = () => setScreen(s.id);
        controlsEl.appendChild(b);
      });
    }, [screen]);

    const go = (s) => setScreen(s);
    return (
      <PhoneFrame key={screen}>
        {screen === 'onboarding' && <ClientOnboarding onDone={() => go('home')} />}
        {screen === 'home' && <ClientHome onSelect={(w) => { setWing(w); go('profile'); }} onNav={(t) => go(t === 'chat' ? 'chat' : 'home')} />}
        {screen === 'profile' && <WingProfile wing={wing} onBack={() => go('home')} onBook={() => go('booking')} />}
        {screen === 'booking' && <BookingFlow wing={wing} onBack={() => go('profile')} onConfirm={() => go('session')} />}
        {screen === 'session' && <LiveSession wing={wing} onChat={() => go('chat')} onEnd={() => go('home')} />}
        {screen === 'chat' && <ChatScreen wing={wing} onBack={() => go('session')} />}
      </PhoneFrame>
    );
  }

  function scaleDemo() {
    // PhoneFrame is a fixed 380x780; scale the stable stage container so it fits narrow columns.
    const stage = document.getElementById('app-demo-stage');
    if (!stage) return;
    const colWidth = stage.parentElement.clientWidth;
    const scale = Math.min(1, colWidth / 380);
    stage.style.transformOrigin = 'top center';
    if (scale < 1) {
      stage.style.transform = `scale(${scale})`;
      stage.style.height = (780 * scale) + 'px';
      stage.style.width = '380px';
    } else {
      stage.style.transform = 'none';
      stage.style.height = 'auto';
      stage.style.width = '380px';
    }
  }

  /* ---------- init ---------- */
  function boot() {
    mountIcons();
    initReveal();
    initHeroSwitch();
    initWaitlist();
    const stage = document.getElementById('app-demo-stage');
    if (stage) {
      ReactDOM.createRoot(stage).render(<AppDemo />);
      setTimeout(scaleDemo, 120);
      window.addEventListener('resize', scaleDemo);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
