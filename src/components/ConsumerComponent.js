import React from "react";
import { useAppContext } from "../context";

const ConsumerComponent = () => {
  const { state, updateField } = useAppContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateField(name, value);
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={state.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={state.address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={state.phone}
        onChange={handleChange}
      />
      {/* Add input fields for all other properties similarly */}
    </div>
  );
};

export default ConsumerComponent;
