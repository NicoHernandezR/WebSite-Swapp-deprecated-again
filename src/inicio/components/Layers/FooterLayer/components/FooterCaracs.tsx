import React from "react";

function FooterCaracs({ title, carac1, carac2, carac3}: FooterCaracsProp) {
  return (
    <div className="flex flex-col gap-4 text-custom-white font-helveticaNeueLight text-[0.85rem] text-wrap w-[10rem]">
      <h1 className="text-[#AFAFAF] text-[1.375rem]">{title}</h1>
      <h3>{carac1}</h3>
      <h3>{carac2}</h3>
      <h3>{carac3}</h3>
    </div>
  );
}

export default FooterCaracs;
