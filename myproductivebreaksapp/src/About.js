import React from "react";
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

const Tips = () => {
    
    return (
        <div className='aboutPage'>
        <div className='aboutParagraph'>
            <h2>About</h2>
            <p>Bored API was designed by Drew Thoennes to help you find things to do when you're bored. This app was designed to make it more user friendly to interface with. Feel free to use the form below to send any feedback on suggestions or issues while using the app.</p>
        <h1>Get in Touch</h1>
        </div>
<Container>
        <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Name: </Form.Label>
  <Form.Control type="text" placeholder="Normal text" />  
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message: </Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
</Container>
        </div>
    )

}
export default Tips;