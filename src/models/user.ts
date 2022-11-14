import { Schema, model } from "mongoose"

const userSchema = new Schema({
	id: {
		type: Number,
		required: true,
		auto: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
})

// Remove _id and __v from JSON when getting a document from MongoDB
userSchema.set('toJSON', {
	transform: (_document, returnedObject) => {
		delete returnedObject._id
		delete returnedObject.__v
	}
})

const User = model('User', userSchema)

export default User
export { userSchema }
