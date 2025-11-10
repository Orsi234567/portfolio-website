document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.theme-btn');
    if (button) {
        button.addEventListener('click', function() {
            document.body.classList.toggle('alt-bg');
            const isAlt = document.body.classList.contains('alt-bg');
            button.textContent = isAlt ? 'Toggle Default Beige' : 'Toggle Warm Beige';
        });
    }

    // Smooth scroll for in-page nav links
    const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Active nav highlighting using IntersectionObserver
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            const id = entry.target.getAttribute('id');
            const link = document.querySelector('.site-nav a[href="#' + id + '"]');
            if (link) {
                if (entry.isIntersecting) {
                    document.querySelectorAll('.site-nav a').forEach(function(a) { a.classList.remove('active'); });
                    link.classList.add('active');
                }
            }
        });
    }, { rootMargin: '0px 0px -60% 0px', threshold: 0.3 });

    sections.forEach(function(sec) { observer.observe(sec); });
});
