const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

import userRoutes from './routes/user'
import estateRoutes from './routes/estate'

const app = express()
app.use(express.json()) 

const PORT = process.env.PORT || 9000

// DB Connection
mongoose.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log("Connected to MongoDB Atlas")
	})
	.catch(
		(err: Error) => console.error(err.message))


// Routes
app.use('/api/users', userRoutes)
app.use('/api/estates', estateRoutes)

app.listen(PORT, () => {
	console.log(`Server running at port ${PORT}`)
})
