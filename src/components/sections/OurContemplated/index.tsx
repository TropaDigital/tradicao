// Components
import GreenCarousel from '@/components/global/GreenCarousel';
import CardCarousel from '@/components/shared/CardCarousel';

// Libraries
import Slider from "react-slick";

// Image
import Person from '/public/images/imagePerson.jpg';

export default function OurContemplated() {

    const SlideSettings = {
        dots: false,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 4,
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
            breakpoint: 800,
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
            title='Nossos consorciados contemplados'
            height='350'
            marginBottom='87'
        >
            <Slider {...SlideSettings}>
            
                <CardCarousel 
                    width='276'
                    heigth='276'
                    padding='8'
                    image={Person}
                    imageType={true}
                    bigText={false}
                /> 
                <CardCarousel 
                    width='276'
                    heigth='276'
                    padding='8'
                    image={Person}
                    imageType={true}
                    bigText={false}
                /> 
                <CardCarousel 
                    width='276'
                    heigth='276'
                    padding='8'
                    image={Person}
                    imageType={true}
                    bigText={false}
                /> 
                <CardCarousel 
                    width='276'
                    heigth='276'
                    padding='8'
                    image={Person}
                    imageType={true}
                    bigText={false}
                /> 
                <CardCarousel 
                    width='276'
                    heigth='276'
                    padding='8'
                    image={Person}
                    imageType={true}
                    bigText={false}
                /> 
                <CardCarousel 
                    width='276'
                    heigth='276'
                    padding='8'
                    image={Person}
                    imageType={true}
                    bigText={false}
                /> 
                <CardCarousel 
                    width='276'
                    heigth='276'
                    padding='8'
                    image={Person}
                    imageType={true}
                    bigText={false}
                /> 

            </Slider>

        </GreenCarousel>
    )
}