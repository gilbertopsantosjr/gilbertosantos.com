export default function Contacts() {
  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section-title">Contact me</h2>
        <span className="section-subtitle">Get in touch</span>

        <div className="contact-container container grid">
          <div>
            <div className="contact-info">
              <i className="fa-regular fa-envelope contact-icon"></i>
              <div>
                <h3 className="contact-title">Email</h3>
                <a
                  href="mailto:chat@gilbertosantos.com"
                  target="_blank"
                  className="contact-subtitle"
                >
                  chat@gilbertosantos.com
                </a>
              </div>
            </div>
            <div className="contact-info">
              <i className="fa-brands fa-linkedin-in contact-icon"></i>
              <div>
                <h3 className="contact-title">Linkedin</h3>
                <a
                  className="contact-subtitle"
                  href="https://www.linkedin.com/in/gilbertopsantosjr/"
                  target="_blank"
                >
                  @gilbertopsantosjr
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
