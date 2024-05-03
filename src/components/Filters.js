import icons from "../assets/icons.svg";
import VehicleEquipment from "./VehicleEquipment";

const Filters = () => {
  return (
    <div>
      <p>Location</p>
      <div>
        <svg href={`${icons}#icon-Heart`} width="16" height="16"></svg>
        <input type="text" placeholder="Kyiv, Ukraine"></input>
      </div>
      <div>
        <p>Filters</p>
        <h3>Vehicle equipment</h3>
        <VehicleEquipment />
      </div>
      <button>Search</button>
    </div>
  );
};

export default Filters;
