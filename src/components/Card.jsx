import { useState } from "react";
import "./Card.scss"


const Card = ({name, image, adress, price, note, description, reserved}) => {

    const [isReserved, setIsReserved] = useState({reserved})

    const handleReserved = () => {
        setIsReserved(!isReserved);
    }
    return (
        <section className="restContainer">

            <h2 className="title">{name}</h2>
            <img src={image} alt={name} />
            <div className="noteOf">
            <span className="adresse">{adress}</span>
            <div>
            {note}<span className="star">★</span>
            </div>
          </div>
        
          <p>
            {description}
          </p> 
          <div className="endOfCard">
          <span className="priceOf">{price}</span>
            <button 
            onClick={handleReserved}
            className={isReserved ? "btn2" : "btn1"}
            
            >{isReserved ? "Reservation" : "Vous avez réservé"}</button> 
            </div>
        </section>
    );
};

export default Card;