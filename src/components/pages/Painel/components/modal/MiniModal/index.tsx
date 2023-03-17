import { Container } from './styles';
import { IMiniModalProps, OptionsProps } from './types';
import * as S from './styles'
import { useEffect, useRef } from 'react';

export default function MiniModal({ options, onClick, closeModal }: IMiniModalProps) {

  function useOutsideAlerter(ref:any) {
    useEffect(() => {
      function handleClickOutside(event:any) {
        if (ref.current && !ref.current.contains(event.target)) {
          closeModal()
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <S.Container
      ref={wrapperRef}
      >
        
        {options?.map((row: OptionsProps, key: number) => (
          <button
          className={`${row?.value === 'excluir' ? 'boldText' : 'normalText'}`}
          key={key}
          onClick={() => {
            onClick(row?.value);
          }}
          >
            {row?.icon}
            {row?.label}
          </button>
        ))}
        </S.Container>
      );
    }
 