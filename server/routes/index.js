const { Router } = require("express");
const { routeSendEmail } = require("../controllers");
const routes = Router()

routes.post("/email", routeSendEmail)

module.exports = routes;