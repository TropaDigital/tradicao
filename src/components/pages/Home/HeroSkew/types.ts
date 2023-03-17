import { StaticImageData } from "next/image"
import { ReactNode } from "react"

export interface IHeroSkew{
    backgroundImage: string | any
    altBackgroundImage: string
    subtitle?: ReactNode | string
    solidHeight?: string | number;
}