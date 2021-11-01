const router = require('express').Router();
const db = require('../models');

// GET route for getting all of the posts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
            })
        .catch(err => {
            res.json(err);
        });
});