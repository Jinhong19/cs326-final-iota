let http = require('http');
let url = require('url');
let express = require('express');
let cors = require("cors")

export class placeorder{

    private theDatabase;

    private restaurantsRouter = require("./routes/restaurants");
    private menusRouter = require("./routes/menus");
    private ordersRouter = require("./routes/orders");

    // Server stuff: use express instead of http.createServer
    private server = express();
    private port = 8080;
    private router = express.Router();

    constructor() {
        this.server.use(express.static);
        this.server.use("/", express.static("./public"))

        this.server.use("/restaurants", this.restaurantsRouter)
        this.server.use("/menus", this.menusRouter)
        this.server.use("/orders", this.ordersRouter)
    }

    public async createCounter(request: string, response) : Promise<void> {
        console.log("creating counter named '" + request + "'");
        await this.theDatabase.put(request, 0);
        response.write(JSON.stringify({'result' : 'created',
            'request' : request,
            'value' : 0 }));
        
        response.end();
    }


}
