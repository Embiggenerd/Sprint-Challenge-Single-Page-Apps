import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';


export default function SearchForm({ setQuery, query }) {

  const handleChange = event => setQuery(event.target.value)

  return (
    <Row className="search-form">
     <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Form className="search">
        <Col sm={10}>
          <Label for="query">Search by name</Label>
          <Input
            id="query"
            type="text"
            onChange={handleChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="search by name"
            autoComplete="off"
          />
        </Col>
      </Form>
      </Col>
    </Row >
  );
}
