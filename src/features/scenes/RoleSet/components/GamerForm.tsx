import { useForm } from "../hooks";
import { ReactNode } from "react";
import { Select, MenuItem } from "common/components";
import { Box } from "@mui/material";

interface Props {
  onSubmit: any;
  roles: Array<{ id: number; name: string; roleTypeId: string }>;
  gamers: Array<{
    id: number;
    isActive: boolean;
  }>;
  children: ReactNode;
}

export const GamerForm = ({ onSubmit, roles, gamers, children }: Props) => {
  const { errors, values, touched, handleChange, handleSubmit, handleBlur } =
    useForm({
      onSubmit,
    });

  return (
    <Box
      component="form"
      onSubmit={(e: any) => {
        e.preventDefault();
        //resetForm();
        handleSubmit();
      }}
    >
      <Box
        sx={{
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <Select
          name="roleId"
          value={values.roleId}
          label="Оберіть роль"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.roleId && Boolean(errors.roleId)}
          errorText={errors.roleId}
        >
          {roles.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
        <Select
          name="gamerId"
          value={values.gamerId}
          label="Оберіть номер"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.gamerId && Boolean(errors.gamerId)}
          errorText={errors.gamerId}
        >
          {gamers.map(({ id }) => (
            <MenuItem key={id} value={id}>
              {id}
            </MenuItem>
          ))}
        </Select>

        {children}
      </Box>
    </Box>
  );
};
