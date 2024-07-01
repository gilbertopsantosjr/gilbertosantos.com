import Image from "next/image";
import oracle_core from "../../public/assets/Oracle-Certification-badge_OC-CertifiedExpert.8c5eb31a07c3d8b45548.png";
import oracle_web from "../../public/assets/Oracle-Certification-badge_OC-Professional600X600.7adb318ed4389f9d0f45.png";
import aws from "../../public/assets/aws-certified-solutions-architect-associate.dfcb89e7438e2c6c5e7c.png";
import aboutimg from "../../public/assets/icons/aboutimg.png";
export default function About() {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section-title">About Me</h2>
        <span className="section-subtitle">My Introduction</span>

        <div className="about-container container grid">
          <Image src={aboutimg} alt="" className="about-img" />

          <div className="about-data">
            <p className="about-description">
              <ul>
                <li>
                  I’m leading a development team, designing and maintaining
                  microservices and serverless functions. Built & deployed
                  blazing-fast serverless apps using event-driven architecture
                  for scalable solutions.
                </li>
                <li>
                  Mentor juniors through the company knowledge academy,
                  fostering excellence
                </li>
                <li>
                  Champion clean & efficient code: Utilize reusable modules, and
                  implement caching with Redis, and TDD.
                </li>
                <li>
                  Facilitate weekly meetings on tech advancement & scrum
                  refinement
                </li>
              </ul>
            </p>

            <div className="about-info">
              <div>
                <span className="about-info-title">17+</span>
                <span className="about-info-name">
                  Years <br /> experience
                </span>
              </div>
              <div>
                <span className="about-info-title">20+</span>
                <span className="about-info-name">
                  Completed <br /> project
                </span>
              </div>
              <div>
                <span className="about-info-title">09+</span>

                <span className="about-info-name">
                  Companies <br />
                  worked
                </span>
              </div>
            </div>

            <div className="about-info">
              <div>
                <span className="about-info-name">
                  <a
                    target="_blank"
                    href="https://www.credly.com/badges/e5119e33-ee64-4162-8d71-670fad592c69/public_url"
                  >
                    <Image src={aws} alt="AWS Certification" className="about-img" />
                  </a>
                </span>
              </div>
              <div>
                <span className="about-info-name">
                  <a
                    target="_blank"
                    href="https://www.credly.com/badges/bb425077-e850-497b-8fa2-f1f8460a96eb/public_url"
                  >
                    <Image src={oracle_core} alt="Oracle Certification" className="about-img" />
                  </a>
                </span>
              </div>
              <div>
                <span className="about-info-name">
                  <a
                    target="_blank"
                    href="https://www.credly.com/badges/bfcf50d7-9822-4ead-a3eb-b6475a598f5e/public_url"
                  >
                    <Image src={oracle_web} alt="Oracle Certification" className="about-img" />
                  </a>
                </span>
              </div>
            </div>

            <div className="about-buttons">
              <a
                download=""
                href="/assets/cv-gilbertosantos.pdf"
                className="button button-flex"
              >
                Download Resume
                <i className="fa-solid fa-file-arrow-down button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
