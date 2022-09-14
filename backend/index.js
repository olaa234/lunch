import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './route/userRoute.js';
import seedRouter from './route/seedRouter.js';
// import data from './data.js'

 

mongoose.connect('mongodb+srv://user234:2KYpYefFcHzXU5BK@cluster0.4sf24l9.mongodb.net/?retryWrites=true&w=majority') 
.then(() => {
    console.log('db connected')
})
.catch((err) =>{
    console.log(err.message)
});
const PORT = 8890;
const app = express();
app.use(express.json());
app.use('/seed', seedRouter)
app.use('/users', userRoutes)

app.listen(PORT, ()=>{
    console.log(`server running at http://localhost:${PORT}`);

});
