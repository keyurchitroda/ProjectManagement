const express = require('express');
const employeeRoute = require('./employee.route');
const projectRoute = require('./project.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/employee',
    route: employeeRoute,
  },
  {
    path: '/project',
    route: projectRoute,
  }
];

defaultRoutes.forEach((route) => {
  
  router.use(route.path, route.route);
});

module.exports = router;
