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

// GET route for getting workout range
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
            })
        .catch(err => {
            res.json(err);
        });
});

// POST route for saving a new workout
router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// PUT route for updating a new exercise
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;