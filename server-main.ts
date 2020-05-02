"use strict"

import { Server } from "./server"
import { Database } from "./database"

const database = new Database();
const server = new Server(database)
const port = 8080

server.listen(port)
