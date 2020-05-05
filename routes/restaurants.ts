export class restaurantRouter {
    public router = require("express").Router()
    private db

    constructor(db) {
        this.db = db
        this.router.route("/").post(createHandler).get(readHandler)
    }
}

async function readRestaurant(restaurantName: string, res) {
    //mock data, testing purposes only
    let menu = [
        {
            name: "pizza",
            price: 3,
        },
    ]

    let output = {
        result: "success",
        restaurantId: "fvr123",
        restaurantName: "pizzaRestaurant",
        menu: [{ name: "food1", price: "price1" }],
    }
    res.write(JSON.stringify(output))
    res.end()
}

async function readHandler(req, res): Promise<void> {
    await readRestaurant(req.query.readRestaurant, res)
}

async function createHandler(req, res): Promise<void> {
    // create response
    let output = {
        result: "success",
    }
    output = Object.assign(output, req.body)
    res.write(JSON.stringify(output))
    res.end()
}
