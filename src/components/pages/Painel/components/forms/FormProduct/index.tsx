import Image from "next/image";
import { useEffect, useState } from "react";
import ButtonDefault from "../../ButtonDefault";
import Inputdefault from "../../inputs/InputDefault";
import InputDescription from "../../inputs/InputDescription";
import InputImage from "../../inputs/InputImage";
import InputQuantity from "../../inputs/InputQuantity";
import { SelectDefault } from "../../inputs/SelectDefault";
import * as S from "../styles";
import { IActualItemProduct, IInitialValuesProduct } from "./types";
import { Formik, Form } from "formik";
// import { TrashIcon } from "../../../../Svg";
import { productSchema } from "./yupSchema";

interface IFormProduct {
  modalOpen: string;
  actualItem?: IActualItemProduct | any;
  onSubmit: () => void;
}

const FormProduct = ({ modalOpen, actualItem, onSubmit }: IFormProduct) => {
  const [image, setImage] = useState<string[]>();
  const [imagesIdToRemove, setImagesIdToRemove] = useState<string[]>([]);
  const [price, setPrice] = useState<string>("");
  const actualItemImages = actualItem?.produtoImagens?.map((objImage: any) => {
    return objImage?.url_imagem;
  });

  useEffect(() => {
    if (actualItem) {
      setPrice(actualItem?.project_price);
      setImage(actualItemImages);
      handleOnChangeDTO("imagem", [...actualItem.produtoImagens]);
    }
  }, [actualItem]);

  console.log(actualItem)

  const [DTO, setDTO] = useState<{ valor: number; imagem: string[] }>({
    valor: 0,
    imagem: [],
  });

  function handleOnChangeDTO(
    key: "valor" | "imagem",
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

    actualItem?.produtoImagens?.map((image: any) => {
      if (actualImage === image?.url_imagem) {
        setImagesIdToRemove([
          ...imagesIdToRemove,
          String(image?.id_produto_imagem),
        ]);
      }
    });

    if (arrayFilteredImages) {
      setImage(arrayFilteredImages);
    }
    handleOnChangeDTO("imagem", arrayFilteredImages);
  };

  const createSlug = (titulo: string) => {
    return titulo?.replaceAll(" ", "-")?.toLowerCase();
  };

  const formatPrice = (price: any) => {
    let value = price?.replace(/[\W\D]/g, "");
    value = (value / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return value;
  };

  const handlePrice = (e: any) => {
    setPrice(formatPrice(e.target.value));
  };

  return (
    <S.Container>
      <Formik
        initialValues={{
          images: actualItem?.produtoImagens ?? [],
          titulo: actualItem?.project_name ?? "",
          sku: actualItem?.project_sku ?? "",
          preco:
            actualItem?.project_price
              .replace("R$", "")
              .replace(",", ".")
              .trim() ?? "",
          estoque: actualItem?.project_stock ?? "",
          status: actualItem?.status ?? "",
        }}
        validationSchema={productSchema}
        onSubmit={(values) => {
          console.log("+++++++++++++++++++++++++++++");
          console.log(values);
        }}
      >
        {({
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
          handleChange,
        }) => (
          <>
            <Form onSubmit={handleSubmit} className="formAddProductWrapper">
              <InputImage
                onPostImage={(image: string) => {
                  let newArrayImagesProduct: Array<string> = DTO?.imagem;
                  newArrayImagesProduct?.push(image);
                  handleOnChangeDTO("imagem", newArrayImagesProduct);
                  setImage(newArrayImagesProduct);
                  {
                    setFieldValue("images", newArrayImagesProduct);
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
                          setFieldValue("images", DTO?.imagem);
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
                <Inputdefault
                  label="Título"
                  placeholder="Título do produto"
                  name="titulo"
                  value={values?.titulo}
                  onChange={(e: any) => {
                    handleChange(e);
                    setFieldValue("slug", createSlug(e.target.value));
                  }}
                  error={touched?.titulo ? errors?.titulo : null}
                />

                <div className="lineElementsWrapper">
                  <Inputdefault
                    label="SKU"
                    placeholder="SKU do produto"
                    name="sku"
                    value={values.sku}
                    onChange={(e: any) => handleChange(e)}
                  />
                  <Inputdefault
                    label="Preço (R$)"
                    placeholder="R$59,99"
                    value={price}
                    onChange={(e: any) => {
                      setFieldValue(
                        "preco",
                        formatPrice(e.target.value)
                          ?.replace(",", ".")
                          .replace(/[^\d.]/g, "")
                      );
                      handlePrice(e);
                    }}
                    name="preco"
                    error={touched?.preco ? errors?.preco : null}
                  />
                </div>

                <div className="lineElementsWrapper">
                  <SelectDefault
                    label="Estoque"
                    value={values.estoque}
                  >
                    <option value="Em estoque">Em estoque</option>
                    <option value="Fora de estoque">Fora de estoque</option>
                  </SelectDefault>
                  <SelectDefault
                    label="Status"
                    value={values.status}
                  >
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                  </SelectDefault>
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
                    {modalOpen === "publicar" ? "Publicar" : "Atualizar"}
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
