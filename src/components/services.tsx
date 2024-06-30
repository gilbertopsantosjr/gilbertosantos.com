export default function Services() {
  return (
    <>
      <section className="services section" id="services">
        <h2 className="section-title">Services</h2>
        <span className="section-subtitle">What I offer</span>

        <div className="services-container container grid">
          <div className="services-content">
            <div>
              <i className="fa-solid fa-code services-icon"></i>

              <h3 className="services-title">
                Frontend <br />
                Developer
              </h3>
            </div>
            <span className="button button-flex button-small button-link services-button">
              View more
              <i className="fa-solid fa-arrow-right button-icon"></i>
            </span>

            <div className="services-box">
              <div className="services-box-content">
                <h4 className="services-box-title">
                  Frontend <br />
                  Developer
                </h4>
                <i className="fa-solid fa-xmark services-box-close"></i>

                <ul className="services-box-services grid">
                  <li className="services-box-list">
                    <i className="fa-regular fa-circle-check services-list-icon"></i>
                    <p>Responsive Web Design</p>
                  </li>
                  <li className="services-box-list">
                    <i className="fa-regular fa-circle-check services-list-icon"></i>
                    <p>Interactive User Interfaces</p>
                  </li>
                  <li className="services-box-list">
                    <i className="fa-regular fa-circle-check services-list-icon"></i>
                    <p>SEO-Friendly Implementations</p>
                  </li>
                  <li className="services-box-list">
                    <i className="fa-regular fa-circle-check services-list-icon"></i>
                    <p>Accessibility and UX Enhancement</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services-content">
            <div>
              <i className="fa-brands fa-uikit services-icon"></i>
              <h3 className="services-title">
                Ui/Ux <br />
                Designer
              </h3>
            </div>
            <span className="button button-flex button-small button-link services-button">
              View more
              <i className="fa-solid fa-arrow-right button-icon"></i>
            </span>

            <div className="services-box">
              <div className="services-box-content">
                <h4 className="services-box-title">
                  Ui/Ux <br />
                  Designer
                </h4>
                <i className="fa-solid fa-xmark services-box-close"></i>

                <ul className="services-box-services grid">
                  <li className="services-box-list">
                    <i className="fa-regular fa-circle-check services-list-icon"></i>
                    <p>Intuitive User Interface Design</p>
                  </li>
                  <li className="services-box-list">
                    <i className="fa-regular fa-circle-check services-list-icon"></i>
                    <p>Responsive and Mobile-First Design</p>
                  </li>
                  <li className="services-box-list">
                    <i className="fa-regular fa-circle-check services-list-icon"></i>
                    <p>Seamless User Experience Optimization</p>
                  </li>
                  <li className="services-box-list">
                    <i className="fa-regular fa-circle-check services-list-icon"></i>
                    <p>Accessibility and Usability Enhancements</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services-content">
            <div>
              <i className="fa-solid fa-hashtag services-icon"></i>
              <h3 className="services-title">
                Content
                <br />
                Creation
              </h3>
            </div>
            <span className="button button-flex button-small button-link services-button">
              View more
              <i className="fa-solid fa-arrow-right button-icon"></i>
            </span>

            <div className="services-box">
              <div className="services-box-content">
                <h4 className="services-box-title">
                  Content <br />
                  Creation
                </h4>
                <i className="fa-solid fa-xmark services-box-close"></i>

                <ul className="services-box-services grid">
                  <li className="services-box-list">
                    <i className="fa-regular fa-circle-check services-list-icon"></i>
                    <p>Engaging Visual Content</p>
                  </li>
                  <li className="services-box-list">
                    <i className="fa-regular fa-circle-check services-list-icon"></i>
                    <p>Social Media Management</p>
                  </li>
                  <li className="services-box-list">
                    <i className="fa-regular fa-circle-check services-list-icon"></i>
                    <p>Content Strategy Consulting</p>
                  </li>
                  <li className="services-box-list">
                    <i className="fa-regular fa-circle-check services-list-icon"></i>
                    <p>Brand Development and Growth</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
