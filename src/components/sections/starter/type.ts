import { StaticImageData } from "next/image";

export interface StarterProps {
  title: React.ReactNode;
  btnText: string
  bgColor: string
  image: StaticImageData,
  navigateTo: string
}