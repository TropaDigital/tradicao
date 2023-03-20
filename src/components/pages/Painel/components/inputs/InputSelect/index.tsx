import * as S from './styles';

interface IInputSelect extends React.InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: string[];
  values?: string;
  error?: any;
  maxWidth?: number;
}

const InputSelect = ({
  label,
  options,
  name,
  values,
  error,
  maxWidth,
  ...rest
}: IInputSelect) => {
  return (
    <S.Container maxWidth={maxWidth}>
      <label className="inputLabel">{label}</label>
      <select className="inputField" name={name} {...rest}>
        <option disabled selected value="">
          Selecione
        </option>
        {options.map((opt, key) => {
          return (
            <option selected={opt === values} value={opt} key={key}>
              {opt}
            </option>
          );
        })}
      </select>
      {error && <span>{error}</span>}
    </S.Container>
  );
};

export default InputSelect;
