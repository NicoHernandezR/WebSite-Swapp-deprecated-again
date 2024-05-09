import React from "react";
import img from "../../img/forth.svg";

function ForthLayer() {
  return (
    <div className="flex md:flex-row flex-col  h-screen bg-custom-accent overflow-hidden">
      <div className="flex justify-center items-center">
        <img src={img} alt="Person" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
      </div>
      <div className="">

      </div>
    </div>
  );
}

export default ForthLayer;