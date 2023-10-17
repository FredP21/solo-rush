import Card from "./Card";
import PropTypes from "prop-types"
import "./Cardlist.scss";

const Cardlist = ({data}) => {
    return (
        <div className="container">
           {data.map((food, i) => (
            <Card
            key={i}
            name={food.name}
            image={food.image}
            adress={food.adress}
            price={food.price}
            note={food.note}
            description={food.description}
            reserved={food.reserved}
            />
           ))} 
        </div>
    );
};

Cardlist.propTypes = {
    data: PropTypes.array.isRequired
}

export default Cardlist;