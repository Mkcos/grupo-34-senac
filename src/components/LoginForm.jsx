"use client";

import React, { useState } from "react";
import { useForm, useLocalStorage } from "react-hook-form";
import * as yup from "yup";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Link from "next/link";

export const LoginForm = () => {
	const { register, handleSubmit } = useForm({
		validationSchema: yup.object({
			email: yup.string().required(),
			password: yup.string().required(),
		}),
	});

	const onSubmit = (values) => {
		const user = JSON.parse(localStorage.getItem("user"));

		if (
			user &&
			user.email === values.email &&
			user.password === values.password
		) {
			// Faça alguma coisa com as credenciais válidas
		} else {
			toast.error("Revise os dados e tente novamente");
		}
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
				marginTop: "4rem",
				marginBottom: "4rem",
			}}
		>
			<ToastContainer />
			<h1 style={{ fontSize: "2rem", marginBottom: "2.5rem" }}>LOGIN</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				style={{
					display: "flex",
					flexDirection: "column",
					width: "50%",
					alignItems: "center",
					justifyContent: "center",
					gap: "1rem",
				}}
			>
				<input
					type="email"
					name="email"
					placeholder="Endereço de e-mail"
					{...register("email")}
					style={{
						width: "100%",
						padding: "0.5rem",
						borderRadius: "4px",
						border: "1px solid white",
						color: "black",
					}}
				/>
				<input
					type="password"
					name="password"
					placeholder="Senha"
					{...register("password")}
					style={{
						width: "100%",
						padding: "0.5rem",
						borderRadius: "4px",
						border: "1px solid white",
						color: "black",
					}}
				/>
				<button
					type="submit"
					style={{
						backgroundColor: "white",
						color: "black",
						padding: "0.5rem 2rem",
						borderRadius: "8px",
						marginTop: "1rem",
					}}
				>
					ENTRAR
				</button>

        <Link href="/auth/register" style={{marginBottom: "1.5rem", marginTop: "1rem"}}>Não tem uma conta? Cadastre-se</Link>
			</form>
		</div>
	);
};
