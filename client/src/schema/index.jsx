import * as Yup from "yup";
export const ServiceSchema = Yup.object().shape({
  imageURL: Yup.string().required(),
  name: Yup.string().required(),
  description: Yup.string().required(),
});
