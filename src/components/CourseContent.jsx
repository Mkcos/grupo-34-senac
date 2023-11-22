"use client";

import { useEffect, useState } from "react";
import styles from "./CourseContent.module.scss";
import { useRouter, usePathname } from "next/navigation";

export const CourseContent = ({ data }) => {
	const [currentModule, setCurrentModule] = useState(data.modules[0]);
	const [isCompleted, setIsCompleted] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const isAuthenticated = localStorage.getItem("isAuthenticated");

	useEffect(() => {
		if (!isAuthenticated) {
			router.push(`/auth/login?return_url=${pathname}`);
		}
	}, []);

	return (
		<div
			style={{ display: "flex", justifyContent: "space-between", gap: "5rem" }}
			className={styles.container}
		>
			<div
				style={{
					width: "400px",
					height: "100vh",
					backgroundColor: "#FFFFFFB2",
				}}
				className={styles.info}
			>
				<h1>Curso - {data.slug}</h1>
				<ul>
					{data.modules.map((item) => (
						<li key={item.title}>
							<button
								onClick={() => {
									setCurrentModule(item);
									setIsCompleted(false);
								}}
							>
								{`>`} {item.title}
							</button>
						</li>
					))}
				</ul>
			</div>

			<div
				style={{ flex: 1 }}
				className={styles.course}
			>
				<h2>TRENO CURSOS </h2>
				<h3>Inovação e gestão - Curso {data.slug}</h3>

				<div
					style={{
						width: "800px",
						height: "400px",
						flexDirection: "column",
						backgroundColor: "white",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
					className={styles.class}
				>
					<p style={{ color: "black" }}>{currentModule.description}</p>
					<h3>Treno Cursos</h3>
				</div>

				<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
					<button
						style={{
							borderRadius: "100%",
							display: "inline-block",
							height: "30px",
							width: "30px",
							border: "1px solid white",
							backgroundColor: isCompleted ? "green" : "transparent",
							alignSelf: "center",
						}}
						type="button"
						onClick={() => {
							setIsCompleted(!isCompleted);
						}}
					/>
					AULA CONCLUIDA
				</div>
			</div>
		</div>
	);
};
