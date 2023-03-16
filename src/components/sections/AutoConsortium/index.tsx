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
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 6,
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

export default function AutoConsortium() {

    return (
        <BrandsCarousel>
            <Slider {...SlideSettings}>

                <BrandCard>
                    <Image
                    width={157}
                    height={96}
                    src={FiatLogo}
                    alt={'Icon image'}
                    className='auto'
                    />
                </BrandCard>
            
                <BrandCard>
                    <Image
                    width={157}
                    height={96}
                    src={CheryLogo}
                    alt={'Icon image'}
                    className='auto'
                    />
                </BrandCard>
            
                <BrandCard>
                    <Image
                    width={157}
                    height={96}
                    src={BmwLogo}
                    alt={'Icon image'}
                    className='auto'
                    />
                </BrandCard>
            
                <BrandCard>
                    <Image
                    width={300}
                    height={96}
                    src={ChevroletLogo}
                    alt={'Icon image'}
                    className='auto'
                    />
                </BrandCard>
            
                <BrandCard>
                    <Image
                    width={157}
                    height={96}
                    src={MercedesLogo}
                    alt={'Icon image'}
                    className='auto'
                    />
                </BrandCard>
            
                <BrandCard>
                    <Image
                    width={157}
                    height={96}
                    src={JacLogo}
                    alt={'Icon image'}
                    className='auto'
                    />
                </BrandCard>
            
                <BrandCard>
                    <Image
                    width={157}
                    height={96}
                    src={FordLogo}
                    alt={'Icon image'}
                    className='auto'
                    />
                </BrandCard>
            
                <BrandCard>
                    <Image
                    width={157}
                    height={96}
                    src={CitroenLogo}
                    alt={'Icon image'}
                    className='auto'
                    />
                </BrandCard>
            
                <BrandCard>
                    <Image
                    width={157}
                    height={96}
                    src={VolksLogo}
                    alt={'Icon image'}
                    className='auto'
                    />
                </BrandCard>
            
                <BrandCard>
                    <Image
                    width={157}
                    height={96}
                    src={PeugeotLogo}
                    alt={'Icon image'}
                    className='auto'
                    />
                </BrandCard>
            
                <BrandCard>
                    <Image
                    width={157}
                    height={96}
                    src={JeepLogo}
                    alt={'Icon image'}
                    className='auto'
                    />
                </BrandCard> 

            </Slider>
        </BrandsCarousel>
    )
}