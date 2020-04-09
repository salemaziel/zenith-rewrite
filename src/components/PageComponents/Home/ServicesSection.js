import React from "react";
import ServicesTitles from "./ServicesDir/ServicesTitles";
import ServiceBoxesArea from "./ServicesDir/ServiceBoxesArea";

import { Container, Row } from 'reactstrap'


class ServicesSection extends React.Component {
  render() {
    return (
      <section className="service-offer">
        <Container className="service-offer">
          <Row>
            <div className="col-md-12">
              <ServicesTitles></ServicesTitles>
            </div>
          </Row>
        </Container>
        <ServiceBoxesArea></ServiceBoxesArea>
      </section>
    );
  }
}

export default ServicesSection;
