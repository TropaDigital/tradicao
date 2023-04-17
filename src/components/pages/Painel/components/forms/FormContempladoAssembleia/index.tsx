import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { onlyLetterMask } from '@/utils/masks';
import { Form, Formik } from 'formik';
import ButtonDefault from '../../ButtonDefault';
import * as S from '../styles';
import { IForm } from '../types';
import { CurriculoSchema } from './yupSchema';

const FormContempladoAssembleia = ({
  modalOpen,
  actualItem,
  onSubmit
}: IForm) => {
  return (
    <S.Container>
      <Formik
        initialValues={{
          nome: actualItem?.nome ?? '',
          grupo: actualItem?.grupo ?? '',
          cota: actualItem?.cota ?? '',
          tipo_de_contemplacao: actualItem?.tipo_de_contemplacao ?? '',
          representante: actualItem?.representante ?? ''
        }}
        validationSchema={CurriculoSchema}
        onSubmit={(values) => {
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
              <h2 className="formTitle">Contemplado</h2>

              <div className="inputsProductWrapper">
                <InputDefault
                  label="Nome"
                  placeholder="Mário C."
                  name="nome"
                  value={values?.nome}
                  type="text"
                  onChange={(e) => {
                    setFieldValue('nome', onlyLetterMask(e?.target?.value));
                  }}
                  error={touched?.nome && errors?.nome}
                />

                <div className="lineElementsWrapper">
                  <InputDefault
                    label="Grupo"
                    placeholder="1257"
                    name="grupo"
                    value={values?.grupo}
                    onChange={handleChange}
                    // error={touched?.cargo && errors?.cargo}
                  />

                  <InputDefault
                    label="Cota"
                    placeholder="932"
                    name="cota"
                    value={values?.cota}
                    onChange={handleChange}
                    // error={touched?.cargo && errors?.cargo}
                  />
                </div>

                <div className="lineElementsWrapper">
                  <InputDefault
                    label="Tipo de Contemplação"
                    placeholder="Sorteio"
                    name="tipo_de_contemplacao"
                    value={values?.tipo_de_contemplacao}
                    onChange={handleChange}
                    // error={touched?.cargo && errors?.cargo}
                  />

                  <InputDefault
                    label="Representante"
                    placeholder="0001"
                    name="representante"
                    value={values?.representante}
                    onChange={handleChange}
                    // error={touched?.cargo && errors?.cargo}+
                  />
                </div>

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

export default FormContempladoAssembleia;
