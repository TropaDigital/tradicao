import * as S from "./styles";

interface ICheckbox {
  label?: string;
  id?: string;
}

const Checkbox = ({ label, id, ...rest }: ICheckbox) => {
  return (
    <>
      {label !== "" && (
        <S.Container>
          <label>
            <S.CheckRemember id={id} className="customCheckbox" {...rest} />
            <p className="rememberMeText">{label}</p>
          </label>
        </S.Container>
      )}
      {label === "" && <S.CheckRemember id={id} className="customCheckbox" />}
    </>
  );
};

export default Checkbox;
