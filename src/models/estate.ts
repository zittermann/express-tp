import { Schema, model } from "mongoose";
import { userSchema } from "./user";

const estateSchema = new Schema({
	id: {
		type: Number,
		required: true,
		auto: true
	},
	address: {
		type: String,
		required: true
	},
	jurisdiction: {
		type: String,
		required: true
	},
	owner: {
		type: userSchema,
		required: true
	} 
})

estateSchema.set('toJSON', {
	transform: (_document, returnedObject) => {
		delete returnedObject._id,
		delete returnedObject.__v
	}
})

const Estate = model('Estate', estateSchema)

export default Estate
