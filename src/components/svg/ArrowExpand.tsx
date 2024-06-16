import { SvgProps } from "./type"

export const ArrowExpand = ({ color }: SvgProps) => (
  <svg width= {13} height = { 12}
    viewBox = "0 0 13 12" fill = "none"
    xmlns = "http://www.w3.org/2000/svg"
  >
    <path
      d="M10.56 4.475L7.3 7.735a.993.993 0 01-1.4 0l-3.26-3.26"
      stroke={color}
      strokeWidth={ 1.5}
      strokeMiterlimit={ 10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)