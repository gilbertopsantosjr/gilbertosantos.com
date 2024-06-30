/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import testimonial1 from "../../public/assets/icons/testimonial1.jpeg";
import testimonial2 from "../../public/assets/icons/testimonial2.jpeg";
import testimonial3 from "../../public/assets/icons/testimonial3.jpeg";

export default function Testimonial() {
  return (
    <>
      <section className="testimonial section">
        <h2 className="section-title">Testimonial</h2>
        <span className="section-subtitle">My Client saying</span>

        <div className="testimonial-container container swiper-container">
          <div className="swiper-wrapper">
            <div className="testimonial-content swiper-slide">
              <div className="testimonial-data">
                <div className="testimonial-header">
                  <Image
                    src={testimonial1}
                    alt=""
                    className="testimonial-img"
                  />

                  <div>
                    <h3 className="testimonial-name">Davi Jesus</h3>
                    <span className="testimonial-client">Client</span>
                  </div>
                </div>

                <div>
                  <i className="fa-regular fa-star testimonial-icon"></i>
                  <i className="fa-regular fa-star testimonial-icon"></i>
                  <i className="fa-regular fa-star testimonial-icon"></i>
                  <i className="fa-regular fa-star testimonial-icon"></i>
                  <i className="fa-regular fa-star testimonial-icon"></i>
                </div>
              </div>
              <p className="testimonial-description">
                With great pleasure, I recommend instructor Gilberto Santos for
                any software development course. I had the opportunity to be his
                student in three courses offered by FINALTEC Sistemas e
                Inovações in 2012: Development with JBoss Seam Framework, Java
                Persistence with Hibernate, and Spring Framework. Throughout all
                the courses, Gilberto demonstrated profound knowledge and
                experience in the taught technologies. He is an excellent
                communicator and manages to convey the content clearly and
                objectively. In addition, he is a very patient and dedicated
                instructor, always willing to assist students. The knowledge
                acquired in Gilberto's courses was crucial for my professional
                career. He helped me develop the necessary skills to work as a
                programmer in the Secretariat of Information Technology and
                Communication of the Court of Justice of the State of Rondônia
                in Brazil.!
              </p>
            </div>

            <div className="testimonial-content swiper-slide">
              <div className="testimonial-data">
                <div className="testimonial-header">
                  <Image
                    src={testimonial2}
                    alt=""
                    className="testimonial-img"
                  />

                  <div>
                    <h3 className="testimonial-name">David Howick</h3>
                    <span className="testimonial-client">
                      Work in the same project
                    </span>
                  </div>
                </div>

                <div>
                  <i className="fa-regular fa-star testimonial-icon"></i>
                  <i className="fa-regular fa-star testimonial-icon"></i>
                  <i className="fa-regular fa-star testimonial-icon"></i>
                  <i className="fa-regular fa-star testimonial-icon"></i>
                  <i className="fa-regular fa-star testimonial-icon"></i>
                </div>
              </div>
              <p className="testimonial-description">
                I worked with Gilberto in the data analytics team in Citi.
                Gilberto is an efficient developer who, with his years of
                experience, provides valuable solutions to the wider pursuit of
                a development project. Recently, I was inspired to leave this
                recommendation after observing how Gilberto migrated the large
                enterprise java project, used by our team at Citi, from being
                built with Maven, to being built with Gradle. The benefits of
                the migration when presented, were widely embraced by the team
                as it reduced the applications build time from approx. 5 mins to
                just over 1 min. Gilberto made the transition for the team a
                smooth process also, by providing documentation to aid the
                developers when making the switch to Gradle. It took me roughly
                15 mins to get set up with Gradle; building the application on
                my local machine. I admired how Gilberto orchestrated the team
                through this transition period.
              </p>
            </div>

            <div className="testimonial-content swiper-slide">
              <div className="testimonial-data">
                <div className="testimonial-header">
                  <Image
                    src={testimonial3}
                    alt=""
                    className="testimonial-img"
                  />

                  <div>
                    <h3 className="testimonial-name">Alan Bothwell</h3>
                    <span className="testimonial-client">Client</span>
                  </div>
                </div>

                <div>
                  <i className="fa-regular fa-star testimonial-icon"></i>
                  <i className="fa-regular fa-star testimonial-icon"></i>
                  <i className="fa-regular fa-star testimonial-icon"></i>
                  <i className="fa-regular fa-star testimonial-icon"></i>
                  <i className="fa-regular fa-star testimonial-icon"></i>
                </div>
              </div>
              <p className="testimonial-description">
                Gilberto worked in Suntico as a developer and is a highly
                skilled programmer. In the short time he worked with us he was
                able to master a complex task and turn around results quickly
                and efficiently. He is a self starter and is someone who
                naturally assumes leadership and ownership..
              </p>
            </div>
          </div>

          <div className="swiper-pagination swiper-pagination-testimonial"></div>
        </div>
      </section>
    </>
  );
}
