import React from "react";
import { useAppContext } from "../context";

const DisplayComponent = () => {
  const { state } = useAppContext();

  return (
    <div>
      <h3>Live Preview</h3>
      <div>
        <p><strong>Name:</strong> {state.name}</p>
        <p><strong>Address:</strong> {state.address}</p>
        <p><strong>Phone:</strong> {state.phone}</p>
        <p><strong>Title:</strong> {state.title}</p>
        <p><strong>Company:</strong> {state.company}</p>
        <p><strong>Email:</strong> {state.email}</p>
        <p><strong>Website:</strong> {state.website}</p>
        <p><strong>Color:</strong> <span style={{ color: state.color }}>{state.color}</span></p>
        <p><strong>Font:</strong> {state.font}</p>
        <p><strong>Spacing:</strong> {state.spacing}</p>
        <p><strong>Scale:</strong> {state.scale}</p>
        <p><strong>Size:</strong> {state.size}</p>
        <p><strong>Position:</strong> {state.position}</p>
        <p><strong>Shape:</strong> {state.shape}</p>
      </div>
    </div>
  );
};

export default DisplayComponent;
