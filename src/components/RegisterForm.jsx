"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Link from "next/link";

export const RegisterForm = () => {
	const [formState, setFormState] = useState({
		email: "",
		password: "",
	});

	const UserSchema = Yup.object().shape({
		email: Yup.string().required("Email é obrigatório"),
		password: Yup.string().required("Senha é obrigatória"),
	});

	const { register, handleSubmit, setValue, getValues } = useForm({
		resolver: yupResolver(UserSchema),
		mode: "all",
	});

	const onSubmit = (values) => {
		localStorage.setItem("user", JSON.stringify(values));
		toast.success("Usuário cadastrado com sucesso");
	};

	const handleChange = (event) => {
		const value = event.target.value;
		setValue("email", value);
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
			}}
		>
			<ToastContainer />
			<h1 style={{ fontSize: "2rem", marginBottom: "2.5rem" }}>CADASTRO</h1>
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
					placeholder="Email"
					{...register("email", {
						onChange: handleChange,
					})}
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
					Cadastrar
				</button>

				<Link href="/auth/login" style={{marginBottom: "5rem", marginTop: "1rem"}}>Ir para o login</Link>
			</form>
		</div>
	);
};
