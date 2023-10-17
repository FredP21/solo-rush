

const Card = ({name, image, adress, price, note, description, reserved}) => {
    return (
        <section className="rest_container">
          <div className="imgcontainer">
            <img src={image} alt={name} />
          </div>
            <h2 className="title">{name}</h2>
            <div className="noteof">{note}<span className="star">★</span>
          </div>
            <span className="adresse">{adress}</span>
            <span className="priceof">{price}</span>
        
          <p>
            {description}
          </p> 
            <span className="btn2">Réservation</span> 
        </section>
    );
};

export default Card;