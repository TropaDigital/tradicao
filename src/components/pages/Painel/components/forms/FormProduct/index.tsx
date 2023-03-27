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
import { IGetContemplados } from '@/services/contemplados/types';

interface IFormProduct {
  modalOpen: string;
  actualItem?: IGetContemplados;
  onSubmit: () => void;
}

const FormProduct = ({ modalOpen, actualItem, onSubmit }: IFormProduct) => {
  const [image, setImage] = useState<string[]>();
  const [imagesIdToRemove, setImagesIdToRemove] = useState<string[]>([]);
  const actualItemImages = actualItem?.contempladoImagens?.map(
    (objImage: any) => {
      return objImage?.url_foto;
    }
  );

  useEffect(() => {
    if (actualItem) {
      setImage(actualItemImages);
      handleOnChangeDTO('imagem', [
        ...actualItem?.contempladoImagens[0].url_foto
      ]);
    }
  }, [actualItem]);

  const [DTO, setDTO] = useState<{ valor: number; imagem: string[] }>({
    valor: 0,
    imagem: []
  });

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

    actualItem?.contempladoImagens?.map((image: any) => {
      if (actualImage === image?.url_foto) {
        setImagesIdToRemove([
          ...imagesIdToRemove,
          String(image?.id_contemplado_foto)
        ]);
      }
    });

    if (arrayFilteredImages) {
      setImage(arrayFilteredImages);
    }
    handleOnChangeDTO('imagem', arrayFilteredImages);
  };

  return (
    <S.Container>
      <Formik
        initialValues={{
          images: actualItem?.contempladoImagens[0].url_foto ?? [],
          titulo: actualItem?.nome ?? '',
          depoimento: actualItem?.depoimento ?? '',
          status: actualItem?.status ?? ''
        }}
        validationSchema={contempladoSchema}
        onSubmit={(values) => {
          console.log('+++++++++++++++++++++++++++++');
          console.log(values);
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
                  let newArrayImagesProduct: Array<string> = DTO?.imagem;
                  newArrayImagesProduct?.push(image);
                  handleOnChangeDTO('imagem', newArrayImagesProduct);
                  setImage(newArrayImagesProduct);
                  {
                    setFieldValue('images', newArrayImagesProduct);
                  }
                }}
                error={touched?.images ? errors?.images : null}
              />
              <div className="imageComponentWrapper">
                {DTO?.imagem?.map((row: string, key: number) => (
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
                ))}
              </div>

              <div className="inputsProductWrapper">
                <DefaultInput
                  label="Nome"
                  placeholder="Nome do contemplado"
                  name="titulo"
                  value={values?.titulo}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(e);
                  }}
                  // error={touched?.titulo ? errors?.titulo : null}
                />

                <TextAreaDefault
                  label="Depoimento"
                  placeholder="Depoimento do contemplado"
                />

                <SelectDefault label="Status" value={values.status}>
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
