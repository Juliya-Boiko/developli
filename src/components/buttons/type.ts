export interface ButtonIconProps {
  text?: string
  height?: string
  icon?: boolean
  reversed?: boolean,
  onClick: () => void
}

export interface ButtonPrimaryProps {
  title?: string
  accent?: boolean
  type: "submit" | "button"
  height: string
  onClick?: () => void
}

export interface ButtonCardProps {
  icon: string
  onClick?: () => void
}