import * as yup from "yup";

export const productSchema = yup?.object()?.shape({
  images: yup
    ?.array()
    .of(yup.string())
    .min(1, "O produto deve conter pelo menos 1 imagem.")
    .required(),
  sku: yup.string().required("O SKU é obrigatório"),
  titulo: yup
    ?.string()
    .min(3, "O título do produto deve conter pelo menos 3 caracteres")
    .required("O produto deve conter um título"),
  preco: yup
    ?.string()
    .min(0.01, "O valor do produto deve ser superior a R$0,00.")
    .required("O produto deve conter um valor."),
    estoque: yup.string().required("O estoque é obrigatório."),
  status: yup?.string().required("É necessário o status do produto."),
});
