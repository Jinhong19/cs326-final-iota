export class restaurantRouter {
    public router = require("express").Router()
    private db
    private restaurantId: string
    private name: string
    private menu: object

    constructor(db) {
        this.db = db
        this.router.route("/").post(createHandler.bind(this)).get(readHandler.bind(this))
        this.restaurantId = ""
        this.name = ""
        this.menu = []
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
    console.log("getting restaurant")
    await readRestaurant(req.query.readRestaurant, res)
}

async function createHandler(req, res): Promise<void> {
    const restaurantId = this.restaurantId

    let input = {
        name: this.name
    }

    let data = Object.assign(input, req.body)

    this.db.findOneRestaurant(restaurantId,data)
    
    // create response
    let response = {
        result: "success",
        //restaurantId: restaurantId,
        restaurantName: name,
        menu: this.menu
    }

    let output = Object.assign(response, req.body)
    res.write(JSON.stringify(output))
    res.end()
}
