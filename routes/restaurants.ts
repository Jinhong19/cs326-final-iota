const restaurantsRouter = require("express").Router()

restaurantsRouter.route("/").get()

module.exports = restaurantsRouter