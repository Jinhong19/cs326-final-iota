export {};
const updateRouter = require("express").Router()

updateRouter.route("/").post(createHandler).get(updateHandler)

// create a order, base on the content from frontend
async function createHandler(req, res): Promise<void> {
    // store the order in database

    // create response
    let output = {
        result: "success",
    }
    output = Object.assign(output, req.body)
    res.write(JSON.stringify(output))
    res.end()
}

// update all the orders for a restaurant
async function updateHandler(req, res): Promise<void> {
    await updateOrder(req.query.orderId, res)
}

async function updateOrder(orderId: string, res): Promise<void> {
    let result = "success"

    let output = {
        orderId: orderId,
        order_result: result,
    }

    res.write(JSON.stringify(output))
    res.end()
}

module.exports = updateRouter
