import React, { useEffect } from "react";
import { useState } from "react";
import Favorites from "./Favorites";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { AiOutlineStar } from "react-icons/ai";

const Home = ({ favorite, handleAddFavorite, handleRemoveFavorite }) => {
  const [bored, setBored] = useState([]);
  const [type, setType] = useState(null);
  const [hidden, setHidden] = useState("hidden");

  const boredArray = [];
  boredArray.push(bored);
  console.log(boredArray);

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
        .catch(() => console.log("No random activities today :("));
    };
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
      .catch(() => console.log("No random activities today :("));
  };
  const getAnotherActivity = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBored(data))
      .catch(() => console.log("No random activities today :("));
  };
  const toggleHidden = () => {
    setHidden("block");
  };
  const aCard = boredArray.map((activity, index) => {
    return (
      <Container key={index} id="activityCard" >
        <Card className={hidden}>
          <Card.Header className="text-center">
            Favorite{" "}
            <AiOutlineStar
              onClick={() =>
                handleAddFavorite(
                  boredArray.activity,
                  boredArray.participants,
                  boredArray.type
                )
              }
            />
          </Card.Header>
          <Container>
              <Card.Title className='text-center'>{activity.activity}</Card.Title>
            <Card.Body className="text-center">
              <Card.Text> Type: {activity.type}</Card.Text>
              <Card.Text> Participants: {activity.participants}</Card.Text>
                  <Container className='justify-content-space-evenly'>
                    <DropdownButton
                    as={ButtonGroup}
                    title="Set Activity by Type"
                    id="bg-vertical-dropdown-1"
                  >
                    {dropDownButton}
                  </DropdownButton>
                  {" "}
                  <Button
                    className="d-grid gap-2"
                    variant="primary"
                    size="md"
                    onClick={() => getAnotherActivity()}
                  >
                    Get another
                  </Button>{" "}
                  </Container>
            </Card.Body>
          </Container>
          <Card.Footer className="text-center"></Card.Footer>
        </Card>
      </Container>
    );
  });

  return (
    <div>
      <h1 className="title">Welcome to Bored App!</h1>
      <h4 className="subTitle">
        Kick back, relax, and reset with a fun activity
      </h4>
      <p>
        Not sure what to choose? No problem. Get a random activity by clicking
        on the button below. If you want to get a little more specific, try
        selecting activities by type. You can get more activities back of the
        same type the Get another button.
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
      <hr></hr>
      {aCard}
      <hr></hr>
      <Favorites favorite={favorite}
      handleRemoveFavorite={handleRemoveFavorite}
      hidden={hidden} />
    </div>
  );
};
export default Home;
