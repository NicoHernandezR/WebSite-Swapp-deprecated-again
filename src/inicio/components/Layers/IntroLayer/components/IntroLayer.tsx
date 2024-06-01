import React from "react";
import phone from "../img/phone.svg";
import logo from "../img/logo.svg";
import btnds from "../img/dsbutton.svg";
import InicioText from "../../../InicioText";
import InicioTextProp from "../../../../types/InicioTextProp";

function IntroLayer() {
   
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
      <div className="pt-10 md:px-[106px] max-md:justify-center max-md:items-center max-md:flex">
        <img className="w-[206px] h-[54px]" src={logo} alt="Phone" />
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-center lg:text-left lg:pl-[100px] lg:pr-[30px] pb-10">
        <div className="flex-[5] whitespace-pre text-wrap pt-16 max-lg:justify-between max-lg:items-center
        flex flex-col max-lg:w-[70%]">
          <p className="leading-none relative bottom-[7px]  first-letter:w-auto max-lg:text-center md:w-[100%]">
            {InicioTextList.map((item, index) => (
              <InicioText
                key={index}
                text={item.text}
                color={item.color}
                rem={item.rem}
                font={item.font}
                customClass="max-lg:!text-[4rem] max-[400px]:!text-[3rem]"
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

        <div className="flex-[6] md:pl-2 relative md:bottom-[17px] md:left-[11px] max-xl:mt-4">
          <img className="w-[40rem] sm:h-[38.3rem] max-sm:relative" src={phone} alt="Phone" />
        </div>
      </div>
    </div>
  );
}

export default IntroLayer;
