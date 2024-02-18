import * as yup from "yup"

export const schema = yup.object({
    title: yup.string().required().trim(),
    description: yup.string().required().trim()
})

