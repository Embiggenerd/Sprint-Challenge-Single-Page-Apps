import React from "react";
import { Container, Row, Col } from 'reactstrap';


export default function Header() {
  return (
    <Row className="ui centered">
      <Col sm="12" md={{ size: 6, offset: 3 }}><h1 className="ui center">Rick &amp; Morty Fan Page</h1></Col>
    </Row>
  );
}
