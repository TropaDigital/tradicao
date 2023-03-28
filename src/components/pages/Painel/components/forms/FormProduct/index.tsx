import Image from 'next/image';
import { useEffect, useState } from 'react';
import ButtonDefault from '../../ButtonDefault';
import InputImage from '../../inputs/InputImage';
import { SelectDefault } from '../../inputs/SelectDefault';
import * as S from '../styles';
import { Formik, Form } from 'formik';
import { contempladoSchema } from './yupSchema';
import { TrashIcon } from '@/assets/icons';
import DefaultInput from '@/components/UI/DefaultInput';
import { TextAreaDefault } from '@/components/UI/Inputs/TextAreaDefault';
import {
  IContempladoImages,
  IGetContemplados
} from '@/services/contemplados/types';
import { useDeleteFile } from '@/services/arquivos/DELETE/useDeleteFile';
import { useUpdateContemplado } from '@/services/contemplados/PUT/useUpdateContemplado';

interface IFormProduct {
  modalOpen: string;
  actualItem?: IGetContemplados;
  onSubmit: () => void;
}

const FormProduct = ({ modalOpen, actualItem, onSubmit }: IFormProduct) => {
  const [newImages, setNewImages] = useState<string[]>([]);
  const [imagesIdToRemove, setImagesIdToRemove] = useState<string[]>([]);
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
          depoimento: actualItem?.depoimento ?? '',
          status: actualItem?.status ?? 'Ativo'
        }}
        validationSchema={contempladoSchema}
        onSubmit={(values: {
          images: string[];
          nome: string;
          depoimento: string;
          status: 'Ativo' | 'Inativo';
        }) => {
          imagesIdToRemove?.map((imageID) => {
            deleteFile({ endpoint: 'delete-contemplado-foto', id: imageID });
          });

          updateContemplado({
            contempladoBody: {
              depoimento: values?.depoimento,
              url_foto: newImages,
              nome: values?.nome,
              status: values?.status
            },
            id: actualItem?.id_contemplado
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
                <DefaultInput
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
                  onChange={handleChange}
                  error={touched?.depoimento && errors?.depoimento}
                />

                <SelectDefault
                  label="Status"
                  className="inputField"
                  value={values.status}
                  onChange={handleChange}
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
                    {modalOpen === 'publicar' ? 'Publicar' : 'Atualizar'}
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

export default FormProduct;
