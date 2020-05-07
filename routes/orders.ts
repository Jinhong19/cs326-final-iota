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
    await readOrder(req.body.restaurantId, res)
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
        // orders: this.orders,
        orders: orders,
    }
    res.write(JSON.stringify(output))
    res.end()
}

// update all the orders for a restaurant
async function updateHandler(req, res): Promise<void> {
    console.log("update order handler")
    await updateOrder(req.query.orderId, res)
}

async function updateOrder(orderId: string, res): Promise<void> {
    let order_result = "success"

    let output = {
        result: "success",
        orderId: orderId,
        order_result: order_result,
    }

    res.write(JSON.stringify(output))
    res.end()
}
