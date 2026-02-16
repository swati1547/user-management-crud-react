import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button, Box } from "@mui/material";
import { userSchema } from "../utils/validationSchema";
import { userFields } from "../config/userFields";
import "./UserForm.scss";

function UserForm({ onSubmit, defaultValues, loading }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues,
    mode: "onChange",
  });

  return (
    <Box
      className="user-form"
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}
    >
      {userFields.map((field) => (
        <TextField
          key={field.name}
          label={field.label}
          type={field.type}
          {...register(field.name)}
          error={!!errors[field.name]}
          helperText={errors[field.name]?.message}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
      ))}

      <Button
        className="user-form__submit"
        type="submit"
        variant="contained"
        disabled={loading}
      >
        {loading ? "Saving..." : defaultValues ? "Update User" : "Add User"}
      </Button>
    </Box>
  );
}

export default UserForm;
