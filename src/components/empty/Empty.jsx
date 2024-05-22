import React from "react";
import "../../sass/__empty.scss";
import empty from "../../assets/empty.png";
const Empty = ({ text }) => {
  return (
    <div className="empty">
      <img src={empty} alt="" />
    </div>
  );
};

export default Empty;
