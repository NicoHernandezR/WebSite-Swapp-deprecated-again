import React from "react";
import InicioTextProp from "../../types/InicioTextProp";
import phone from "../../img/thirdLPhone.svg";
import InicioText from "../InicioText";

function ThirdLayer() {
  const TextList: InicioTextProp[] = [
    {
      text: "GPS Integration.",
      color: "white",
      font: "SF",
      rem: 3.75,
      elem: "p",
    },
    {
      text: "Change Smart.",
      color: "white",
      font: "SF",
      rem: 3.75,
      elem: "p",
    },
    {
      text: "Circular fashion.",
      color: "accent",
      font: "SF",
      rem: 3.75,
      elem: "p",
    },
    {
      text: "Connected People.",
      color: "white",
      font: "SF",
      rem: 3.75,
      elem: "p",
    },
    {
      text: "Personalized.",
      color: "white",
      font: "SF",
      rem: 3.75,
      elem: "p",
    },
    {
      text: "Experience.",
      color: "white",
      font: "SF",
      rem: 3.75,
      elem: "p",
    },
  ];
  return (
    <div className="bg-thirdLayer bg-contain bg-repeat pt-16">
      <div className="flex justify-center items-center gap-10 pl-5">
        <div className="flex">
          <img className="w-max h-max" src={phone} alt="Phone" />
        </div>
        <div className="flex items-center">
          <div className="leading-none pt-12 text-justify font-semibold">
            {TextList.map((item, index) => (
              <InicioText
                key={index}
                text={item.text}
                color={item.color}
                rem={item.rem}
                font={item.font}
                elem={item.elem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdLayer;
