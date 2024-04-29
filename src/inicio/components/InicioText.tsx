import React from "react";
import InicioTextProp from "../types/InicioTextProp";

function InicioText({ text, color }: InicioTextProp) {
  // Objeto que mapea los colores a las clases correspondientes
  const colorClasses = {
    primary: "text-custom-primary",
    secondary: "text-custom-secondary",
    accent: "text-custom-accent",
    black: "text-custom-black",
    white: "text-custom-white"
  };

  // Obtén la clase correspondiente según el color proporcionado
  const textColorClass = colorClasses[color] || "";

  return (
      <span className={`font-bold text-[96px] text-wrap ${textColorClass}`}>
        {text}
      </span>
  );
}

export default InicioText;
