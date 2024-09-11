import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

export default function Home() {
	return (
		<>
			<Navbar />
			<div className="m-8 flex h-screen flex-col items-center">
				<strong className="text-3xl">Hello World!</strong>
			</div>
			<Footer />
		</>
	)
}
