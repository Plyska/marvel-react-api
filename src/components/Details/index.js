import React, { useMemo } from "react";
import Header from "../Header";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const item = useMemo(() => location.state, [location]);

  return (
    <>
      <Header />
      <div className="details-box">
        <div>
          <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt="" />
          <div>
            <a href={item.urls[0].url}>More informations...</a>
          </div>
        </div>
        <div className="details-box-text">
          <strong>Name:</strong> {item.name}
          <strong>Description:</strong> {item.description}
        </div>
      </div>
    </>
  );
};

export default Details;
