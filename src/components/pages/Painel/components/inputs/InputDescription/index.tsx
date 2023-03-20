import * as S from './styles';
import Tooltip from '@mui/material/Tooltip';
// import { InfoIcon } from '../../../../Svg';
interface IInputDescription
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  minHeight?: number;
  tooltip?: string;
  error?: any;
}

const InputDescription = ({
  label,
  minHeight,
  tooltip,
  error,
  ...rest
}: IInputDescription) => {
  return (
    <S.Container minHeight={minHeight}>
      {tooltip && (
        <Tooltip title={tooltip}>
          <S.ToolTipContainer>
            <label className="inputLabel">{label}</label>
            {/* <InfoIcon size={16} color={colors.primaryGrey} /> */}
          </S.ToolTipContainer>
        </Tooltip>
      )}
      {!tooltip && <label className="inputLabel">{label}</label>}

      <textarea className="inputField" {...rest} />
      {error && <span>{error}</span>}
    </S.Container>
  );
};

export default InputDescription;
