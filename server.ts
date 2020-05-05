const express = require("express")
const cors = require("cors")

import { orderRouter } from "./routes/orders"
import { restaurantRouter } from "./routes/restaurants"


export class Server {
    private server = express()
    private db
    private orderRouter
    private restaurantRouter

    constructor(db) {
        this.db = db
        // middleware
        this.server.use(cors())
        // send and receive json files
        this.server.use(express.json())

        // Serve static pages from a particular path.
        this.server.use("/", express.static("./pages"))

        // Set up routers
        this.orderRouter = new orderRouter(this.db).router
        this.restaurantRouter = new restaurantRouter(this.db).router
        this.server.use("/restaurants", this.restaurantRouter)
        this.server.use("/orders", this.orderRouter)
    }
    public listen(port): void {
        this.server.listen(port, () =>
            console.log("App listening on port " + port + "!")
        )
    }
}
