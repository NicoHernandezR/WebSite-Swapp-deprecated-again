import React from "react";
import phone from "../../img/phone.svg";
import logo from "../../img/logo.svg";
import btnds from "../../img/dsbutton.svg";
import InicioText from "../InicioText";
import InicioTextProp from "../../types/InicioTextProp";

function FirstLayer() {
   
  const InicioTextList: InicioTextProp[] = [
    {
      text: "Renovar tu ",
      color: "white",
      font: "neue bold",
      rem: 6,
    },
    {
      text: "closet sin gastar ",
      color: "primary",
      font: "neue bold",
      rem: 6,
    },
    {
      text: "es posible",
      color: "white",
      font: "neue bold",
      rem: 6,
    },
  ];
  return (
    <div className="bg-gradient-to-b from-custom-secondary from-10% via-custom-secondary via-30% to-custom-primary to-95%">
      <div className="pt-10 px-[106px]">
        <img className="w-[206px] h-[54px]" src={logo} alt="Phone" />
      </div>
      <div className="flex justify-between pl-[100px] pr-[30px] pb-10">
        <div className="flex-[5] whitespace-pre text-wrap pt-16">
          <p className="leading-none relative bottom-[7px]">
            {InicioTextList.map((item, index) => (
              <InicioText
                key={index}
                text={item.text}
                color={item.color}
                rem={item.rem}
                font={item.font}
              />
            ))}
          </p>
          <div className="w-[83%] pt-9 pb-12">
            <p
              className="text-[22px] leading-none font-subtitle 
            text-justify italic text-custom-white tracking-normal"
            >
              Esta innovadora aplicación complementa la moda circular, prioriza
              el dinero de la gente sobre la moda rápida que cuesta millones de
              dólares cada año.
            </p>
          </div>
          <button>
            <img src={btnds} alt="Phone" />
          </button>
        </div>

        <div className="flex-[6] pl-2 relative bottom-[17px] left-[11px]">
          <img src={phone} alt="Phone" />
        </div>
      </div>
    </div>
  );
}

export default FirstLayer;
