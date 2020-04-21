const express = require("express")
const cors = require("cors")

export class Server {
    private server = express()

    // require routers
    private restaurantsRouter = require("./routes/restaurants")
    private menusRouter = require("./routes/menus")
    private ordersRouter = require("./routes/orders")

    constructor() {
        // middleware
        this.server.use(cors())
        // send and receive json files
        this.server.use(express.json())

        // Serve static pages from a particular path.
        this.server.use("/", express.static("./pages"))

        // Set up routers
        this.server.use("/restaurants", this.restaurantsRouter)
        this.server.use("/menus", this.menusRouter)
        this.server.use("/orders", this.ordersRouter)
    }
    public listen(port): void {
        this.server.listen(port, () =>
            console.log("App listening on port "+ port + "!")
        )
    }
}
