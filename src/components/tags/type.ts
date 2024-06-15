import { FiltersFormData } from "@/utils/validation"
export interface TagsProps {
  data: FiltersFormData
  onClick: (v: string | undefined) => void
}