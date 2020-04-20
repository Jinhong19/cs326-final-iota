const orderRouter = require("express").Router()

orderRouter.route("/").post()

orderRouter.route("/").get()

module.exports = orderRouter
