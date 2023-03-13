// Next
import Image from "next/image";

// Styles
import { 
    CardDescription, 
    CardImageRounded, 
    CardImageSquare, 
    CardTitle, 
    CardWrapper 
} from "./styles";

interface ICardCarousel {
    width: string,
    heigth: string,
    image: string,
    title?: string,
    description?: string,
    imageType: boolean,
    padding: string,
}


export default function CardCarousel({width, heigth, image, title, description, imageType, padding}: ICardCarousel) {
    return (
        <CardWrapper
            width={width}
            height={heigth}
            padding={padding}
        >   
            {
                imageType &&
                <CardImageSquare>
                    <div className="image">
                        <Image 
                            src={image} 
                            width={260}
                            height={260}
                            alt={"Imagem do card"} 
                        />
                    </div>
                </CardImageSquare>
            }

            {
                !imageType &&
                <CardImageRounded>
                    <div className="image">
                        <Image 
                            src={image} 
                            width={110}
                            height={110}
                            alt={"Imagem do card"} 
                        />
                    </div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardImageRounded>
            }

        </CardWrapper>
    )
}