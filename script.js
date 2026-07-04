    /* ── Navbar scroll shadow ── */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });

    /* ── Hamburger toggle ── */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      });
    });

    /* ── Active nav link on scroll ── */
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('#navLinks a');

    function updateActiveNav() {
      let current = '';
      sections.forEach(sec => {
        const sTop = sec.offsetTop - 100;
        if (window.scrollY >= sTop) current = sec.id;
      });
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    }
    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav();

    /* ── Intersection Observer — fade-in reveal ── */
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));

