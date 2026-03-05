/* ═══════════════════════════════════════════════
   MAIN.JS — Portfolio Scripts
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    // ─────────────────────────────────────────────
    // 1. AOS (Animate On Scroll) Init
    // ─────────────────────────────────────────────
    AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
    });

    // ─────────────────────────────────────────────
    // 2. Typed.js — Hero Typing Effect
    // ─────────────────────────────────────────────
    new Typed('#typed-output', {
        strings: [
            'Back-End Developer',
            'C# &amp; .NET Specialist',
            'REST API Developer',
            'Database Architect',
            'Problem Solver',
            'Clean Code Advocate',
        ],
        typeSpeed: 55,
        backSpeed: 35,
        backDelay: 1800,
        startDelay: 600,
        loop: true,
        smartBackspace: true,
    });

    // ─────────────────────────────────────────────
    // 3. Navbar — Scroll Effect
    // ─────────────────────────────────────────────
    const navbar = document.getElementById('navbar');

    const handleNavbarScroll = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();

    // ─────────────────────────────────────────────
    // 4. Active Nav Link — Scroll Spy
    // ─────────────────────────────────────────────
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const activateLink = () => {
        const scrollPos = window.scrollY + 120;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    window.addEventListener('scroll', activateLink, { passive: true });

    // Close mobile nav on link click
    const navCollapse = document.getElementById('navMenu');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navCollapse)?.hide();
            }
        });
    });

    // ─────────────────────────────────────────────
    // 5. Back To Top Button
    // ─────────────────────────────────────────────
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ─────────────────────────────────────────────
    // 6. Hero Particles
    // ─────────────────────────────────────────────
    const particlesContainer = document.getElementById('heroParticles');
    const PARTICLE_COUNT = 30;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const particle = document.createElement('span');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${60 + Math.random() * 40}%`;
        particle.style.width = `${2 + Math.random() * 3}px`;
        particle.style.height = particle.style.width;
        particle.style.animationDuration = `${4 + Math.random() * 8}s`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particlesContainer.appendChild(particle);
    }

    // ─────────────────────────────────────────────
    // 7. Contact Form — UI Feedback
    // ─────────────────────────────────────────────
    const contactForm = document.getElementById('contactForm');
    const btnSend = document.getElementById('btnSend');
    const formAlert = document.getElementById('formAlert');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation
        if (!contactForm.checkValidity()) {
            contactForm.classList.add('was-validated');
            return;
        }

        // Show loading state
        const btnText = btnSend.querySelector('.btn-text');
        const btnLoading = btnSend.querySelector('.btn-loading');
        btnText.classList.add('d-none');
        btnLoading.classList.remove('d-none');
        btnSend.disabled = true;

        // Simulate sending (replace with actual API call)
        setTimeout(() => {
            btnText.classList.remove('d-none');
            btnLoading.classList.add('d-none');
            btnSend.disabled = false;

            formAlert.innerHTML = `
                <div class="alert alert-success d-flex align-items-center" role="alert" style="background: rgba(39, 201, 63, 0.1); border-color: rgba(39, 201, 63, 0.3); color: #27c93f;">
                    <i class="fas fa-check-circle me-2"></i>
                    <div>Message sent successfully! I'll get back to you soon.</div>
                </div>
            `;

            contactForm.reset();
            contactForm.classList.remove('was-validated');

            // Auto-dismiss after 5s
            setTimeout(() => {
                formAlert.innerHTML = '';
            }, 5000);
        }, 1500);
    });
});
