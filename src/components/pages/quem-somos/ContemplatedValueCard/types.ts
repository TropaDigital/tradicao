import { HTMLAttributes, Ref } from 'react';

export interface IContemplatedCardProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  ref?: Ref<HTMLDivElement>;
}
