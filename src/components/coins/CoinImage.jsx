import React from "react";

const CoinImage = (props) => {
  return <img className="h-6" src={`${props.image}`} alt={`${props.name}`} />;
};

export default CoinImage;
