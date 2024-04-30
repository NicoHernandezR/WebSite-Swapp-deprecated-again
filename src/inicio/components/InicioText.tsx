import React from "react";
import InicioTextProp from "../types/InicioTextProp";

function InicioText({ text, color, font, px }: InicioTextProp) {


  return (
    <span className={`
    ${color === 'primary' ? "text-custom-primary" : 
    color === 'accent' ? "text-custom-accent" : 
    color === 'white' ? 'text-custom-white' : ''}
    ${font === 'neue' ? 'font-helveticaNeue' : 
      font === 'lora' ? 'font-subtitle' : 
      font === 'SF' ? 'font-SFProDisplay' : ''
    }
      
    `} style={{ fontSize: px }}>
      {text}
    </span>
  );
}

export default InicioText;
