import React, { useEffect } from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Favorites from "./Favorites";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from "react-bootstrap/DropdownButton";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { AiOutlineStar } from 'react-icons/ai';


const Home = ({handleAddFavorite}) => {
    const [bored, setBored] = useState({});
    const [type, setType] = useState(null);
    const [hidden, setHidden] = useState('hidden');

    const url=`http://www.boredapi.com/api/activity${type}`
    const typeArr = [{type:'Random', link: '/'},
        {type: 'Education', link:'?type=education'},
        {type: 'Recreational', link: '?type=recreational'},
        {type:'Social', link:'?type=social'},
        {type:'Do it yourself', link: '?type=diy'},
        {type: 'Charity', link: '?type=charity'},
        {type: 'Cooking', link: '?type=cooking'},
        {type: 'Relaxation', link: '?type=relaxation'},
        {type: 'Music', link: '?type=music'},
        {type: 'Busywork', link: '?type=busywork'}];

         useEffect(()=> {
    
            const getBoredType = async() => {
                
        
                await fetch(url)
                .then((response) => response.json())
                .then((data) => setBored(data))
                .catch(() => console.log('No random activities today :('))
            }
        getBoredType()
        }, [type])
    

const dropDownButton = typeArr.map((category, index) => 
 <Dropdown.Item key={index} eventKey={index} onClick={()=>{setType(category.link);}} > {category.type} </Dropdown.Item>
)
    const getBored = () => {
        const url=`http://www.boredapi.com/api/activity/`

        fetch(url)
        .then((response) => response.json())
        .then((data) => setBored(data))
        .catch(() => console.log('No random activities today :('))
    }
    const getAnotherActivity = () => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setBored(data))
        .catch(() => console.log('No random activities today :('))
    }
    const toggleHidden = () => {
        setHidden('block')
    }

    // const aCard= bored.map((object, index) => {
    //     return (
    //         <Card  className={hidden}>
    //         <Card.Body key={index}>
    //             <Card.Title>Your Activity</Card.Title>
    //          <Card.Text>{object.activity}</Card.Text>
    //          <Card.Text>{object.type}</Card.Text><Card.Text>{object.participants}</Card.Text>
    //         <DropdownButton as={ButtonGroup} title="Get Activity by Type" id="bg-vertical-dropdown-1">
    //             {dropDownButton}
    //             </DropdownButton>
    //         </Card.Body>
    //     </Card>
    //     )
    // });

console.log(bored)

return (
        <div>
        <h1 className='title'>Welcome to Productive Breaks!</h1>
        <h4 className='subTitle'>Kick back, relax, and reset with a fun activity</h4>
        <p>Productive Breaks is a fun app that uses the Bored API to generate random activities so you can have some fun and get your mind off of work. Save your favorites so you can come back and explore them later, and checkout Tips to find out how you can make the most out of your breaks.</p>
        <Button onClick={() => {getBored(); toggleHidden()}} variant="primary">Get Random Activity</Button>
<Container className={hidden} fluid='sm' id='activityCard'>
        <Card className="text-center" >
    
  <Card.Header as='h6' className='text-center'>Favorite <AiOutlineStar />
  <Button onClick={() => handleAddFavorite()} variant="primary">Favorite</Button>
  </Card.Header>
  <Container>
      <Row className='justify-content-space-evenly'>
        <Col>Participants: {bored.participants}</Col>
        <Col>Type: {bored.type}</Col>
      </Row>
  <Card.Body className='text-center'>
    
    <Card.Text>
    <Card.Text>{bored.activity}</Card.Text>
    </Card.Text>
    <Row>
    <Col><DropdownButton as={ButtonGroup} title="Set Activity by Type" id="bg-vertical-dropdown-1">
                {dropDownButton}
                </DropdownButton></Col>
    <Col> <Button className="d-grid gap-2" variant="primary" size="md"
    onClick={(()=> getAnotherActivity())}>
      Get another
    </Button>{' '}</Col>
    </Row>
  </Card.Body >
  </Container>
  <Card.Footer as= 'h6' className='text-center'></Card.Footer>
</Card>
</Container>
<hr></hr>
        </div>
    )
}
export default Home;