import React, { useState } from 'react';
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setPeople] =useState([
        {
            name: 'Joe Sham',
            url:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        },
        {
            name: 'Joe Shmo',
            url:'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2022/05/19/4eb393f3-d671-4d58-8680-89ccd6607acf_5e3be874.jpg?itok=CEBu_LXQ&v=1652966452'
        },
    ]);

    setPeople([])
    return (
        <div>
            <h1>Tinder Cards</h1>

            {people.map(person => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    >
                    <div 
                    style={{ backgroundImage: `url(${person.url})` }}
                        className="card">
                        <h3>{person.name}</h3>

                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCards;