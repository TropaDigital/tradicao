import { ReactNode } from "react";

export interface IHeaderOptions {
    title: string;
    path?: string;
    subOptions?: subOptions[]
}

export interface subOptions {
    subTitle: string;
    path: string;
}

export interface IInfoOptions {
    icon: ReactNode;
    link: string;
    text: string;
}
