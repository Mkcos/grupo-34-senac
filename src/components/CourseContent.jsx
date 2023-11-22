"use client";

import { useState } from "react";

export const CourseContent = ({ data }) => {
	const [currentModule, setCurrentModule] = useState(data.modules[0]);
	const [isCompleted, setIsCompleted] = useState(false);

	return (
		<div
			style={{ display: "flex", justifyContent: "space-between", gap: "5rem" }}
		>
			<div
				style={{
					width: "400px",
					height: "100vh",
					backgroundColor: "#FFFFFFB2",
				}}
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
								{item.title}
							</button>
						</li>
					))}
				</ul>
			</div>

			<div style={{ flex: 1 }}>
				<h2>TRENO CURSOS </h2>
				<h3>Inovação e gestã0 - Curso {data.slug}</h3>

				<div
					style={{
						width: "800px",
						height: "500px",
						flex: 1,
						backgroundColor: "white",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<p style={{ color: "black" }}>{currentModule.description}</p>
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
