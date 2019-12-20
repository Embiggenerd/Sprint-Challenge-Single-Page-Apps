import React from "react";
import { Card, Button, CardTitle, CardText } from 'reactstrap';

export default function CharacterCard({ name, status, species }) {
  return (
    <Card body className="text-center">
      <CardTitle>{name}</CardTitle>
      <CardText>{`Status: ${status}`}</CardText>
      <CardText>{`Species: ${species}`}</CardText>
    </Card>
  );
}
