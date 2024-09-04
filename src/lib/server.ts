import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose" // Uncomment if you plan to use mongoose

dotenv.config({ path: ".env.local" })

const app = express()
app.use(express.json())
app.use(cors())

mongoose
mongoose
	.connect(process.env.MONGO_URL!)
	.then(() => {
		console.log("Connected to MongoDB")
	})
	.catch((error) => {
		console.error("MongoDB connection error:", error.message)
	})

app.get("/hello", (req, res) => {
	res.json({ message: "Hello from the test route!" })
})

app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`)
})
