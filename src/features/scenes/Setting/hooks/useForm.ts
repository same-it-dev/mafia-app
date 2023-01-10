import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  countGamers: yup.number().required("Обов'язкове поле"),
  preset: yup.number().required("Обов'язкове поле"),
});

export const useForm = ({ onSubmit }: any) => {
  const form = useFormik({
    initialValues: {
      countGamers: "",
      preset: "",
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  return form;
};
