import { useFormik } from "formik";
import * as yup from "yup";
import { GamerSubmitFormInterface } from "../interfaces";

const validationSchema = yup.object({
  roleId: yup.string().required("Обов'язкове поле"),
  gamerId: yup.string().required("Обов'язкове поле"),
});

interface FormInterface {
  onSubmit: GamerSubmitFormInterface;
}

export const useForm = ({ onSubmit }: FormInterface) => {
  const form = useFormik({
    initialValues: {
      roleId: "",
      gamerId: "",
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  return form;
};
