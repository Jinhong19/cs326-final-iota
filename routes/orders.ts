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
    // should get this from database later, mock content for all restaurantId
    let orders = [
        {
            callNumber: 1,
            content: [
                {
                    name: "Pizza",
                    price: 3.55,
                    quantity: 2,
                },
                { name: "Ice cream", price: 33.1213, quantity: 1 },
            ],
        },
        {
            callNumber: 22,
            content: [
                {
                    name: "Cookie",
                    price: 1.34,
                    quantity: 3,
                },
                { name: "Apple", price: 0.12, quantity: 1 },
            ],
        },
    ]
    let output = {
        result: "success",
        restaurantId: restaurantId,
        orders: orders,
    }
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
        result: result,
    }
    res.write(JSON.stringify(output))
    res.end()
}

module.exports = orderRouter
