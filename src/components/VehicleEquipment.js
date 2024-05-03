import FilterButton from "./FilterButton";

import { FaWind } from "react-icons/fa";

const VehicleEquipment = () => {
  return (
    <div>
      <div>
        <ul>
          <FilterButton text="AC" icon={FaWind} />
          <FilterButton text="Automatic" icon="icon-Heart" />
          <FilterButton text="Kitchen" />
          <FilterButton text="TV" />
          <FilterButton text="Shower/WC" />
        </ul>
      </div>
      <div>
        <h3>Vehicle type</h3>
        <ul>
          <FilterButton text="Van" icon={FaWind} />
          <FilterButton text="Fully Integrated" />
          <FilterButton text="Alcove" />
        </ul>
      </div>
    </div>
  );
};

export default VehicleEquipment;
