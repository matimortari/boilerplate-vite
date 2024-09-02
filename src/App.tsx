import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="flex h-screen flex-col items-center justify-center">
				<strong className="text-4xl">Hello World!</strong>
			</main>
			<Footer />
		</>
	)
}
