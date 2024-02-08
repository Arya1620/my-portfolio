import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// import digiShop from '../../Assets/Projects/digi-shop.png'
// import devCommunity from '../../Assets/Projects/dev-comm.png'
// import crowdFunding from '../../Assets/Projects/crowd-funding.png'
// import blogger from '../../Assets/Projects/blogger.png'
// import simployee from '../../Assets/Projects/simployee.png'
// import insta_icon from '../../Assets/Projects/insta-icon.png'
// import shop_icon from '../../Assets/Projects/shop-icon.png'
import laptop_icon from '../../Assets/Projects/laptop_insta.png'
import laptop_com from '../../Assets/Projects/laptop-commerce.png'
import laptop_covid from '../../Assets/Projects/laptop-covid.png'
import laptop_excel from '../../Assets/Projects/laptop-excel.png'
import laptop_netflix from '../../Assets/Projects/laptop-netflix.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={laptop_icon}
              isBlog={false}
              title="Instagram-Clone"
              description="This social platform made with MERN stack. Easy to use and understand, simple UI with all the necessary features."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={laptop_com}
              isBlog={false}
              title="SHOPPER"
              description="An eCommerce website using React JS with home page, trending products, offer banner, newsletter subscription form and products page for men, women and kids category."
              ghLink="https://github.com/Arya1620/eCommerce"
              demoLink=""
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={laptop_covid}
              isBlog={false}
              title="Covid-Tracker"
              description="This Covid-19 Tracker which has the functionality of displaying data."
              ghLink="https://github.com/Arya1620/covid-live-tracker"
              demoLink="https://65c358aadeda13069e3df87b--covid-t-l.netlify.app/"              
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={laptop_excel}
              isBlog={false}
              title="Excel-Sheet-Upload"
              description="A web application where people can upload their excel sheets and also I have add the features like Login/Signup."
              ghLink="https://github.com/Arya1620/Base-Web"
              demoLink="https://65be6e035c84e5afc70451e8--clinquant-faun-4da257.netlify.app/"              
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={laptop_netflix}
              isBlog={false}
              title="Netflix-clone"
              description="This project is in progress and making clone with MERN Stack."
              ghLink="https://github.com/Arya1620/Netflix-GPT"
              demoLink=""              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
