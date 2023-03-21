// Components
import BrandCard from '@/components/shared/BrandCard';
import BrandsCarousel from '@/components/shared/BrandsCarousel';
import Image from 'next/image';

// Libraries
import Slider from 'react-slick';

// Images
import VolksTruck from '../../../../public/images/VolksTrucksLogo.svg';
import VolvoTruck from '../../../../public/images/VolvoTrucksLogo.svg';
import ScaniaTruck from '../../../../public/images/ScaniaTrucksLogo.svg';
import MercedesTruck from '../../../../public/images/MercedesTrucksLogo.svg';
import FordTruck from '../../../../public/images/FordTrucksLogo.svg';
import AgraleTruck from '../../../../public/images/AgraleTrucksLogo.svg';
import Marcopolo from '../../../../public/images/MarcopoloTrucksLogo.svg';
import JinbeiTruck from '../../../../public/images/JinbeiTrucksLogo.svg';
import Iveco from '../../../../public/images/IvecoTrucksLogo.svg';

const SlideSettings = {
  dots: false,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 3000,
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
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
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
};

interface ITruckProps {
  id: number;
  logo: string | any;
  altImg: string;
}

export default function TruckConsortium() {
  const trucksArray: ITruckProps[] = [
    {
      id: 1,
      logo: VolksTruck,
      altImg: 'Logo da empresa Volkswagen'
    },
    {
      id: 2,
      logo: VolvoTruck,
      altImg: 'Logo da empresa Volvo'
    },
    {
      id: 3,
      logo: ScaniaTruck,
      altImg: 'Logo da empresa Scania'
    },
    {
      id: 4,
      logo: MercedesTruck,
      altImg: 'Logo da empresa Mercedes Benz'
    },
    {
      id: 5,
      logo: FordTruck,
      altImg: 'Logo da empresa Ford'
    },
    {
      id: 6,
      logo: AgraleTruck,
      altImg: 'Logo da empresa Agrale'
    },
    {
      id: 7,
      logo: Marcopolo,
      altImg: 'Logo da empresa Marcopolo'
    },
    {
      id: 8,
      logo: JinbeiTruck,
      altImg: 'Logo da empresa JinBei'
    },
    {
      id: 1,
      logo: Iveco,
      altImg: 'Logo da empresa Iveco'
    }
  ];

  return (
    <BrandsCarousel>
      <Slider {...SlideSettings}>
        {trucksArray.map((row: any) => (
          <BrandCard key={row.id}>
            <Image
              width={130}
              height={130}
              src={row.logo}
              alt={row.altImg}
              className="truck"
            />
          </BrandCard>
        ))}
      </Slider>
    </BrandsCarousel>
  );
}
