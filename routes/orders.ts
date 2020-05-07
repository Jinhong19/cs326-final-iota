export class orderRouter {
    public router = require("express").Router()
    private db
    private orderIdNumber: number
    private callNumber: number

    constructor(db) {
        this.db = db
        this.callNumber = 0
        this.orderIdNumber = 0
        this.router.route("/create").post(createHandler.bind(this))
        this.router.route("/read").post(readHandler.bind(this))
        this.router.route("/update").post(updateHandler.bind(this))
    }
}

// create a order, base on the content from frontend
// getting restaurantId, userId, and content from req.body
// need orderId, call number and ready
async function createHandler(req, res): Promise<void> {
    // create entry for database
    const orderId = "order" + this.orderIdNumber
    let appendData = {
        callNumber: this.callNumber,
        ready: false,
    }
    this.orderIdNumber++
    this.callNumber++
    let data = Object.assign(appendData, req.body)

    // store the order in database
    this.db.putOrderByOrderId(orderId, data)

    // create response
    let result = {
        result: "success",
    }
    let output = Object.assign(result, data)
    res.write(JSON.stringify(output))
    res.end()
    console.log(output.result)
}

// read all the orders for a restaurant
async function readHandler(req, res): Promise<void> {
    console.log("read order handler")
    let restaurantId = req.body.restaurantId
    let orders = await this.db.readOrderByRestaurantId(restaurantId)

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
    console.log("update order handler")
    const orderId = req.body.orderId

    // change ready field in database with order id
    this.db.putOrderByOrderId(orderId, { ready: true })

    let output = {
        result: "success",
        orderId: orderId,
    }

    res.write(JSON.stringify(output))
    res.end()
}
