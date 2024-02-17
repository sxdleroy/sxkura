/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Info = ({ property1, className }) => {
  return (
    <div className={`info ${property1} ${className}`}>
      <div className="INFO">
        {property1 === "default" && <>INFO</>}

        {property1 === "variant-2" && <div className="text-wrapper">:3</div>}
      </div>
    </div>
  );
};

Info.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
