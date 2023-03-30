export interface IForm extends React.FormHTMLAttributes<HTMLFormElement> {
  modalOpen: string;
  actualItem?: any;
  onSubmit: () => void;
}
