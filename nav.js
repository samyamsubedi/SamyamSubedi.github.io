(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  /* Navigation bar at the top of website */
  const links = [
    { href: 'index.html',       label: 'Home' },
    { href: 'about.html',       label: 'About' },
    { href: 'education.html',   label: 'Education' },
    { href: 'projects.html',    label: 'Projects' },
    { href: 'activities.html',  label: 'Activities' },
    { href: 'contact.html',     label: 'Contact' },
  ];

  const navHTML = `
    <nav>
      <a class="nav-logo" href="index.html">Samyam Subedi</a>
      <ul class="nav-links" id="navLinks">
        ${links.map(l => `
          <li><a href="${l.href}" class="${currentPage === l.href ? 'active' : ''}">${l.label}</a></li>
        `).join('')}
      </ul>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `;

  /*External Links to Contacts/Socials */

  const footerHTML = `
    <footer>
      <p>&copy; ${new Date().getFullYear()} Samyam Subedi &mdash; Law &amp; Cybersecurity</p>
      <div class="footer-links">
        <a href="https://www.linkedin.com/in/samyam-subedi-68003238a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/samyamsubedi" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="contact.html">Contact</a>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // mobile toggle -- Note: has not been tested as of yet but should be optimised to some degree
  document.getElementById('navToggle').addEventListener('click', function () {
    document.getElementById('navLinks').classList.toggle('open');
  });

  // scroll-based nav shadow
  window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 40) {
      nav.style.boxShadow = '0 4px 40px rgba(0,0,0,0.5)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });
})();
