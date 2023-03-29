// Components
import GreenCarousel from '@/components/global/GreenCarousel';
import CardCarousel from '@/components/shared/CardCarousel';

// Image
import Person from '/public/images/imagePerson.jpg';

// Libraries
import Slider from 'react-slick';
import { useGetAllContemplados } from '@/services/contemplados/GET/useGetAllContemplados';

export default function Contemplated() {
  const SlideSettings = {
    dots: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
    className: 'slider',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 4500,
          autoplaySpeed: 6000
        }
      }
    ]
  };

  const { allContemplados } = useGetAllContemplados();

  return (
    <GreenCarousel title="Contemplados" height="350" marginBottom="110">
      <Slider {...SlideSettings}>
        {allContemplados?.dataPaginada?.map((contemplado) => {
          if (contemplado?.status === 'Inativo') return;
          return (
            <CardCarousel
              width="360"
              heigth="300"
              padding="20"
              image={contemplado?.contempladoImagens[0].url_foto}
              imageType={false}
              bigText={false}
              title={contemplado?.nome}
              description={contemplado?.depoimento}
              key={contemplado?.id_contemplado}
            />
          );
        })}
      </Slider>
    </GreenCarousel>
  );
}
