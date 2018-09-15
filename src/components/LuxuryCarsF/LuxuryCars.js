import React from "react";
import "./LuxuryCars.css";

const LuxuryCarI = props => (
  <div className="card">
    <div className="img-container">
      <a onClick={() => props.selectLuxuryCar(props.cars)} 
        className={props.curScore === 0}>
        <img alt={props.cars} src={props.image} />
      </a>
    </div>
  </div>
);

export default LuxuryCarsF;

