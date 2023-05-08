import React from "react";
import './card.styles.css';
const Card = ({monsters}) => {
    return (
        <div className="card">
            <img src={`https://robohash.org/${monsters.id}/ ?set=set2`} alt="monster" />
            <h2>{monsters.name}</h2>
            <p>{monsters.email}</p>
        </div>
    );
}

export default Card;