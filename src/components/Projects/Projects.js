import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blood from "../../Assets/Projects/blood-donation.png"
import Restaurant from"../../Assets/Projects/RestaurantReservation.png"
import resumemaker from"../../Assets/Projects/resumemaker.png"
import geminiclone from"../../Assets/Projects/geminiclone.png"
import forever_01 from"../../Assets/Projects/forever.png"

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



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forever_01}
              isBlog={false}
              title="Forever-E-commerce"
              description="A scalable MERN stack e-commerce platform featuring product search,secure checkout,and responsive design.Integrated payment gateway and optimized for performance to ensure a seamless shopping experience."
              ghLink="https://github.com/nagasaiayyala/clone-forever"
              demoLink="https://clone-forever-psi.vercel.app"
            />
          </Col>

         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blood}
              isBlog={false}
              title="Blood-Donation-System"
              description="A full stack web application that connects blood donors with recipients through an OTP-based sign-up/login system.Includes request management,donor history tracking,live chat and a user-friendly dashboard."
              ghLink="https://github.com/nagasaiayyala/Blood-Donation-System"
              demoLink="https://blood-donation-system-theta.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumemaker}
              isBlog={false}
              title="Resume-Maker"
              description="An interactive web tool to create ATS-friendly resumes with live preview functionality.Allows customization of sections,styles,and export in multiple formats for job applications."
              ghLink="https://github.com/nagasaiayyala/ResumeMaker"
              demoLink="https://resume-maker-eta-virid.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Restaurant}
              isBlog={false}
              title="Restaurant-Reservation"
              description="Built a full-stack MERN application for seamless online food ordering and table reservations.Integrated secure MongoDB status,and a responsive, user-friendly interface for customers and administrators."
              ghLink="https://github.com/nagasaiayyala/RestaurantReservation"
              demoLink="https://restaurant-reservation-tau.vercel.app"
            />
          </Col>

    

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geminiclone}
              isBlog={false}
              title="Gemini-Clone"
              description="Developed a modern,responsive Gemini-inspired web application using React and Tailwind CSS.Implemented sleek UI components,smooth animations,and an intuitive layout for an engaging user experience."
              ghLink="https://github.com/nagasaiayyala/GeminiClone"
              demoLink="https://gemini-clone-sable-alpha.vercel.app"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
