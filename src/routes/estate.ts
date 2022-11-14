import express from "express";
import Estate from "../models/estate";
import User from "../models/user";

const router = express.Router()

router.get('/', async (_req, res) => {

	const allEstates = await Estate.find()

	return res.status(200).send(allEstates)

})

router.get('/:id', async (req, res) => {

	try {

		const estateId = +req.params.id

		const estate = await Estate.findOne({
			id: estateId
		})

		return (estate != null) 
			? res.send(estate)
			: res.status(404).json({message: "Estate does not exists"})

	} catch (e: any) {
		return res.status(400).send(e.message)
	}

})

router.post('/', async (req, res) => {

	try {

		const body = req.body
		const ownerId = +body.ownerId

		if (ownerId == null)
			return res.status(400).json({message: "Owner ID must be provided"})


		const totalEstates = await Estate.count()
		body.id = totalEstates + 1

		body.owner = await User.findOne({
			id: ownerId
		})

		const newEstate = new Estate(body)
		const addedEstate = await newEstate.save()

		res.status(201).json(addedEstate)

	} catch (e: any) {
		return res.status(400).json(e.message)
	}

})

router.put('/:id', async (req, res) => {

	try {

		const estateId = +req.params.id
		const { address, jurisdiction, ownerId } = req.body

		if (ownerId == null)
			return res.status(400).json({message: "Owner ID must be provided"})

		const owner = await User.findOne({
			id: ownerId
		})

		const updatedEstate = await Estate.updateOne(
			{ id: estateId },
			{$set: { address, jurisdiction, owner }}
		)

		return res.status(200).json(updatedEstate)

	} catch (e: any) {
		return res.status(404).json(e.message)
	}

})

router.delete('/:id', async (req, res) => {

	try {

		const params = req.params

		const user = await Estate.deleteOne({
			id: +params.id
		})

		return (user.acknowledged == true)
			? res.status(204).json({message: "Estate delete correctly"})
			: res.status(404).json({message: "Estate does not exits"}) 

	} catch (e: any) {
		return res.status(400).json(e.message)
	}

})

export default router
