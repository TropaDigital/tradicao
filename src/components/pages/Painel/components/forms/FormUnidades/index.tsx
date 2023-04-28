import ButtonDefault from '../../ButtonDefault';
import { SelectDefault } from '../../inputs/SelectDefault';
import * as S from '../styles';
import { Formik, Form } from 'formik';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { IForm } from '../types';
import { UnitSchema } from './yupSchema';
import { useCreateUnit } from '@/services/unidades/POST/useCreateUnit';
import { useUpdateUnit } from '@/services/unidades/PUT/useUpdateUnit';
import { useEffect, useState } from 'react';
import ViaCepClass from '@/services/via-cep';
import { cepMask, phoneMask } from '@/utils/masks';

const FormUnidades = ({ modalOpen, actualItem, onSubmit }: IForm) => {
  const allStates = [
    { uf: 'AC', nome: 'Acre' },
    { uf: 'AL', nome: 'Alagoas' },
    { uf: 'AP', nome: 'Amapá' },
    { uf: 'AM', nome: 'Amazonas' },
    { uf: 'BA', nome: 'Bahia' },
    { uf: 'CE', nome: 'Ceará' },
    { uf: 'DF', nome: 'Distrito Federal' },
    { uf: 'ES', nome: 'Espirito Santo' },
    { uf: 'GO', nome: 'Goiás' },
    { uf: 'MA', nome: 'Maranhão' },
    { uf: 'MS', nome: 'Mato Grosso do Sul' },
    { uf: 'MT', nome: 'Mato Grosso' },
    { uf: 'MG', nome: 'Minas Gerais' },
    { uf: 'PA', nome: 'Pará' },
    { uf: 'PB', nome: 'Paraíba' },
    { uf: 'PR', nome: 'Paraná' },
    { uf: 'PE', nome: 'Pernambuco' },
    { uf: 'PI', nome: 'Piauí' },
    { uf: 'RJ', nome: 'Rio de Janeiro' },
    { uf: 'RN', nome: 'Rio Grande do Norte' },
    { uf: 'RS', nome: 'Rio Grande do Sul' },
    { uf: 'RO', nome: 'Rondônia' },
    { uf: 'RR', nome: 'Roraima' },
    { uf: 'SC', nome: 'Santa Catarina' },
    { uf: 'SP', nome: 'São Paulo' },
    { uf: 'SE', nome: 'Sergipe' },
    { uf: 'TO', nome: 'Tocantins' }
  ];

  const { createUnit } = useCreateUnit();
  const { updateUnit } = useUpdateUnit();

  const address = {
    bairro: '',
    logradouro: '',
    localidade: '',
    uf: '',
    cep: '',
    error: ''
  };

  const [fullAddress, setFullAddress] = useState(address);

  useEffect(() => {
    getAddressByCep(fullAddress?.cep);
  }, [fullAddress?.cep]);

  async function getAddressByCep(cep: string) {
    if (cep?.length === 8 && !cep?.includes('-')) {
      try {
        const address = await ViaCepClass?.getAddress(cep);
        setFullAddress(address as any);
      } catch (err) {
        setFullAddress({ ...fullAddress, error: 'CEP Inválido' });
      }
    }

    if (cep?.length === 8 && cep?.includes('-')) {
      setFullAddress({ ...address, cep: cep });
    }
  }

  return (
    <S.Container>
      <Formik
        initialValues={{
          nome: actualItem?.titulo ?? '',
          endereco: actualItem?.endereco ?? '',
          uf: actualItem?.uf ?? '',
          bairro: actualItem?.bairro ?? '',
          cidade: actualItem?.cidade ?? '',
          cep: actualItem?.cep ?? fullAddress?.cep,
          telefone: actualItem?.telefone ?? ''
        }}
        validationSchema={UnitSchema}
        onSubmit={(values) => {
          if (modalOpen === 'publicar') {
            createUnit({
              titulo: values?.nome,
              bairro: values?.bairro,
              cep: values?.cep,
              cidade: values?.cidade,
              endereco: values?.endereco,
              uf: values?.uf,
              telefone: values?.telefone
            });
          }

          if (modalOpen === 'editar') {
            updateUnit({
              unitBody: {
                bairro: values?.bairro,
                cep: values?.cep,
                cidade: values?.cidade,
                endereco: values?.endereco,
                telefone: values?.telefone,
                titulo: values?.nome,
                uf: values?.uf
              },
              id: actualItem?.id_unidade
            });
          }

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
              <h2 className="formTitle">
                {modalOpen === 'editar' ? 'Atualizar' : 'Cadastrar'} Unidade
              </h2>

              <div className="inputsProductWrapper">
                <InputDefault
                  label="Nome da Unidade"
                  placeholder="Unidade ABC"
                  name="nome"
                  value={values?.nome}
                  onChange={handleChange}
                  error={touched?.nome && errors?.nome}
                />

                <InputDefault
                  label="Telefone"
                  placeholder="00 00000-0000"
                  name="telefone"
                  value={values?.telefone}
                  onChange={(e) => {
                    setFieldValue('telefone', phoneMask(e?.target?.value));
                  }}
                  maxLength={11}
                  error={touched?.telefone && errors?.telefone}
                />

                <InputDefault
                  label="CEP"
                  placeholder="00000-000"
                  name="cep"
                  value={values?.cep}
                  mask="cep"
                  maxLength={8}
                  onChange={(e) => {
                    setFieldValue('cep', cepMask(e?.target?.value));
                    setFullAddress({ ...fullAddress, cep: e?.target?.value });
                  }}
                  error={touched?.cep && errors?.cep}
                />

                <InputDefault
                  label="Endereço"
                  placeholder="Av. João Gomes, 1367 - Sala 03"
                  name="endereco"
                  value={values?.endereco}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldValue('endereco', e?.target?.value);
                  }}
                  error={touched?.endereco && errors?.endereco}
                />

                <div className="lineElementsWrapper">
                  <InputDefault
                    label="Cidade"
                    placeholder="Cidade"
                    name="cidade"
                    value={fullAddress?.localidade ?? values?.cidade}
                    onChange={(e) => {
                      handleChange(e);
                      setFieldValue('cidade', fullAddress?.localidade);
                    }}
                    error={touched?.cidade && errors?.cidade}
                    disabled
                  />
                  <InputDefault
                    label="Bairro"
                    placeholder="Bairro"
                    name="bairro"
                    value={fullAddress?.bairro ?? values?.bairro}
                    onChange={(e) => {
                      handleChange(e);
                      setFieldValue('bairro', e?.currentTarget?.value);
                    }}
                    error={touched?.bairro && errors?.bairro}
                    disabled
                  />
                </div>

                <SelectDefault
                  label="Estado"
                  onChange={(e) => {
                    setFieldValue('uf', e?.target?.value);
                  }}
                  value={fullAddress?.uf ?? values?.uf}
                  error={touched?.uf && errors?.uf}
                  disabled
                >
                  <option value="" selected disabled>
                    Estado
                  </option>
                  {allStates?.map((estado) => {
                    return (
                      <option value={estado?.uf} key={estado?.uf}>
                        {estado?.nome}
                      </option>
                    );
                  })}
                </SelectDefault>

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

export default FormUnidades;
