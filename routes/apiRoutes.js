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
// will circle back with Leif about this findID structure, but for now this seems fine
router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate({_id: req.params.id}, {$push: {exercises: req.body}}, {new: true})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;