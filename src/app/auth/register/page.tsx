import { RegisterForm } from "../../../components/RegisterForm";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";

export default function Register({ params: { name } }) {
	return (
		<>
			<NavBar />
			<main className={`width-max`}>
				<RegisterForm />
			</main>
			<Footer />
		</>
	);
}
