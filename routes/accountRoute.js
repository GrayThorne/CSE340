// accountRoute.js

// Needed Resources
const express = require("express");
const router = new express.Router();
const utilities = require("../utilities/");
const accountController = require("../controllers/accountController");
const regValidate = require('../utilities/account-validation')

// "GET" route for the "My Account" link
router.get("/login", utilities.handleErrors(accountController.buildLogin));

// "GET" route for the "My Account" link
router.get("/register", utilities.handleErrors(accountController.buildRegister));
router.post(
    "/register",
    regValidate.registationRules(),
    regValidate.checkRegData,
    utilities.handleErrors(accountController.registerAccount)
  )

// Error handler middleware
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Process the login attempt
router.post(
    "/login",
    (req, res) => {
      res.status(200).send('login process')
    }
  )
  
module.exports = router;