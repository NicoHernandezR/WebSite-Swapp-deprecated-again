import React from "react";
import logo from "../img/logo.svg";
import FooterCaracs from "./FooterCaracs";

function Footer() {
  const FooterCaracsList: FooterCaracsProp[] = [
    {
      title: "Compañía",
      carac1: "Acerca de",
      carac2: "Empleos",
      carac3: "Compañía",
    },
    {
      title: "Comunidad",
      carac1: "Blog",
      carac2: "Swapp community",
      carac3: "Info de utilidad",
    },
    {
      title: "Contacto",
      carac1: "+56 9 1234 5678",
      carac2: "contacto@swapp.cl",
      carac3: "Av. no se donde 123, Santiago de Chile.",
    },
  ];

  return (
    <div className="bg-black flex gap-10 py-16 pl-16 flex-wrap">
      <div className="mr-10">
        <img src={logo} alt="Swapp Logo" className="w-[7.75rem] h-[2.031rem]" />
      </div>
        {FooterCaracsList.map((item, index) => (
          <FooterCaracs
            title={item.title}
            carac1={item.carac1}
            carac2={item.carac2}
            carac3={item.carac3}
            key={index}
          />
        ))}
    </div>
  );
}

export default Footer;
