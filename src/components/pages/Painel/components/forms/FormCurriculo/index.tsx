import { useEffect, useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import * as S from '../styles';
import { Formik, Form } from 'formik';
import { CurriculoSchema } from './yupSchema';
import DefaultInput from '@/components/UI/DefaultInput';
import { IForm } from '../types';
import UploadFile from '@/components/UI/UploadFile';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { onlyLetterMask } from '@/utils/masks';
import { useUpdateCandidate } from '@/services/trabalhe-conosco/PUT/useUpdateCandidate';

const FormCurriculo = ({ modalOpen, actualItem, onSubmit }: IForm) => {
  const [fileName, setFileName] = useState<string>('');

  const { updateCandidate } = useUpdateCandidate();

  useEffect(() => {
    if (actualItem) {
      setFileName(
        `curriculo-${actualItem?.nome?.replaceAll(' ', '-')?.toLowerCase()}.pdf`
      );
    }
  }, [actualItem]);

  return (
    <S.Container>
      <Formik
        initialValues={{
          nome: actualItem?.nome ?? '',
          vaga: actualItem?.vaga ?? '',
          curriculo_pdf: actualItem?.curriculo_pdf ?? ''
        }}
        validationSchema={CurriculoSchema}
        onSubmit={(values) => {
          updateCandidate({
            candidateBody: values,
            id: actualItem?.id_candidato
          });

          onSubmit();
        }}
      >
        {({
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
          handleChange
        }) => (
          <>
            <Form onSubmit={handleSubmit} className="formAddProductWrapper">
              <h2 className="formTitle">Currículo</h2>

              <div className="inputsProductWrapper">
                <InputDefault
                  label="Nome"
                  placeholder="Nome do Candidato"
                  name="nome"
                  value={values?.nome}
                  type="text"
                  onChange={handleChange}
                  error={touched?.nome && errors?.nome}
                />

                <InputDefault
                  label="Vaga"
                  placeholder="Auxiliar Administrativo"
                  name="vaga"
                  value={values?.vaga}
                  onChange={handleChange}
                  error={touched?.vaga && errors?.vaga}
                />

                <UploadFile
                  filename={fileName}
                  onPostFile={(file, e) => {
                    setFieldValue('url_pdf', file);
                    setFileName(e?.target?.value?.replace(/.*[\/\\]/, ''));
                  }}
                  label="Currículo"
                />

                <div className="lineElementsWrapper buttonsWrapper">
                  <ButtonDefault
                    color="transparent"
                    type="button"
                    onClick={() => onSubmit()}
                    className="button"
                  >
                    Cancelar
                  </ButtonDefault>
                  <ButtonDefault
                    color="darkButton"
                    className="button"
                    type="submit"
                  >
                    {modalOpen === 'publicar' ? 'Cadastrar' : 'Atualizar'}
                  </ButtonDefault>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </S.Container>
  );
};

export default FormCurriculo;
