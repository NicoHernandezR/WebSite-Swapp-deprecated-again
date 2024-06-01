import React from "react";
import ropa from "../img/ropa.svg";

function ClothesLayer() {
  return (
    <div className="flex flex-col h-auto">
      <div className="bg-custom-accent">
        <div className="flex justify-center text-center p-5">
          <span className="font-SFProDisplay text-[3.125rem] font-bold">
            No hay donde perderse
          </span>
        </div>
        <div className="flex justify-center items-center pb-[6rem] px-14">
          <div className="bg-custom-white h-full w-full rounded-3xl flex flex-wrap
            justify-evenly items-center p-10 gap-5">
            <div className="flex flex-col text-center text-[#AFAFAF]">
              <img src={ropa} alt="ropa" className="w-[13.375rem] h-[16.375rem]"/>
              <h2 className="font-SFProDisplayBold text-[1.875rem]">Falabella Retail</h2>
              <p className="font-SFProDisplay text-[1.159rem]">Retail</p>
              <p className="font-SFProDisplayBold text-[1.159rem]">$49.000</p>
            </div>
            <div className="flex flex-col text-center text-[#AFAFAF]">
              <img src={ropa} alt="ropa" className="w-[13.375rem] h-[16.375rem]"/>
              <h2 className="font-SFProDisplayBold text-[1.875rem]">Falabella Retail</h2>
              <p className="font-SFProDisplay text-[1.159rem]">Retail</p>
              <p className="font-SFProDisplayBold text-[1.159rem]">$49.000</p>
            </div>
            <div className="flex flex-col text-center text-[#AFAFAF]">
              <img src={ropa} alt="ropa" className="w-[13.375rem] h-[16.375rem]"/>
              <h2 className="font-SFProDisplayBold text-[1.875rem] text-wrap">Falabella Retail</h2>
              <p className="font-SFProDisplay text-[1.159rem]">Retail</p>
              <p className="font-SFProDisplayBold text-[1.159rem]">$49.000</p>
            </div>
            <div className="flex flex-col text-center text-[#AFAFAF]">
              <img src={ropa} alt="ropa" className="w-[13.375rem] h-[16.375rem]"/>
              <h2 className="font-SFProDisplayBold text-[1.875rem]">Falabella Retail</h2>
              <p className="font-SFProDisplay text-[1.159rem]">Retail</p>
              <p className="font-SFProDisplayBold text-[1.159rem]">$49.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClothesLayer;
