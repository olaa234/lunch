import express from 'express';
import User from '../model/userModel.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
	const createdUsers = await User.insertMany(data.users);
	res.send({ createdProducts, createdUsers });
});
export default seedRouter;