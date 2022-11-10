import React, { useEffect, useState } from 'react';
import TinderCard from "react-tinder-card";
import database from "./TinderCards";
import './TinderCards.css';


function TinderCards() {
    const [people, setPeople] = useState([]);

    //code that runs the firebase database info//
    useEffect(() => {
        //this is where the code runs..
        database
        .collection("people")
        .onSnapshot((snapshot) =>
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );

        //this will run once when the component loads and never again//
    }, []);

    //setPeople([])
    return (
        <div>
            <h1>Tinder Cards</h1>

        <div className="tinderCards__cardContainer">

            {people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}  
                preventSwipe={['up', 'down']}  

                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="card"
                    >
                        <h3>{person.name}</h3>

                    </div>
                </TinderCard>
            ))}
            </div>
        </div>

    );
}

export default TinderCards;