const menusRouter = require("express").Router()

menusRouter.route("/").get()

module.exports = menusRouter