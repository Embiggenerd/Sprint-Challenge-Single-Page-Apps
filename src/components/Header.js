import React from "react";
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <Row className="ui centered">
      <Col sm="12" md={{ size: 6, offset: 3 }}><h1 className="ui center">Rick &amp; Morty Fan Page</h1></Col>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Link to="/characters">Characters</Link>
        <Link to="/">Home</Link>
      </Col>

    </Row>
  );
}
