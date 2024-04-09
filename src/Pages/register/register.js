import React, { useState } from "react";
import styles from "./register.module.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { authServices } from "../../http/auth-services";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const Register = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            avatarUrl: null,
        },
        mode: "onChange"
    });

    const onSubmit = async (values) => {
        const formData = new FormData();
        formData.append("fullName", values.fullName);
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("avatarUrl", values.avatarUrl[0]);
        const data = await authServices.registerServices(formData);
        navigate("/auth/sign-in");
        console.log("data>>>", data);
        setFile(data.data.avatarUrl);
    };

    return (
        <Paper classes={{ root: styles.root }}>
            <Typography classes={{ root: styles.title }} variant="h5">
                Создания аккаунта
            </Typography>
            <div className={styles.avatar}>
                <Avatar src={file} sx={{ width: 100, height: 100 }} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <TextField
                    className={styles.field}
                    type="text"
                    label="FullName"
                    variant="standard"
                    fullWidth
                    error={Boolean(errors.fullName?.message)}
                    helperText={errors.fullName?.message}
                    {...register("fullName", { required: "Укажите полное имя" })}
                />
                <TextField
                    className={styles.field}
                    type="email"
                    label="E-Mail"
                    variant="standard"
                    fullWidth
                    error={Boolean(errors.email?.message)}
                    helperText={errors.email?.message}
                    {...register("email", { required: "Укажите Почту" })}
                />
                <TextField
                    className={styles.field}
                    type="password"
                    label="Password"
                    variant="standard"
                    fullWidth
                    error={Boolean(errors.password?.message)}
                    helperText={errors.password?.message}
                    {...register("password", { required: "Укажите пароль" })}
                />
                <TextField
                    className={styles.field}
                    type="file"
                    variant="standard"
                    fullWidth
                    {...register("avatarUrl")}

                />
                <Button
                    disabled={!isValid}
                    type="submit"
                    size="large"
                    variant="contained"
                    fullWidth
                >
                    Зарегистрироваться
                </Button>
            </form>
        </Paper>
    )
}

export default Register;