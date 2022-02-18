import React, { useEffect } from "react";
import { useState } from "react";
import Favorites from "./Favorites";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { AiOutlineStar } from "react-icons/ai";

const Home = ({ favorite, handleAddFavorite, handleRemoveFavorite }) => {
  const [bored, setBored] = useState([]);
  const [type, setType] = useState("/");
  const [hidden, setHidden] = useState("none");
  const [favoriteHidden, setFavoriteHidden] = useState("none");

  const boredArray = [];
  boredArray.push(bored);

  const url = `http://www.boredapi.com/api/activity${type}`;
  const typeArr = [
    { type: "Random", link: "/" },
    { type: "Education", link: "?type=education" },
    { type: "Recreational", link: "?type=recreational" },
    { type: "Social", link: "?type=social" },
    { type: "Do it yourself", link: "?type=diy" },
    { type: "Charity", link: "?type=charity" },
    { type: "Cooking", link: "?type=cooking" },
    { type: "Relaxation", link: "?type=relaxation" },
    { type: "Music", link: "?type=music" },
    { type: "Busywork", link: "?type=busywork" },
  ];

  useEffect(() => {
    const getBoredType = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setBored(data))
        .catch (() => console.error("You made a mistake")
        )};
    getBoredType();
  }, [type]);

  const dropDownButton = typeArr.map((category, index) => (
    <Dropdown.Item
      key={index}
      eventKey={index}
      onClick={() => {
        setType(category.link);
      }}
    >
      {" "}
      {category.type}{" "}
    </Dropdown.Item>
  ));
  const getBored = () => {
    const url = `http://www.boredapi.com/api/activity/`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setBored(data))
      .catch (() => console.error("You made a mistake")
      )};
  const getAnotherActivity = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBored(data))
      .catch (() => console.error("You made a mistake")
      )};
  const toggleHidden = () => {
    setHidden("block");
  };
  const toggleFavoriteHidden = () => {
    setFavoriteHidden("block");
  };
  const aCard = boredArray.map((activity, index) => {
    return (
      <Container className={hidden} key={index} id="activityCard">
        <Card >
          <Card.Header className="text-center">
            Add to List{" "}
            <AiOutlineStar
              onClick={() => {
                handleAddFavorite(
                  bored.activity,
                  activity.type,
                  activity.participants
                );
                toggleFavoriteHidden();
              }}
            />
          </Card.Header>
          <Container>
            <Card.Title className="text-center">{activity.activity}</Card.Title>
            <Card.Body className="text-center">
              <Card.Text> Type: {activity.type}</Card.Text>
              <Card.Text> Participants: {activity.participants}</Card.Text>
              <ButtonGroup>
                <DropdownButton
                  as={ButtonGroup}
                  title="Set Activity Type"
                  id="md-vertical-dropdown-1"
                >
                  {dropDownButton}
                  <Dropdown.Item
                    href="https://www.youtube.com/watch?v=08i9kvCJvJ0"
                    target="_blank"
                  >
                    Build API App
                  </Dropdown.Item>
                </DropdownButton>{" "}
                <Button
                  className="d-grid gap-2"
                  variant="primary"
                  size="md"
                  onClick={() => getAnotherActivity()}
                >
                  Get another
                </Button>{" "}
              </ButtonGroup>
            </Card.Body>
          </Container>
          <Card.Footer className="text-center"></Card.Footer>
        </Card>
      </Container>
    );
  });
  
  return (
    <div className='homePage'>
    <div className='homeParagraph'>
      <h1 className="title">Welcome to Bored App!</h1>
      <h4 className="subTitle">
        Get a random activity
      </h4>
      <p>
        Not sure what to choose? No problem. Get a random activity by clicking
        on the button below. If you want to get a little more specific, try
        selecting activities by type. You can search more activities of the same
        type with the Get another button.
      </p>
      <Button
        onClick={() => {
          getBored();
          toggleHidden();
        }}
        variant="primary"
      >
        Get Random Activity
      </Button>
      </div>
      {aCard}
      <Favorites
        favorite={favorite}
        handleRemoveFavorite={handleRemoveFavorite}
        favoriteHidden={favoriteHidden}
      />
    </div>
  );

};
export default Home;
