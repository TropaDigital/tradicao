import { StaticImageData } from 'next/image';

export interface IPropertiesConsortium {
  id: number;
  image: StaticImageData | string;
  title: string;
  altImg: string;
}
