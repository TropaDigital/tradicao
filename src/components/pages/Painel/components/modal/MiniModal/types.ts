import { ReactNode } from 'react';

export interface IMiniModalProps {
  options: Array<OptionsProps>;
  onClick: (event: string) => void;
  closeModal: ()=>void
}

export interface OptionsProps {
  label: string;
  value: string;
  icon?: ReactNode;
}
