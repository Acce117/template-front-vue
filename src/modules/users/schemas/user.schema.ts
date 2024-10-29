import * as yup from "yup";

export const userSchema = yup.object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required()
})