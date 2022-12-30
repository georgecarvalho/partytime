const router = require("express").Router()

//Services routes
const servicesRouter = require("./services")
router.use("/", servicesRouter)

//Parties routes
const partiesRouter = require("./parties")
router.use("/", partiesRouter)

module.exports = router