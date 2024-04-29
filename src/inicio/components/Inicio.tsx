import React from "react";
import phone from "../img/phone.svg";
import logo from "../img/logo.svg";
import InicioText from "./InicioText";
import InicioTextProp from "../types/InicioTextProp";

function Inicio() {
  const lineHeight = "calc(96px * 0.973)";
  const InicioTextList: InicioTextProp[] = [
    { text: "Un ", color: "white" },
    { text: "nuevo concepto ", color: "primary" },
    { text: "de la moda", color: "white" },
  ];

  return (
    <div className="bg-gradient-to-b from-custom-accent to-custom-primary">
      <div className="pt-7 px-[106px] pb-0">
        <img className="w-[206px] h-[54px]" src={logo} alt="Phone" />
      </div>
      <div className="flex justify-between px-28">
        <div className="flex-[4] whitespace-pre text-wrap">
          <p className="leading-none">
            {InicioTextList.map((item, index) => (
              <InicioText key={index} text={item.text} color={item.color} />
            ))}
          </p>
          <div className="w-[86%] py-12">
            <p className="text-[22px] leading-none font-subtitle 
            text-justify italic text-custom-white tracking-normal">
              Esta innovadora aplicación complementa la moda circular, prioriza
              el dinero de la gente sobre la moda rápida que cuesta millones de
              dólares cada año.
            </p>
          </div>
          <button className="px-20 py-1 rounded-full text-[24px] font-semibold
           bg-custom-accent text-custom-primary">
            Descargar 
          </button>
        </div>

        <div className="flex-[5]">
          <img src={phone} alt="Phone" />
        </div>
      </div>
    </div>
  );
}

export default Inicio;
