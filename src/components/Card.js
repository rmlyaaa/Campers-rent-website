import icons from "../assets/icons.svg";

const Card = ({ card }) => {
  return (
    <div>
      <img src={card.gallery[0]} alt={card.name} />
      <div>
        <h2>{card.name}</h2>
        <h2> € {card.price}</h2>
        <button>
          <svg href={`${icons}#icon-Heart`} width="16" height="16"></svg>
        </button>
      </div>
      <div>
        <p>{card.rating}</p>
        <p>{card.location}</p>
      </div>
      <p>{card.description}</p>
      <ul></ul>
      <button>Show more</button>
      <p>Hello!</p>
    </div>
  );
};

export default Card;
