import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
mongoose
	.connect(process.env.MONGO_URL!)
	.then(() => {
		console.log("Connected to MongoDB")
		app.listen(process.env.API_PORT, () => {
			console.log(`Server running on port ${process.env.API_PORT}`)
		})
	})
	.catch((error) => {
		console.error("MongoDB connection error:", error.message)
	})

app.get("/test", (req, res) => {
	res.json({ message: "Hello World!" })
})
