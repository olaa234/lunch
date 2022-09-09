import express from 'express';
import User from '../model/userModel.js';


async function registerUser(req, res) {
    // try {
    //     const newUser = await User.create({
    //         name: req.body.name,
    //         email: req.body.email,
    //         password: req.body.password,
    //     });

    //     res.status(200).json({
    //         status: 'success',
    //         data: {
    //             user: newUser,
    //         },
    //     });
    // } catch (err) {
    //     console.log('Something went wrong creating a user', err.message);
    //     res.sendStatus(500);
    // }
    const newUser = await new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    const user = await newUser.save();
    res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        
    })
}

const userRoutes = express.Router();
userRoutes.post('/', registerUser);

export default userRoutes;