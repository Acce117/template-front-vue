import * as yup from "yup";

export const userSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
})