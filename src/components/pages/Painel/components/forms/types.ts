import { IGetContemplados } from '@/services/contemplados/types';

export interface IForm extends React.FormHTMLAttributes<HTMLFormElement> {
  modalOpen: string;
  actualItem?: IGetContemplados;
  onSubmit: () => void;
}
