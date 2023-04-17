import { ReactNode } from "react";
import { CardContainer } from "./styles";

interface ICardBrand {
    children: ReactNode,
}

export default function BrandCard({children}: ICardBrand) {
    return (
        <CardContainer>
            {children}
        </CardContainer>
    )
}