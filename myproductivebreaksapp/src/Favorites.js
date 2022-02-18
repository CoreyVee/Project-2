import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { AiOutlineStar } from "react-icons/ai";

const Favorites = ({ favorite, handleRemoveFavorite }) => {
  const showFavorites = favorite.map((object, index) => {
    return (
    <div>
      <Container fluid="sm" className={index}>
        <Card className="text-center">
          <Card.Header as="h6" className="text-center">
            Favorite <AiOutlineStar />
          </Card.Header>
          <Container>
            <Row className="justify-content-space-evenly">
              <Col>Participants: {object.participants}</Col>
              <Col>Type: {object.type}</Col>
            </Row>
            <Card.Body className="text-center">
              <Card.Text>
                <Card.Text as="h6">{object.activity}</Card.Text>
              </Card.Text>
              <Button
                className="d-grid gap-2"
                variant="primary"
                size="md"
                onClick={() => handleRemoveFavorite(object)}
              >
                Remove Activity
              </Button>{" "}
            </Card.Body>
          </Container>
          <Card.Footer as="h6" className="text-center"></Card.Footer>
        </Card>
      </Container>
      </div>
    );
  });
  return (
    <div>
      <h2>Your Favorite Activities go Here:</h2>
      <hr></hr>
      {showFavorites}
    </div>
  );
};
export default Favorites;
