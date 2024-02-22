import  express from "express";
import { Router } from "express";
const router=Router()
import {createWorkout,
    getWorkout,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout} from "../controllers/workout.controler.js"


router.route('/').get(getWorkout)
router.route('/:id').get(getSingleWorkout)
router.route('/').post(createWorkout);
router.route('/:id').delete(deleteWorkout)
router.route('/:id').put(updateWorkout)
export default router