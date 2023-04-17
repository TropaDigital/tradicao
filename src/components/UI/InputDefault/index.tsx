import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

import { Container } from './styles';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value: string | any;
  name?: string;
  type?: 'text' | 'password' | 'email' | 'tel' | 'number';
  mask?: string;
  onChangeText: (value: string | any) => void;
  search?: boolean;
  className?: string;
  title?: string;
  disabled?: boolean;
  error?: string | any;
}

const InputDefault: React.FC<InputProps> = ({
  placeholder,
  value,
  name,
  mask = '',
  onChangeText,
  type,
  search = false,
  title = null,
  className = '',
  disabled = false,
  error = '',
  ...rest
}) => {
  const [valueInput, setValueInput] = useState<string>(value);

  useEffect(() => {
    setValueInput(value);
  }, [value]);

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    setValueInput(e.currentTarget.value);
    onChangeText(e.currentTarget.value);
  }

  return (
    <Container className={`default-input ${className}`}>
      {/* {search && <IconSearch />} */}
      {title && <p className="title">{title}</p>}
      <InputMask
        type={type}
        value={valueInput}
        name={name}
        onChange={handleOnChange}
        placeholder={placeholder}
        disabled={disabled}
        mask={mask}
        {...rest}
      />
      <span>{error}</span>
    </Container>
  );
};

export default InputDefault;
