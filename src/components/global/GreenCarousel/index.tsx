import { ReactNode } from 'react';
import CenterWrapper from '../CenterWrapper';
import {
  CarouselWrapper,
  SubtitleCarousel,
  TitleCarousel,
  TitleCentralize
} from './styles';

interface ICarouselWrapper {
  children: ReactNode;
  title: string;
  subtitle?: string;
  height: string;
  marginBottom: string;
  padTopCarousel?: number;
}

export default function GreenCarousel({
  children,
  title,
  height,
  marginBottom,
  subtitle,
  padTopCarousel
}: ICarouselWrapper) {
  return (
    <CarouselWrapper
      height={height}
      marginBottom={marginBottom}
      padTop={padTopCarousel}
      data-aos="fade-up"
    >
      <TitleCentralize>
        <TitleCarousel>{title}</TitleCarousel>
        <SubtitleCarousel>{subtitle}</SubtitleCarousel>
      </TitleCentralize>

      <CenterWrapper>{children}</CenterWrapper>
    </CarouselWrapper>
  );
}
