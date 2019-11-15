const router = require('express').Router();
const exercisesRoutes = require('./exercises');
const usersRoutes = require('./users');

router.use('/exercises', exercisesRoutes);
router.use('/users', usersRoutes);

module.exports = router;