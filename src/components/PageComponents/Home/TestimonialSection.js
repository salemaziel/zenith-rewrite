import React from "react";
import TestimonialTitles from "./TestimDir/TestimonialTitles";
import TestimonialBox from "./TestimDir/TestimonialBox";
import TestimonialBoxInner from "./TestimDir/TestimonialBoxInner";

import { Container, Row } from 'reactstrap'


class TestimonialSection extends React.Component {
  render() {
    return (
      <section className="testmonial">
        <Container className="top-text">
          <Row>
            <div className="col-md-12">
              <TestimonialTitles></TestimonialTitles>
            </div>
            </Row>
        </Container>
        <div className="container-fluid">
          <Row className="justify-content-center">
            <div className="col-md-10 white-box testmonial-slider">
              <TestimonialBox></TestimonialBox>
             {/*} <TestimonialBox></TestimonialBox>
              <TestimonialBox></TestimonialBox>*/} 
              
            </div>
          </Row>
        </div>
      </section>
    );
  }
}

export default TestimonialSection;
