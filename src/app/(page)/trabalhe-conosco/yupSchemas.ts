import * as yup from "yup"

export const curriulumFormSchema = yup.object().shape({
    fullName: yup.string().required("O nome é obrigatório!"),
    role: yup.string().required("A vaga de interesse é obrigatória!"),
    curriulum: yup.string().required("O currículo é obrigatório!")
})

export const representanteFormSchema = yup.object().shape({
    fullName: yup.string().required("O nome é obrigatório!"),
    cnpj: yup.string().required("O CNPJ é obrigatório!"),
    contact: yup.string().required("O contato é obrigatório")
})