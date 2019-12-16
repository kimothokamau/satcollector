import React from 'react';
import { Container, Spinner } from 'reactstrap';

const AboutPage = (props) => {
  return (
      <Container className="themed-container" fluid={true}>
          <h3> Coming Soon </h3>
          <div>
            <Spinner type="grow" color="primary" />
            <Spinner type="grow" color="secondary" />
            <Spinner type="grow" color="success" />
            <Spinner type="grow" color="danger" />
            <Spinner type="grow" color="warning" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="light" />
            <Spinner type="grow" color="dark" />
         </div>

      </Container>
    
  );
}

export default AboutPage;