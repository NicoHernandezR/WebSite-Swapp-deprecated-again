import React from "react";
import bg from "../img/fifthbg.svg";

function FAQLayer() {
  return (
    <div className="flex max-md:flex-col max-md:flex max-md:justify-center max-md:items-center bg-custom-primary">
      <div className="h-full w-[40%] ">
        <img src={bg} alt="" />
      </div>
      <div className="h-full w-[60%] max-md:w-full flex justify-center text-center pt-10">
        <div className="w-full max-w-md">
          <h1 className="text-custom-accent font-SFProDisplayBold text-[3.125rem]">
            Preguntas Frecuentes
          </h1>
        </div>
      </div>
    </div>
  );
}

export default FAQLayer;
