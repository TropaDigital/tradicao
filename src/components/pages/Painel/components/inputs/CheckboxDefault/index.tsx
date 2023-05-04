import React, {
  useRef,
  useState,
  useCallback,
  InputHTMLAttributes
} from 'react';
import { IconBaseProps } from 'react-icons';
import { BsCheck } from 'react-icons/bs';

import { Container, ContainerInput, ContainerWrapper, Error } from './styles';
import { ErrorInputMessage } from '@/components/UI/Inputs/InputDefault/styles';

interface ErrorInput {
  message: string;
  isError: boolean;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | any;
  error?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export function CheckboxDefault({
  label,
  error,
  icon: Icon,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <>
      <ContainerWrapper>
        <Container>
          <input
            type="checkbox"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            ref={inputRef}
            {...rest}
          />

          <span className="checkbox">
            <BsCheck />
          </span>

          {/* {error?.isError && (
          <Error title={error.message}>
          <FiAlertCircle size={20} color="#E62965" />
          </Error>
        )} */}
          {/* </ContainerInput> */}
        </Container>
        <span className="labelInput">{label}</span>
      </ContainerWrapper>
      {error && (
        <ErrorInputMessage style={{ marginTop: '6px' }} title={error}>
          <span>{error}</span>
        </ErrorInputMessage>
      )}
    </>
  );
}
