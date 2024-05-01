import React from "react";
import InicioTextProp from "../types/InicioTextProp";

function InicioText({ text, color, font, rem, elem = "span" }: InicioTextProp) {
  // Determinar el tipo de elemento a renderizar (por defecto, span)
  const Element = elem || "span";
  console.log(Element);

  // Objeto de estilos dinámicos
  const dynamicStyles = {
    color:
      color === "primary"
        ? "#20193F"
        : color === "accent"
        ? "#C3F123"
        : color === "white"
        ? "#ffffff"
        : "inherit",
    fontFamily:
      font === "neue"
        ? "Helvetica Neue, sans-serif"
        : font === "neue bold"
        ? "Helvetica Neue Bold, sans-serif"
        : font === "lora"
        ? "Lora, serif"
        : font === "SF"
        ? "SFProDisplay, sans-serif"
        : "inherit",
    fontSize: `${rem}rem`,
    marginBottom: Element === "p" ? "0.1em" : "inherit",
  };

  // Renderizar el componente con el tipo de elemento determinado
  return <Element style={dynamicStyles}>{text}</Element>;
}

export default InicioText;
