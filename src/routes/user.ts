import express from "express"
import User from "../models/user"
import Estate from "../models/estate"

const router = express.Router()

router.get('/', async (_req, res) => {

	const allUsers = await User.find()

	return res.status(200).send(allUsers)
	
})

router.get('/:id', async (req, res) => {

	try {

		const userId = +req.params.id

		const user = await User.findOne({
			id: userId
		})

		return (user != null)
			? res.send(user)
			: res.status(404).json({message: "User does not exists"}) 

	} catch (e: any) {
		return res.status(400).send(e.message)
	}

})

router.get('/estates/:id', async (req, res) => {

	try {

		const userId = +req.params.id
		const owner = await User.findOne({
			id: userId
		})

		const estates = await Estate.find({ 'owner': owner })

		return res.status(200).json(estates)

	} catch (e: any) {
		res.status(400).json(e.message)
	}

})

router.post('/', async (req, res) => {

	try {

		const body = req.body

		if (body.id != null)
			return res.status(400).json({message: "User must not content an ID"})


		const totalUsers = await User.count()
		body.id = totalUsers + 1

		const newUser = new User(body)
		const addedUser = await newUser.save()

		res.status(201).json(addedUser)

	} catch (e: any) {
		return res.status(400).json(e.message)
	}

})

router.put('/:id', async (req, res) => {

	try {

		const { id } = req.params
		const { username, password } = req.body

		const updatedUser = await User.updateOne(
			{ id: id }, 
			{$set: {username, password }})

		return res.status(200).json(updatedUser)

	} catch (e: any) {
		return res.status(404).json(e.message)
	}

})

router.delete('/:id', async (req, res) => {

	try {

		const userId = req.params.id

		const deletedOwner = await User.findByIdAndDelete({
			id: +userId
		})

		await Estate.deleteMany({
			owner: deletedOwner
		})

		return res.status(204).json({message: "User deleted correctly"})

	} catch (e: any) {
		return res.status(400).json(e.message)
	}

})

export default router
