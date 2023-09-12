import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button, Stack } from "@mui/material";


import { Controller, useForm } from "react-hook-form";

export default function FormDemo() {

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const { register, handleSubmit, formState } = form
    const { errors } = formState

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} width={400}>
            <TextField label="Email" 
                        type="email" 
                        {...register("email", {
                            required: "Email is required"
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
            />
            <TextField label="Password" 
                        type="password" 
                        {...register("password", {
                            required: "Password is required"
                        })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
            />
            <Button type="submit" variant="contained" color="primary">
                Login
            </Button>

        </Stack>
      </form>
    );
  }