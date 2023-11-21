import { CourseContent } from "../../../components/CourseContent";

const getCourseData = async (name) => {
	try {
		const url = `http://localhost:3001/courses?name=${name}`;
		const res = await fetch(url, { cache: "no-store" });

		if (!res?.ok) return {};

		const response = await res.json();

		return response;
	} catch (error) {
		return {};
	}
};

export default async function Category({ params: { name } }) {
	const data = await getCourseData(name);

	return (
		<div>
			<h1>Curso - {data[0].slug}</h1>
			<CourseContent modules={data[0].modules} />
		</div>
	);
}
