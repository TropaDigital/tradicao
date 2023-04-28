import { StaticImageData } from 'next/image';
import { HTMLAttributes } from 'react';

export interface BenefitsCardsProps extends HTMLAttributes<HTMLDivElement> {
  image: string | StaticImageData;
  title: string;
}
