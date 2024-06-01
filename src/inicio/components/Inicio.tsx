import React from "react";
import FirstLayer from "./Layers/FirstLayer";
import SecondLayer from "./Layers/SecondLayer";
import ThirdLayer from "./Layers/ThirdLayer";
import ForthLayer from "./Layers/ForthLayer";
import FifthLayer from "./Layers/FifthLayer";
import SixthLayer from "./Layers/SixthLayer";
import IntroLayer from "./Layers/IntroLayer/components/IntroLayer";
import DescLayer from "./Layers/DescLayer/DescLayer";
import CaracsLayer from "./Layers/CaracsLayer/components/CaracsLayer";
import ClothesLayer from "./Layers/ClothesLayer/components/ClothesLayer";
import FAQLayer from "./Layers/FAQLayer/components/FAQLayer";
import SusDescLayer from "./Layers/SusDescLayer/components/SusDescLayer";
import Footer from "./Layers/FooterLayer/components/Footer";

function Inicio() {
  return (
    <>
    <IntroLayer/>
    <DescLayer/>
    <CaracsLayer/>
    <ClothesLayer/>
    <div className="relative">
      <FAQLayer />
      <SusDescLayer />
    </div>
    <Footer/>
    </>
  );
}

export default Inicio;
