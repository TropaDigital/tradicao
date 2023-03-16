// Next
import Image from "next/image";

// Styles
import { 
    CardDescription, 
    CardIcons, 
    CardImageRounded, 
    CardImageSquare, 
    CardTextSquared, 
    CardTitle, 
    CardWrapper 
} from "./styles";

import PersonIcon from '../../../../public/images/PersonIcon.svg';
import EyeIcon from '../../../../public/images/EyeIcon.svg';
import HandIcon from '../../../../public/images/HandIcon.svg';
import MagnifyerIcon from '../../../../public/images/MagnifyerIcon.svg';
import HeartIcon from '../../../../public/images/HeartIcon.svg';
import ClockIcon from '../../../../public/images/ClockIcon.svg';

interface ICardCarousel {
    width: string,
    heigth: string,
    image?: any,
    title?: string,
    description?: string,
    imageType: boolean,
    bigText: boolean,
    haveIcons?: boolean,
    padding: string,
}

export default function CardCarousel({
    width, 
    heigth, 
    image, 
    title, 
    description, 
    imageType, 
    bigText,
    haveIcons,
    padding
}: ICardCarousel) {
    return (
        <CardWrapper
            width={width}
            height={heigth}
            padding={padding}
        >   
            {
                imageType &&
                image &&
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
                !bigText &&
                image &&
                <CardImageRounded>
                    <div className="image">
                        <Image 
                            src={image} 
                            width={0}
                            height={0}
                            sizes={'100vw'}
                            style={{ width: '100%', height: 'auto' }}
                            alt={"Imagem do card"} 
                        />
                    </div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardImageRounded>
            }

            {
                !imageType &&
                bigText &&
                !haveIcons &&
                <CardTextSquared>
                    <div className="title">{title}</div>
                    <CardDescription>{description}</CardDescription>
                </CardTextSquared>
            }
            
            {
                !imageType &&
                bigText &&
                haveIcons &&
                <CardTextSquared>
                    <div className="title">Valores</div>
                    <CardIcons>
                        <div className="icon">
                            <Image
                                width={32}
                                height={36}
                                src={PersonIcon}
                                alt={'Icon image'}
                            />
                            Justiça
                        </div>
                        <div className="icon">
                            <Image
                                width={32}
                                height={36}
                                src={EyeIcon}
                                alt={'Icon image'}
                            />
                            Honestidade
                        </div>
                        <div className="icon">
                            <Image
                                width={32}
                                height={36}
                                src={HandIcon}
                                alt={'Icon image'}
                            />
                            Igualdade
                        </div>
                        <div className="icon">
                            <Image
                                width={32}
                                height={36}
                                src={MagnifyerIcon}
                                alt={'Icon image'}
                            />
                            Transparência
                        </div>
                        <div className="icon">
                            <Image
                                width={32}
                                height={36}
                                src={HeartIcon}
                                alt={'Icon image'}
                            />
                            Respeito
                        </div>
                        <div className="icon">
                            <Image
                                width={32}
                                height={36}
                                src={ClockIcon}
                                alt={'Icon image'}
                            />
                            Agilidade
                        </div>
                    </CardIcons>
                </CardTextSquared>
            }

        </CardWrapper>
    )
}