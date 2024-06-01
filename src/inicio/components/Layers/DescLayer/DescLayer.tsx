import React from "react";
import InicioTextProp from "../../../types/InicioTextProp";
import InicioText from "../../InicioText";

function DescLayer() {
  const TextList: InicioTextProp[] = [
    {
      text: "This product has been created ",
      color: "accent",
      font: "lora",
      rem: 4,
    },
    {
      text: "for consumers who enjoy change their clothes, ",
      color: "white",
      font: "lora",
      rem: 4,
    },
    {
      text: "delivering a convenient technology experience. ",
      color: "white",
      font: "lora",
      rem: 4,
    },
  ];

  return (
    <div className="bg-custom-primary flex justify-center items-center">
      <div className="flex flex-col md:p-10 p-5 justify-center items-center ">
        <div className="flex items-center h-1/2">
          <p className="leading-none pt-10 italic text-center">
            {TextList.map((item, index) => (
              <InicioText
                key={index}
                text={item.text}
                color={item.color}
                rem={item.rem}
                font={item.font}
                customClass="max-md:!text-[2rem]"
              />
            ))}
          </p>
        </div>
        <div className="flex items-center h-1/2 md:w-3/4">
          <p className="leading-none md:pt-12 md:p-8 p-4 text-center">
            <span className="text-[2rem] max-md:!text-[1rem] text-helveticaNeue font-light text-custom-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DescLayer;
