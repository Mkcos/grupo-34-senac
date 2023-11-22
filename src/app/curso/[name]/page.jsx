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
			<CourseContent data={data[0]} />
		</div>
	);
}
