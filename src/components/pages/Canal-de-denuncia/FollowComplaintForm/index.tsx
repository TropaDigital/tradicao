import ModalDefault from '@/components/shared/Modal';
import Button from '@/components/UI/Button';
import DefaultInput from '@/components/UI/DefaultInput';
import React, { useState } from 'react';
import * as S from './styles';

const FollowComplaintForm = () => {
  const [hasProtocol, setHasProtocol] = useState(false);

  const checkComplaintStatus = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    if (data.protocol === '0540198989') {
      setHasProtocol(true);
    }
  };

  return (
    <>
      <ModalDefault>
        {!hasProtocol && (
          <form onSubmit={checkComplaintStatus}>
            <h2 className="title">Acompanhamento de denúncia</h2>
            <DefaultInput
              placeholder="Digite o protocolo da sua denúncia"
              label="Protocolo"
              name="protocol"
            />
            <Button degrade radius="rounded" type="submit">
              Acompanhar
            </Button>
          </form>
        )}
        {hasProtocol && (
          <S.Container>
            <h3>
              O funcionário denunciado foi demitido, agradecemos sua denúncia!
            </h3>
          </S.Container>
        )}
      </ModalDefault>
    </>
  );
};

export default FollowComplaintForm;
