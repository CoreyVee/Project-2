import React, { useEffect } from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    const [bored, setBored] = useState({})
    const [toggle, setToggle] = useState(true);


    const getBored = () => {
        const url=`http://www.boredapi.com/api/activity/`

        fetch(url)
        .then((response) => response.json())
        .then((data) => setBored(data))
        .catch(() => console.log('No random activities today :('))
    }
    
    const randomThing = bored.activity;

console.log(bored)

return (
        <div>
        <h1>Welcome to Productive Breaks!</h1>
        <h4>Kick back, relax, and reset with a fun activity</h4>
        <p>Productive Breaks is a fun app that uses the Bored API to generate random activities so you can have some fun and get your mind off of work. Save your favorites so you can come back and explore them later, and checkout Tips to find out how you can make the most out of your breaks.</p>
        <button onClick={() => getBored()}>Get Random Activity</button>
        <div className='activity'>
        <p>{randomThing}</p>
        </div>
        </div>
    )

}
export default Home;