// Components
import BrandCard from "@/components/shared/BrandCard";
import BrandsCarousel from "@/components/shared/BrandsCarousel";
import Image from "next/image";

// Libraries
import Slider from "react-slick";

// Images
import FiatLogo from '/public/images/FiatLogo.svg';
import BmwLogo from '/public/images/BMWLogo.svg';
import CheryLogo from '/public/images/CheryLogo.svg';
import ChevroletLogo from '/public/images/ChevroletLogo.svg';
import CitroenLogo from '/public/images/CitroenLogo.svg';
import FordLogo from '/public/images/FordLogo.svg';
import JacLogo from '/public/images/JacLogo.svg';
import JeepLogo from '/public/images/JeepLogo.svg';
import MercedesLogo from '/public/images/MercedesLogo.svg';
import PeugeotLogo from '/public/images/PeugeotLogo.svg';
import VolksLogo from '/public/images/VolksLogo.svg';

const SlideSettings = {
  dots: false,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 4000,
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: false,
  className: 'slider',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,          
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
}

interface IAutoProps {
    id: number,
    logo: any,    
    altImg: string,
}

export default function AutoConsortium() {

  const autoArray: IAutoProps[] = [
    {
      id: 1,
      logo: FiatLogo,
      altImg: 'Logo da empresa Fiat'
    },
    {
      id: 2,
      logo: BmwLogo,
      altImg: 'Logo da empresa BMW'
    },
    {
      id: 3,
      logo: CheryLogo,
      altImg: 'Logo da empresa Chery'
    },
    {
      id: 4,
      logo: ChevroletLogo,
      altImg: 'Logo da empresa GM/Chevrolet'
    },
    {
      id: 5,
      logo: CitroenLogo,
      altImg: 'Logo da empresa Citroen'
    },
    {
      id: 6,
      logo: FordLogo,
      altImg: 'Logo da empresa Ford'
    },
    {
      id: 7,
      logo: JacLogo,
      altImg: 'Logo da empresa Jac'
    },
    {
      id: 8,
      logo: JeepLogo,
      altImg: 'Logo da empresa Jeep'
    },
    {
      id: 9,
      logo: MercedesLogo,
      altImg: 'Logo da empresa Mercedes Benz'
    },
    {
      id: 10,
      logo: PeugeotLogo,
      altImg: 'Logo da empresa Peugeot'
    },
    {
      id: 11,
      logo: VolksLogo,
      altImg: 'Logo da empresa Volkswagen'
    },
  ]

    return (
        <BrandsCarousel>
            <Slider {...SlideSettings}>

              {
                autoArray.map((row: any) => (
                  <BrandCard key={row.id}>
                      <Image
                      width={158}
                      height={96}
                      src={row.logo}
                      alt={row.altImg}
                      className='auto'
                      />
                  </BrandCard>
                ))
              }
            
                

            </Slider>
        </BrandsCarousel>
    )
}