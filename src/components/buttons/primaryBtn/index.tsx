import { ButtonProps } from "../type"

export const BtnPrimary = ({ text }: ButtonProps) => {
  return (
    <button type="button">{text}</button>
  )
}