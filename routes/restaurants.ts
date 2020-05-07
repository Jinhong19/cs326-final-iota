export class restaurantRouter {
    public router = require("express").Router()
    private db

    constructor(db) {
        this.db = db
        this.router.route("/read").get(readHandler.bind(this))
    }
}

async function readHandler(req, res): Promise<void> {
    console.log("getting restaurant")
    let resId = await req.body.restaurantId

    let data = this.db.findOneRestaurant(resId)

    let output = {
        result: "success",
        data: data
    }
    res.write(JSON.stringify(output))
    res.end()

}
