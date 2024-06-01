import React from "react";
import InicioText from "../../../InicioText";
import InicioTextProp from "../../../../types/InicioTextProp";
import logo from "../img/logo.svg";
import btnds from "../img/sixthBtn.svg";
import phone from "../img/sixthIcon.svg";

function SusDescLayer() {
  const InicioTextList: InicioTextProp[] = [
    {
      text: "Suscríbete para recibir las ",
      color: "primary",
      font: "neue bold",
      rem: 4.688,
    },
    {
      text: "últimas noticias",
      color: "accent",
      font: "neue bold",
      rem: 4.688,
    },
  ];
  return (
    <div className="bg-custom-white relative md:-mt-20 -mt-0 z-10 rounded-[3rem] pb-20">
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
          <div className="w-[83%] pt-9 pb-12 mt-6">
            <p
              className="text-[22px] leading-none font-subtitle 
            text-justify italic text-custom-primary tracking-normal"
            >
              Obtén un 30% de descuento en tu suscripción anual de swapp+
              recibiendo nuestro newslatter.
            </p>
          </div>
          <button className="mt-6">
            <img src={btnds} alt="Descargar"/>
          </button>
        </div>

        <div className="max-xl:flex max-xl:justify-center max-xl:items-center max-xl:pt-5 ">
          <img
            className="w-[39.563rem] sm:h-[35.938rem] max-sm:relative "
            src={phone}
            alt="Person"
          />
        </div>
      </div>
    </div>
  );
}

export default SusDescLayer;
