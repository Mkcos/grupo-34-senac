import Link from "next/link";
import styles from "./styles.module.scss";
<<<<<<< HEAD
import {WbIncandescentOutlined, ArrowBackIos} from "@mui/icons-material";

=======
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
>>>>>>> 8f461a7d9f00ccfac33d543862ba36b4b9a23079

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

	return (
		<div className={`${styles.container} width-max`}>
<<<<<<< HEAD
=======
			<NavBar />
			<h1>{categoryData[0].slug}</h1>
			<p>{categoryData[0].description}</p>
>>>>>>> 8f461a7d9f00ccfac33d543862ba36b4b9a23079

			<div className="flex items-center gap-2 mb-4">
			< WbIncandescentOutlined className="rotate-180 w-20 h-20"/>
			<h1 className="font-bold">{categoryData[0].slug}</h1>
			</div>
			<div className="mb-28 pl-20 text-2xl leading-8">
				<p>{categoryData[0].description}</p>
			</div>
			<h2 className="font-bold mb-4">Escolha seu curso</h2>

<<<<<<< HEAD
			<div className="mb-52">
				<ul>
					{courses.map((course) => (
						<li  className="border-2 mb-4 rounded-md py-2 px-4 flex justify-between" key={course.id}>
							<Link href={`/curso/${course.name}`}>{course.slug}</Link>
							<ArrowBackIos className="rotate-[-90deg]"/>
						</li>
					))}
				</ul>
			</div>
=======
			<ul>
				{courses.map((course) => (
					<li key={course.id}>
						<Link href={`/curso/${course.name}`}>{course.slug}</Link>
					</li>
				))}
			</ul>

			<Footer />
>>>>>>> 8f461a7d9f00ccfac33d543862ba36b4b9a23079
		</div>
	);
}
