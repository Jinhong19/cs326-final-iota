const orderRouter = require("express").Router()

orderRouter.route("/").post(createHandler).get(readHandler)

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

// read all the orders for a restaurant
async function readHandler(req, res): Promise<void> {
    await readOrder(req.query.restaurantId, res)
}

async function readOrder(restaurantId: string, res): Promise<void> {
    // should get this from database later
    let orderContent = [
        {
            name: "pizza",
            price: 3.55,
            quantity: 2,
        },
    ]
    // should generate this automatically
    let callnumber = 12
    let output = {
        result: "success",
        restaurantId: restaurantId,
        callnumber: callnumber,
        content: orderContent,
    }
    res.write(JSON.stringify(output))
    res.end()
}

module.exports = orderRouter
