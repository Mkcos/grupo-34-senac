import Link from "next/link";
import styles from "./styles.module.scss";

const getCourses = async (category) => {
	try {
		const url = `http://localhost:3001/courses?category=${category}`;
		const res = await fetch(url, { cache: "no-store" });

		if (!res?.ok) return {};

		const response = await res.json();

		return response;
	} catch (error) {
		return {};
	}
};

const getCategoryData = async (name) => {
	try {
		const url = `http://localhost:3001/categories?name=${name}`;
		const res = await fetch(url, { cache: "no-store" });

		if (!res?.ok) return {};

		return res.json();
	} catch (error) {
		return {};
	}
};

export default async function Category({ params: { name } }) {
	const courses = await getCourses(name);
	const categoryData = await getCategoryData(name);
	console.log(courses);

	return (
		<div className={`${styles.container} width-max`}>
			<h1>{categoryData[0].slug}</h1>
			<p>{categoryData[0].description}</p>

			<h2>Escolha seu curso</h2>

			<ul>
				{courses.map((course) => (
					<li>
						<Link href={`/curso/${course.name}`}>{course.slug}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
