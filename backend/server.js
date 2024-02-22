

import workoutRoute from "./routes/workout.route.js"
import 'dotenv/config'
import  express from "express";
const app=express()
app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api/v1/users/workouts',workoutRoute);


export {app}