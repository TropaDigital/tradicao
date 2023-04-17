import { ChevronIcon } from '@/assets/icons';
import * as S from './styles';

interface ISelect {
  options: string[];
}

const Select = ({ options }: ISelect) => {
  return (
    <S.Container>
      <div className="svgWrapper">
        <ChevronIcon />
      </div>
      <select>
        <option selected disabled value="">
          Selecione
        </option>
        {options.map((option) => (
          <option
            value={option.replaceAll(' ', '-').toLowerCase()}
            key={option}
          >
            {option}
          </option>
        ))}
      </select>
    </S.Container>
  );
};

export default Select;
