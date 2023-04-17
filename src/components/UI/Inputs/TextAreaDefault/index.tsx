import { useRef, useState, useCallback, InputHTMLAttributes } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { CharCount, Container, ContainerInput, Error } from './styles';

interface ErrorInput {
  message: string;
  isError: boolean;
}

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  maxCharLength?: number;
  charQuantity?: number;
  error?: string | any;
}

export function TextAreaDefault({
  label,
  maxCharLength,
  charQuantity,
  error,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

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
    <Container>
      <label htmlFor={label} className="label">
        {label}
      </label>

      <ContainerInput
        isErrored={!!error}
        isFocused={isFocused}
        isFilled={isFilled}
      >
        <textarea
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          maxLength={maxCharLength}
          ref={inputRef}
          id={label}
          {...rest}
        />

        {error && (
          <Error title={error}>
            <FiAlertCircle size={20} color="#E62965" />
          </Error>
        )}
      </ContainerInput>
      {maxCharLength && (
        <CharCount
          className={
            charQuantity && charQuantity >= maxCharLength
              ? 'textRed'
              : 'textNormal'
          }
        >
          {charQuantity}/{maxCharLength}
        </CharCount>
      )}
    </Container>
  );
}
