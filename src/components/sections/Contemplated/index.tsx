import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import GreenCarousel from '@/components/global/GreenCarousel';
import CardCarousel from '@/components/shared/CardCarousel';
import Person from '/public/images/imagePerson.jpg';

export default function Contemplated() {
  return (
    <GreenCarousel
        title='Contemplados'
        height='350'
        marginBottom='110'
      >   
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          className="my-swiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          // loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>          

          <SwiperSlide>
            <CardCarousel 
              width='276'
              heigth='276'
              padding='20'
              image={Person}
              imageType={true}
              bigText={false}
            />       
          </SwiperSlide>

          <SwiperSlide>
            <CardCarousel 
              width='360'
              heigth='200'
              padding='34'
              image=''
              imageType={false}
              bigText={true}
              haveIcons={true}              
            />       
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
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
          </SwiperSlide>

          <SwiperSlide>
            <CardCarousel 
              width='276'
              heigth='276'
              padding='20'
              image={Person}
              imageType={true}
              bigText={false}
            />       
          </SwiperSlide>
          
        </Swiper>
      </GreenCarousel>
  )
}
