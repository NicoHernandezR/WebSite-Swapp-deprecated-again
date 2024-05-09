import React from "react";
import CardPlanProp from "./CardPlanProp";
import logo from "./logo.svg";

function CardPlan({
  topLeftColor,
  topLeftText,
  nombreColor,
  nombre,
  gratisTiempo,
  precioPost,
  caracs,
  btnColor,
}: CardPlanProp) {
  const width = 19.375;
  const height = 30;
  return (
    <div className="flex flex-col h-[32rem] w-[20rem] bg-custom-primary rounded-xl overflow-hidden">
      <div className="w-fit p-2 h-[2rem] rounded-br-xl flex justify-center items-center" style={{
        backgroundColor:
        topLeftColor === 'acc' 
        ? "#C3F123"
        : topLeftColor === "sec"
        ? "#959ADC"
        : topLeftColor === "white"
        ? "#ffffff"
        : "inherit",
        color:
        topLeftColor === 'acc' 
        ? "#000000"
        : topLeftColor === "sec"
        ? "#ffffff"
        : topLeftColor === "white"
        ? "#000000"
        : "inherit",
      }}>
        <span className="font-SFProDisplayBold text-[0.95rem]">
          {topLeftText}
        </span>
      </div>

      <div className="px-4 pt-8 pb-10">
        <div>
          <div className="flex gap-2 items-center">
            <img src={logo} alt="" className="w-[1.849rem] h-[1.181rem]" />
            <span className="font-SFProDisplayBold text-[1.25rem] text-custom-white">
              Premium
            </span>
          </div>
          <p
            className="font-SFProDisplayBold text-[2rem]"
            style={{
              color:
                nombreColor === "sec"
                  ? "#959ADC"
                  : nombreColor === "acc"
                  ? "#C3F123"
                  : nombreColor === "white"
                  ? "#ffffff"
                  : "inherit",
            }}
          >
            {nombre}
          </p>
          <p className="font-SFProDisplay  text-[1.125rem] text-custom-white">
            Gratis por {gratisTiempo}
          </p>
          <p
            className="font-SFProDisplay text-[1rem]"
            style={{
              color: "#AFAFAF",
            }}
          >
            Despues Cuesta {precioPost}
          </p>
        </div>

        <div className="px-5 pt-10">
          <ul style={{ listStyle: "initial" }}>
            {caracs.map((carac, index) => (
              <li key={index} className="text-custom-white">
                {carac}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center pb-10">
        <button
          className="w-[90%] p-2 text-[0.938rem] font-SFProDisplayBold rounded-3xl"
          style={{
            backgroundColor:
              btnColor === "sec"
                ? "#959ADC"
                : btnColor === "acc"
                ? "#C3F123"
                : btnColor === "white"
                ? "#ffffff"
                : "inherit",
            color: 
              btnColor === "sec"
              ? "#ffffff"
              : btnColor === "white"
              ? "#20193F"
              : "inherit",
          }}
        >
          Probar Swapp Gratis por 2 meses.
        </button>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
      <p className="w-[90%] font-SFProDisplayMedium text-[0.625rem] text-neutral-300">
        Gratis por 2 semanas. Después, cuesta $ 2.490 *** al mes. La oferta solo
        está disponible si aún no has probado Premium. Se aplican términos y
        condiciones.
      </p>
      <p className="w-[90%] font-SFProDisplayMedium text-[0.625rem] text-neutral-300">La oferta termina el 15 de mayo de 2024. *** + impuestos
        aplicables</p>
      </div>
    </div>
  );
}

export default CardPlan;
