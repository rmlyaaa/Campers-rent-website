import icons from "../assets/icons.svg";

const Card = ({ card }) => {
  return (
    <div>
      <img src={card.gallery[0]} alt={card.name} />
      <div>
        <h2>{card.name}</h2>
        <h2> € {card.price}</h2>
        <button>
          <use href={`${icons}#icon-Heart`}></use>
        </button>
      </div>
      <div>
        <p>{card.rating}</p>
        <p>{card.location}</p>
      </div>
      <p>{card.description}</p>
      <ul></ul>
      <button>Show more</button>
    </div>
  );
};

export default Card;
