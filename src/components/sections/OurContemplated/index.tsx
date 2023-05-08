'use client';

// Components
import GreenCarousel from '@/components/global/GreenCarousel';
import CardCarousel from '@/components/shared/CardCarousel';
import { useGetAllContemplados } from '@/services/contemplados/GET/useGetAllContemplados';
import { IGetContemplados } from '@/services/contemplados/types';
import { clearString } from '@/utils/clearString';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Libraries
import Slider from 'react-slick';

// Image
import Person from '/public/images/imagePerson.jpg';

export default function OurContemplated() {
  const [actualContemplated, setActualContemplated] =
    useState<IGetContemplados[]>();

  const quantityOfImagesToShow =
    actualContemplated && actualContemplated?.length > 3
      ? 4
      : actualContemplated?.length;

  const SlideSettings = {
    dots: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: quantityOfImagesToShow,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
    className: 'slider',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const pathName = usePathname();

  const { allContemplados } = useGetAllContemplados('');

  function getContemplatedByCategory(category: string | undefined) {
    const allFilteredContemplated = allContemplados?.dataPaginada?.filter(
      (contemplado) => clearString(contemplado?.categoria) === category
    );

    const contemplatedWithPhotoAndActive = allFilteredContemplated?.filter(
      (contemplated) => {
        if (
          contemplated?.status === 'Ativo' &&
          contemplated?.contempladoImagens[0]?.url_foto
        ) {
          return contemplated;
        }
      }
    );

    setActualContemplated(contemplatedWithPhotoAndActive);
  }

  useEffect(() => {
    getContemplatedByCategory(pathName.split('/').pop());
  }, [allContemplados]);

  return (
    <>
      {actualContemplated?.length && (
        <GreenCarousel
          title="Nossos consorciados contemplados"
          height="350"
          marginBottom="87"
        >
          <Slider {...SlideSettings}>
            {actualContemplated?.map((contemplated) => {
              if (
                contemplated?.status === 'Inativo' &&
                contemplated?.contempladoImagens[0]?.url_foto
              )
                return;
              return (
                <CardCarousel
                  width="276"
                  heigth="276"
                  padding="8"
                  image={contemplated?.contempladoImagens[0]?.url_foto}
                  imageType={true}
                  bigText={false}
                />
              );
            })}
          </Slider>
        </GreenCarousel>
      )}
    </>
  );
}
