import Card from "../components/Card";
import campers from "../assets/db/campers.json";

const CardList = () => {
  return (
    <div>
      {campers.map((card) => (
        <Card card={card} key={card._id} />
      ))}
    </div>
  );
};

export default CardList;
