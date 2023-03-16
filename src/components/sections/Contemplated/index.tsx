// Components
import GreenCarousel from '@/components/global/GreenCarousel';
import CardCarousel from '@/components/shared/CardCarousel';

// Image
import Person from '/public/images/imagePerson.jpg';

// Libraries
import Slider from "react-slick";

export default function Contemplated() {
  const SlideSettings = {
    dots: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <GreenCarousel
        title='Contemplados'
        height='350'
        marginBottom='110'
      >   
        <Slider {...SlideSettings}>
        
          <CardCarousel 
            width='360'
            heigth='300'
            padding='20'
            image={Person}
            imageType={false}
            bigText={false}
            title='Título genérico'
            description="Aqui um exemplo de um card que contem imagem e texto"
          />  
        
          <CardCarousel 
            width='360'
            heigth='300'
            padding='20'
            image={Person}
            imageType={false}
            bigText={false}
            title='Título genérico'
            description="Aqui um exemplo de um card que contem imagem e texto"
          />     
      
          <CardCarousel 
            width='360'
            heigth='300'
            padding='20'
            image={Person}
            imageType={false}
            bigText={false}
            title='Título genérico'
            description="Aqui um exemplo de um card que contem imagem e texto"
          />  
          
        </Slider>
        
      </GreenCarousel>
  )
}
