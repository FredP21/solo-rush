import Card from "./Card";

const Cardlist = ({data}) => {
    return (
        <div>
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

export default Cardlist;