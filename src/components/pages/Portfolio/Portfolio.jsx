import React from "react";
import image1 from "../../../images/portfolio/project-01.jpg";
import image2 from "../../../images/portfolio/project-02.jpg";
import image3 from "../../../images/portfolio/project-03.jpg";
import image4 from "../../../images/portfolio/project-04.jpg";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "Space Bootstrap 5 Multipurpose Template",
    link: "https://demo.graygrids.com/themes/space/",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 2,
    image: image2,
    title: "eCommerce HTML Bootstrap 5 UI Kit",
    link: "https://ecommercehtml.com/",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 3,
    image: image3,
    title: "Basic – Tailwind CSS Template",
    link: "http://preview.graygrids.com/item/basic-tailwind-css-template/",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 4,
    image: image4,
    title: "Gearix Car repair App",
    link: "https://gearix.netlify.app/",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap px-4">
        {portfolioData.map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
