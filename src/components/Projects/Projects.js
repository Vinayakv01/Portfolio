import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import biscard from "../../Assets/Projects/biscard.PNG";
import urbandiners from "../../Assets/Projects/urbandiners.PNG";

function Projects(r) {
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
              imgPath={biscard}
              isBlog={false}
              title="Biscard"
              description="A seamlessly efficient NFC-powered profile sharing solution, built with React.js, Node.js, SQL, and Tailwind CSS, facilitating effortless user profile exchange."
              ghLink="https://github.com/Vinayakv01/NFCProfile.git"
              demoLink="https://www.biscard.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={urbandiners}
              isBlog={false}
              title="Urbandiners"
              description="A seamlessly efficient NFC-powered profile sharing solution, built with React.js, Node.js, SQL, and Tailwind CSS, facilitating effortless user profile exchange."
              ghLink="https://github.com/Vinayakv01/POS-Design.git"
              demoLink="https://testapp.urbandiners.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
