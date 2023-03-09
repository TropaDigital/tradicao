// // import { InfoIcon, InnerArrow, OuterArrow } from '@/src/assets/icons';
// // import ToolTips from '@/src/components/global/ToolTips';
// // import Tooltip from '@mui/material/Tooltip';
// // import { InfoIcon, InnerArrow, OuterArrow } from '../../../../Svg';
// import * as S from './styles';
// interface IInputQuantity extends React.InputHTMLAttributes<HTMLInputElement> {
//   label: string;
//   min?: string | number;
//   max?: string | number;
//   width?: number;
//   tooltip?: string;
//   error?: any;
// }

// const InputQuantity = ({
//   label,
//   tooltip,
//   min,
//   max,
//   width,
//   error,
//   ...rest
// }: IInputQuantity) => {
//   return (
//     <S.Container width={width}>
//       {tooltip && (
//         <Tooltip title={tooltip}>
//           <S.ToolTipContainer>
//             <label className="inputLabel">{label}</label>
//             <InfoIcon size={16} color={colors.primaryGrey} />
//           </S.ToolTipContainer>
//         </Tooltip>
//       )}
//       {!tooltip && <label className="inputLabel">{label}</label>}
//       <S.InputWrapper>
//         <input
//           type="number"
//           className="inputField"
//           {...rest}
//           min={min}
//           max={max}
//         />
//         <div className="innerButton">
//           <InnerArrow />
//         </div>
//         <div className="outerButton">
//           <OuterArrow />
//         </div>
//       </S.InputWrapper>
//       {error && <span>{error}</span>}
//     </S.Container>
//   );
// };

// export default InputQuantity;

export {}