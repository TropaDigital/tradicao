import GreenCarousel from '@/components/global/GreenCarousel';
import CardCarousel from '@/components/shared/CardCarousel';
import Person from '/public/images/imagePerson.jpg';

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

  const BrandSettings = {
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
                  

      
          <CardCarousel 
            width='276'
            heigth='276'
            padding='20'
            image={Person}
            imageType={true}
            bigText={false}
          />       
        

      
          <CardCarousel 
            width='360'
            heigth='200'
            padding='34'
            image=''
            imageType={false}
            bigText={true}
            haveIcons={true}              
          />       
        

      
          <CardCarousel 
            width='360'
            heigth='200'
            padding='34'
            title='Missão'
            description='Possibilitar conquistas, proporcionando à sociedade brasileira a aquisição de bens de consumo, livres de juros abusivos de forma transparente e justa.'
            imageType={false}
            bigText={true}
            haveIcons={false}              
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
            width='276'
            heigth='276'
            padding='20'
            image={Person}
            imageType={true}
            bigText={false}
          />       
          
        </Slider>
        
      </GreenCarousel>
  )
}
