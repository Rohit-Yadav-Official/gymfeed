import {Workout }from "../models/workout.js"
import mongoose from "mongoose"
// get all the wokout
const getWorkout= async (req,res)=>{
    
    try{
        const workout=await Workout.find({});
        res.status(200)
        .json(workout);


      }
    catch(err){
     console.log("err while feacthing data from database at getworkout")
     res.status(400)
     .json(err)
    }
}
 // get single workout

 const getSingleWorkout=async (req,res)=>{
    try{
       const {id}= req.params;
       const workout=await Workout.findById(id);
       if(!workout){
        return res.status(404)
        .json({err: "no such workout "})
       }
       res.status(200)
       .json(workout);
    }
    catch(err){
        res.status(400)
        .json(err)
    }
 }


//create a workout

const createWorkout=async (req,res)=>{
 
   try{
        const {title,reps,load}=req.body;
       const workout= await Workout.create({title,reps,load})
        res.status(200)
        .json(workout);
   }
   catch(err){
    console.log("some thing went wrong while creating workout ")
    res.status(400)
    .json({err :err.message})
   }
}
// delete the workout 
const deleteWorkout=async(req,res)=>{

    try{
       const {id}=req.params;
       if((!mongoose. Types.ObjectId.isValid(id))){
         return res.status(404)
         .json({err: "no such workout exist"})
       }
       const workout=await Workout.findOneAndDelete({_id:id});
       if(!workout){
        res.status(404)
        .json({err:"no such workout"})
       }
       res.status(200)
       .json(workout);
    }
    catch(err){

    }
}
// update the workout 
const updateWorkout= async (req,res)=>{

    try{
       const {id}= req.params
       if((!mongoose. Types.ObjectId.isValid(id))){
        return res.status(404)
        .json({err: "no such workout exist"})
      }
     const  workout=await Workout.findOneAndUpdate({_id:id},{
        ...req.body
     });
     if(!workout){
        res.status(400)
        .json({err:" can't get workout"})
     }
     res.status(200)
     .json(workout);



    }
    catch(err){
        console.log("can't update workout")
    }
}
export{
    createWorkout,
    getWorkout,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
}