import React from "react";
import { Container, Row, Col, Card, CardImg } from 'reactstrap';

export default function WelcomePage() {
  return (
    <Row className="welcome-page">
      <Col sm="12" md={{ size: 6, offset: 3 }}><h2>Welcome to the ultimate fan site!</h2></Col>
      <Col md={{ size: 6, offset: 3 }}>
        <Card>
          <CardImg
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </Card>
      </Col>

    </Row>
  );
}
