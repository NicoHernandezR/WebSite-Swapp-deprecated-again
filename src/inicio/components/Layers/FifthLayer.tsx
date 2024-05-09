import React from "react";
import CardPlan from "../CardPlanes/CardPlan";
import CardPlanProp from "../CardPlanes/CardPlanProp";
import ticket from "../../img/ticket.svg"

function FifthLayer() {
  const cards: CardPlanProp[] = [
    {
      topLeftColor: "acc",
      topLeftText: "2 meses por $000.000",
      nombreColor: "acc",
      nombre: "Individual",
      gratisTiempo: "2 meses",
      precioPost: "$2.490 al mes",
      caracs: [
        "1 cuenta Premium",
        "Cancelá cuando quieras",
        "Suscripción o un pago único",
      ],
      btnColor: "white",
    },
    {
      topLeftColor: "sec",
      topLeftText: "2 meses por $0.00,00",
      nombreColor: "sec",
      nombre: "Estudiantes",
      gratisTiempo: "2 meses",
      precioPost: "$1.490 al mes",
      caracs: [
        "1 cuenta Premium",
        "Cancelá cuando quieras",
        "Suscripción o un pago único",
      ],
      btnColor: "sec",
    },
    {
      topLeftColor: "white",
      topLeftText: "7 dias de prueba por $0.00",
      nombreColor: "white",
      nombre: "Emprendedor",
      gratisTiempo: "14 dias",
      precioPost: "$3.490 al mes",
      caracs: [
        "1 cuenta Premium",
        "Cancelá cuando quieras",
        "Suscripción o un pago único",
      ],
      btnColor: "white",
    },
  ];

  const tickets : string[]= [
  "Navegación sin publicidad.",
  "Swapps ilimitados.",
  "Filtrar prendas en el orden que quieras.",
  "Sugerencias exclusivas.",
  "Organizá tu clóset como más te guste.",
  ]

  return (
    <div className="bg-custom-white">
      <div className="flex flex-wrap gap-5 py-20 justify-evenly">
        <div className="text-center">
          <p
            className="text-[2.5rem] font-SFProDisplayBold text-custom-primary"
            style={{ lineHeight: "1" }}
          >
            Todos los planes Premium
          </p>
          <p
            className="text-[2.5rem] font-SFProDisplayBold text-custom-secondary"
            style={{ lineHeight: "1" }}
          >
            Incluyen lo siguiente:
          </p>
        </div>
            
        <div>
          <ul className="text-[0.875rem] text-custom-secondary" style={{ lineHeight: "1.2" }}>
            {tickets.map((item,index)=>(
              <li key={index} className="flex gap-1">
                <img src={ticket} alt="" className="w-[0.875rem] h-[0.875rem]"/>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-auto pb-10">
      <div className="flex flex-wrap justify-evenly items-center gap-10">
          {cards.map((item, index) => (
            <CardPlan
              key={index}
              topLeftColor={item.topLeftColor}
              topLeftText={item.topLeftText}
              nombreColor={item.nombreColor}
              nombre={item.nombre}
              gratisTiempo={item.gratisTiempo}
              precioPost={item.precioPost}
              caracs={item.caracs}
              btnColor={item.btnColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FifthLayer;
