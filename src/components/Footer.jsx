export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/images/PH_Residences_Logo.png" alt="Park Hyatt Residences" className="footer-logo-img" />
      </div>
      <p className="footer-copy">© 2026 SOMA Group. All rights reserved.</p>
      <nav className="footer-links">
        <a href="#hero" onClick={(e) => handleClick(e, '#hero')}>
          Overview
        </a>
        <a href="#images" onClick={(e) => handleClick(e, '#images')}>
          Gallery
        </a>
        <a href="#contact" onClick={(e) => handleClick(e, '#contact')}>
          Contact
        </a>
      </nav>
    </footer>
  );
}
