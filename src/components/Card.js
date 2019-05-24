import React from 'react';

// writing jsx in this function so need React for it to be understood.
// const Card = (props) => {
//     return (
//         <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//             <h1>{props.name}</h1>
//             <img alt='robot' src ={`https://robohash.org/${props.username}?200x200`} />
//             <div>
//                 <h2></h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     )
// }

// export default Card; 
// Destructure 1 **********************************************
// const Card = (props) => { 
//     const { name, email, username, id } = props;
//     return (
//         <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//             <h1>{name}</h1>
//             <img alt='robot' src ={`https://robohash.org/${username}?200x200`} />
//             <div>
//                 <h2></h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
// }

// export default Card;
// ********************************************************** 
// Final Destructure 
// receive props and destructure them right inside the brackets, part of object.
const Card = ({ name, email, username, id }) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <h1>{name}</h1>
            <h6>{id}</h6>
            <img alt='robot' src ={`https://robohash.org/${username}?200x200`} />
            <div>
                <h2>{username}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card; 