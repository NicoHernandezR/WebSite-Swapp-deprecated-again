import React from "react";
import InicioTextProp from "../types/InicioTextProp";
import InicioText from "./InicioText";

function SecondLayer() {

  const TextList: InicioTextProp[] = [
    {
      text: "This product has been created ", color: "accent",
      font: 'aaa',
      px: 64
    },
    {
      text: "for consumers who enjoy change their clothes, ", color: "white",
      font: 'lora',
      px: 64
    },
    {
      text: "delivering a convenient technology experience. ", color: "white",
      font: 'lora',
      px: 64
    },
  ];

  return (
    <div className="bg-custom-primary h-screen">
      <p className="leading-none pt-10">
        {TextList.map((item,index)=> (
          <InicioText key={index} text={item.text} color={item.color} px={item.px} font={item.font} />
        ))}
      </p>
    </div>
  );
}

export default SecondLayer;
