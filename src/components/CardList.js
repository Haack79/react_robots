 import React from 'react';
 import Card from './Card';
//  const CardList = ({ robots }) => {
//      const cardsArray = robots.map((user, i ) => {
//          return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} username={robots[i].username}/>
//      })
//      return (
//         <div>
//             {cardsArray}
//         </div>
//      );
//  }

const CardList = ({ robots }) => {
    return (
        <div>
            { //everything in curly braces is javascript 
                robots.map((robot, i) => {
                    return (
                        <Card 
                            key={robots[i].id}
                            name={robots[i].name}
                            id={robots[i].id}
                            email={robots[i].email}
                            username={robots[i].username}
                            />
                    );
                })
            }
        </div>
    )
}
 export default CardList; 