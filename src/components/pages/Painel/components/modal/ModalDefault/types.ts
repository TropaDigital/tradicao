import { ReactNode } from 'react';

export interface modalProps {
  onClose: () => void;
  setData: (DTO: any) => void;
  children: ReactNode;
}
