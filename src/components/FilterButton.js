import icons from "../assets/icons.svg";

const FilterButton = ({ text, icon }) => {
  return (
    <li>
      <input type="checkbox"></input>
      <svg href={`${icons}#${icon}`} width="16" height="16"></svg>
      <p>{text}</p>
    </li>
  );
};

export default FilterButton;
