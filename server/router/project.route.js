const express = require('express');
const projectController = require('../controller/project.controller');

const router = express.Router();

router.post('/projectimport',  projectController.InsertProject);

router.get('/import',  projectController.GetProject);

router.post('/editimport/:projectunkid',  projectController.EditProject);

router.get('/import/:projectunkid',  projectController.GeSingletproject);


module.exports = router;

