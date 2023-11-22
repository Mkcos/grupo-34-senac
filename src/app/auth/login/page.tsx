import { RegisterForm } from "../../../components/RegisterForm";

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { LoginForm } from "../../../components/LoginForm";
export default function Login({ params: { name } }) {
	return (
		<>
			<NavBar />
			<main className={`width-max`}>
				<LoginForm />
			</main>
			<Footer />
		</>
	);
}
