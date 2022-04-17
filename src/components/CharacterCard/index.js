import React from "react";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ item }) => {
  let navigate = useNavigate();
  const goDetails = () => {
    navigate("/details", {
      state: item,
    });
  };
  return (
    <div className="content" onClick={goDetails}>
      <div className="content-inner">
        <div className="content-front">
          <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt="" />
        </div>
        <div className="content-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
            <li>
              <strong>Description:</strong> {item.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
