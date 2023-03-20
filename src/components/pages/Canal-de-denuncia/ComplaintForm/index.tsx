import ModalDefault from '@/components/shared/Modal';
import { Form, Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { IComplaintForm, IDenunciaBodyPost } from './types';
import * as S from './styles';
import DefaultInput from '@/components/UI/DefaultInput';
import { TextAreaDefault } from '@/components/UI/Inputs/TextAreaDefault';
import Button from '@/components/UI/Button';
import { complaintYupSchema } from './yupSchema';
import { useOutsideAlerter } from '@/utils/useOutsideAlerter';
import { useSentComplaint } from '@/services/denuncia/POST/useSentComplaint';
import { ShieldCheckMarkIcon } from '@/assets/icons';

const ComplaintForm = ({
  isOpen,
  closeFormComplaint,
  setOpenState,
  ...rest
}: IComplaintForm) => {
  const [complaintWasSent, setComplaintWasSent] = useState<boolean>(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, isOpen);

  const { sentComplaint } = useSentComplaint();

  return (
    <>
      <ModalDefault openState={isOpen} setOpenState={setOpenState}>
        {!complaintWasSent ? (
          <S.Container {...rest}>
            <S.FormHeader>
              <h3 className="complaint-title">Realizar uma Denúncia</h3>
            </S.FormHeader>
            <Formik
              initialValues={{
                nome: '',
                email: '',
                celular: '',
                denuncia: '',
                status: ''
              }}
              validationSchema={complaintYupSchema}
              onSubmit={(values) => {
                const nome = values.nome.trim();
                const celular = values.celular.trim();
                const email = values.email.trim();

                const denunciaBody: IDenunciaBodyPost = {
                  texto_denuncia: values.denuncia
                };

                if (nome) denunciaBody.nome = nome;
                if (celular) denunciaBody.celular = celular;
                if (email) denunciaBody.email = email;

                setComplaintWasSent(true);
                sentComplaint(denunciaBody);
              }}
            >
              {({
                errors,
                values,
                touched,
                handleChange,
                handleSubmit,
                setFieldValue
              }) => (
                <Form onSubmit={handleSubmit} className="complaint-form">
                  <DefaultInput
                    label="Nome Completo"
                    value={values.nome}
                    onChange={handleChange}
                    name="nome"
                    error={touched.nome && errors.nome}
                  />
                  <DefaultInput
                    label="E-mail"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    error={touched.email && errors.email}
                  />
                  <DefaultInput
                    label="Celular"
                    value={values.celular}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      handleChange(e);
                      setFieldValue(
                        'celular',
                        e.target.value.replace(
                          /^(\d{2})(\d{5})(\d{4})$/,
                          '$1 $2-$3'
                        )
                      );
                    }}
                    name="celular"
                    maxLength={13}
                    error={touched.celular && errors.celular}
                  />
                  <TextAreaDefault
                    label="Denúncia*"
                    value={values.denuncia}
                    onChange={handleChange}
                    name="denuncia"
                    error={touched.denuncia && errors.denuncia}
                  />
                  <Button degrade radius="rounded" type="submit">
                    Enviar Denúncia
                  </Button>
                </Form>
              )}
            </Formik>
          </S.Container>
        ) : (
          <S.ConfirmModal>
            <ShieldCheckMarkIcon />

            <h3>Denúncia enviada, acompanhe o processo em nosso site</h3>
            <p>
              Acesse o status da sua denúncia através do protocolo: 0540198989
            </p>

            <Button
              degrade
              radius="rounded"
              onClick={() => {
                setComplaintWasSent(false);
                closeFormComplaint();
              }}
            >
              Continuar
            </Button>
          </S.ConfirmModal>
        )}
      </ModalDefault>
    </>
  );
};

export default ComplaintForm;
