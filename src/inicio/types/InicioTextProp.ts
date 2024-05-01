type FontTypes = 'lora' | 'neue' | 'SF' | 'neue bold';
type ElemType = 'p' | 'span'

type InicioTextProp = {
  text: string,
  color: string,
  font: FontTypes,
  rem: number
  elem?: ElemType
}

export default InicioTextProp