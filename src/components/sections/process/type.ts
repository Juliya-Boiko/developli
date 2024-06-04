export interface ProcessItemType {
  title: string
  text: string
}

export interface ProcessProps {
  items: ProcessItemType[],
  children: React.ReactNode
}