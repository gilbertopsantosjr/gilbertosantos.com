"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Slider from "react-slick";
import contactme from "../../public/assets/icons/contactme.png";
import project1 from "../../public/assets/project1.svg";
import project2 from "../../public/assets/project2.svg";
import project3 from "../../public/assets/project3.svg";

type ProjectItemProps = {
  image: StaticImport;
  title: string;
  descript: string;
  source: string;
  live: string;
};
function ProjectItem({
  image,
  title,
  descript,
  source,
  live,
}: ProjectItemProps) {
  return (
    <>
      <div className="portfolio-content grid swiper-slide">
        <Image src={image} alt="" className="portfolio-img" />

        <div className="portfolio-data">
          <h3 className="portfolio-title">{title}</h3>
          <p className="portfolio-description">{descript}</p>
          <a
            href={source}
            target="_blank"
            className="button button-flex button-small portfolio-button"
          >
            GitHub
            <i className="fa-solid fa-arrow-right button-icon"></i>
          </a>
          <a
            href={live}
            target="_blank"
            className="button button-flex button-small portfolio-button"
          >
            Live
            <i className="fa-solid fa-arrow-right button-icon"></i>
          </a>
        </div>
      </div>
    </>
  );
}

type ArrowType = {
  className?: any;
  style?: any;
  onClick?: any;
};
function SampleNextArrow(props: ArrowType) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        borderRadius: "10px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: ArrowType) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        borderRadius: "10px",
      }}
      onClick={onClick}
    />
  );
}
export default function Projects() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <section className="portfolio section" id="portfolio">
        <h2 className="section-title">Projects</h2>
        <span className="section-subtitle">Most recent work</span>
        <div className="portfolio-container container slider-container">
          <Slider {...settings}>
            <ProjectItem
              image={project1}
              title="Business Websites"
              descript="Dynamic business sites that reflect your brand and engage customers effectively."
              source="http://www.github.com/gilbertopsantosjr"
              live=""
            />
            <ProjectItem
              image={project2}
              title="Portfolio Websites"
              descript="Impressive portfolio sites that showcase your talents with a flawless user experience."
              source="http://www.github.com/gilbertopsantosjr"
              live=""
            />
            <ProjectItem
              image={project3}
              title="Landing Pages"
              descript="Compelling landing pages that drive conversions and engage your audience."
              source="http://www.github.com/gilbertopsantosjr"
              live=""
            />
          </Slider>
        </div>
      </section>

      <section className="project-contact section">
        <div className="project-bg">
          <div className="project-container container grid">
            <div className="project-data">
              <h2 className="project-title">Do you have a new project?</h2>
              <p className="project-description">
                Contact me now and get a 15% discount on your new project.
              </p>
              <a href="#contact" className="button button-flex button-white">
                Contact Me
                <i className="fa-regular fa-comment-dots project-icon button-icon"></i>
              </a>
            </div>
            <Image src={contactme} alt="" className="project-img" />
          </div>
        </div>
      </section>
    </>
  );
}
