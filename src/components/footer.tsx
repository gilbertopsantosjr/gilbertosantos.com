export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-bg">
          <div className="footer-container container grid">
            <div>
              <h1 className="footer-title">Gilberto Santos</h1>
              <span className="footer-subtitle">
                Full Stack Software Engineer
              </span>
            </div>
            <ul className="footer-links">
              <li>
                <a href="#services" className="footer-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer-link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>

            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/in/gilbertopsantosjr/"
                target="_blank"
                className="footer-social"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/gilbertopsantosjr"
                target="_blank"
                className="footer-social"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/gilbertosantos.global/"
                target="_blank"
                className="footer-social"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <p className="footer-copy">By Gilberto Santos</p>
        </div>
      </footer>
    </>
  );
}
