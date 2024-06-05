import { buttonSizes } from "@/constants/buttonSizes"

export const getBtnStyles = (size: string | undefined) => {
  if (!size) return 'btnSmall'
  switch (size) {
    case buttonSizes.Big:
      return 'btnBig'
    case buttonSizes.Small:
      return 'btnSmall'
    default:
      return 'btnBig'
  }
}