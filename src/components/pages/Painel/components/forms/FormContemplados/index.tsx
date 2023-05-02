import Image from 'next/image';
import { useEffect, useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import InputImage from '../../inputs/InputImage';
import { SelectDefault } from '../../inputs/SelectDefault';
import * as S from '../styles';
import { Formik, Form } from 'formik';
import { contempladoSchema } from './yupSchema';
import { TrashIcon } from '@/assets/icons';
import { TextAreaDefault } from '@/components/UI/Inputs/TextAreaDefault';
import { IContempladoImages } from '@/services/contemplados/types';
import { useDeleteFile } from '@/services/arquivos/DELETE/useDeleteFile';
import { useUpdateContemplado } from '@/services/contemplados/PUT/useUpdateContemplado';
import { useCreateContemplado } from '@/services/contemplados/POST/useCreateContemplado';
import { IForm } from '../types';
import { InputDefault } from '@/components/UI/Inputs/InputDefault';
import { onlyLetterMask } from '@/utils/masks';

const FormContemplados = ({ modalOpen, actualItem, onSubmit }: IForm) => {
  const [newImages, setNewImages] = useState<string[]>([]);
  const [imagesIdToRemove, setImagesIdToRemove] = useState<string[]>([]);
  const [charCount, setCharCount] = useState<number>(0);

  const actualItemImages = actualItem?.contempladoImagens?.map(
    (objImage: IContempladoImages) => {
      return objImage?.url_foto;
    }
  );

  useEffect(() => {
    if (actualItemImages) {
      handleOnChangeDTO('imagem', actualItemImages);
    }
  }, [actualItem]);

  const [DTO, setDTO] = useState<{ valor: number; imagem: string[] }>({
    valor: 0,
    imagem: []
  });

  const { deleteFile } = useDeleteFile();
  const { updateContemplado } = useUpdateContemplado();
  const { createContemplado } = useCreateContemplado();

  function handleOnChangeDTO(
    key: 'valor' | 'imagem',
    value: string | Array<string>
  ) {
    let newDTO: any = DTO;
    newDTO[key] = value;
    setDTO({ ...newDTO });
  }

  const removeImage = (actualImage: string, images: string[]) => {
    const arrayFilteredImages = images?.filter((image) => {
      return image !== actualImage;
    });

    actualItem?.contempladoImagens?.map((image: IContempladoImages) => {
      if (actualImage === image?.url_foto) {
        setImagesIdToRemove([
          ...imagesIdToRemove,
          String(image?.id_contemplado_foto)
        ]);
      }
    });

    handleOnChangeDTO('imagem', arrayFilteredImages);
  };

  return (
    <S.Container>
      <Formik
        initialValues={{
          images: actualItemImages ?? [],
          nome: actualItem?.nome ?? '',
          depoimento: actualItem?.depoimento?.replaceAll('⠀', '') ?? '',
          categoria: actualItem?.categoria ?? '',
          status: actualItem?.status ?? 'Ativo'
        }}
        validationSchema={contempladoSchema}
        onSubmit={(values: {
          images: string[];
          nome: string;
          depoimento: string;
          categoria: string;
          status: 'Ativo' | 'Inativo';
        }) => {
          imagesIdToRemove?.map((imageID) => {
            deleteFile({ endpoint: 'delete-contemplado-foto', id: imageID });
          });

          const contempladoObjectPost = {
            depoimento: values?.depoimento !== '' ? values?.depoimento : '⠀',
            url_foto: newImages,
            nome: values?.nome?.trim(),
            categoria: values?.categoria,
            status: values?.status
          };

          if (modalOpen === 'editar') {
            updateContemplado({
              contempladoBody: contempladoObjectPost,
              id: actualItem?.id_contemplado
            });
          }

          if (modalOpen === 'publicar') {
            createContemplado(contempladoObjectPost);
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
              <InputImage
                onPostImage={(image: string) => {
                  let newArrayImagesProduct = DTO?.imagem;
                  newArrayImagesProduct?.push(image);
                  handleOnChangeDTO('imagem', newArrayImagesProduct);
                  setNewImages([...newImages, image]);
                  {
                    setFieldValue('images', newArrayImagesProduct);
                  }
                }}
                error={touched?.images && errors?.images}
              />
              <div className="imageComponentWrapper">
                {DTO?.imagem?.map((row: string, key: number) => (
                  <>
                    <span className="imageComponent" key={key}>
                      <div className="removeImage">
                        <div
                          className="removeIcon"
                          onClick={() => {
                            removeImage(row, DTO?.imagem);
                            setFieldValue('images', DTO?.imagem);
                          }}
                        >
                          <TrashIcon size={42} />
                        </div>
                      </div>
                      <Image
                        className="nextImage"
                        src={row}
                        alt="Imagem de upload"
                        key={key}
                        width={80}
                        height={80}
                      />
                    </span>
                  </>
                ))}
              </div>

              <div className="inputsProductWrapper">
                <InputDefault
                  label="Nome"
                  placeholder="Nome do contemplado"
                  name="nome"
                  value={values?.nome}
                  onChange={handleChange}
                  error={touched?.nome && errors?.nome}
                />

                <TextAreaDefault
                  label="Depoimento"
                  placeholder="Depoimento do contemplado"
                  name="depoimento"
                  value={values?.depoimento}
                  onChange={(e) => {
                    handleChange(e);
                    setCharCount(e?.target?.value?.length);
                  }}
                  charQuantity={
                    charCount > 0 ? charCount : values?.depoimento?.length
                  }
                  error={touched?.depoimento && errors?.depoimento}
                  maxCharLength={280}
                />

                <SelectDefault
                  label="Consórcio"
                  className="inputField"
                  name="categoria"
                  value={values?.categoria}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldValue('categoria', e?.target?.value);
                  }}
                  error={touched?.categoria && errors?.categoria}
                >
                  <option value="">Selecione o consórcio</option>
                  <option value="Automóveis">Automóveis</option>
                  <option value="Imóveis">Imóveis</option>
                  <option value="Pesados">Pesados</option>
                  <option value="Serviços">Serviços</option>
                </SelectDefault>

                <SelectDefault
                  label="Status"
                  className="inputField"
                  value={values?.status}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldValue('status', e?.target?.value);
                  }}
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
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
                    {modalOpen === 'publicar' ? 'Adicionar' : 'Atualizar'}
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

export default FormContemplados;
