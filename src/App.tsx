import { Analytics } from "@vercel/analytics/react"

export default function Home() {
	return (
		<>
			<Analytics />
			<main className="flex h-screen items-center justify-center">
				<div>
					<strong className="text-4xl">Hello World!</strong>
				</div>
			</main>
		</>
	)
}
