/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({ property1, className }) => {
  return (
    <div className={`component property-1-0-${property1} ${className}`}>
      <div className="STORE">
        {property1 === "default" && <>STORE</>}

        {property1 === "variant-2" && <div className="div">uwu</div>}
      </div>
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
