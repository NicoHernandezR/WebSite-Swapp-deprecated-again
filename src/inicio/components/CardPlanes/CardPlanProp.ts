type Colors = 'prim' | 'sec' | 'acc' | 'white' | 'black';

interface CardPlanProp{
  topLeftColor: Colors,
  topLeftText: string,
  nombreColor: Colors,
  nombre: string,
  gratisTiempo: string,
  precioPost: string,
  caracs: string[],
  btnColor: Colors,
}

export default CardPlanProp