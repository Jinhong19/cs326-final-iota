export class orderRouter {
    public router = require("express").Router()
    private db
    // private orders

    constructor(db) {
        this.db = db
        this.router.route("/create").post(createHandler)
        this.router.route("/read").post(readHandler)
        this.router.route("/update").post(updateHandler)

        /*
        this.orders = [
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
        */
    }
}

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

/*
example update function:

async function updateListingByName(client, nameOfListing, updatedListing) {
    result = await client.db("sample_airbnb").collection("listingsAndReviews")
                        .updateOne({ name: nameOfListing }, { $set: updatedListing });

    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}
*/

/*
mock update order function:

async function updateOrder(orderId: string, res) {
    result = await client.db("development").collection("order")
                        .updateOne({ name: nameOfListing }, { $set: updatedListing });

    console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}
*/

async function updateOrder(orderId: string, res): Promise<void> {
    let order_result = "success"

    let output = {
        result: "success",
        orderId: orderId,
        order_result: order_result,
    }

    /*
    const people = [ {name: "john", age:23},
                {name: "john", age:43},
                {name: "jim", age:101},
                {name: "bob", age:67} ];
    const john = people.find(person => person.name === 'john');
    */

    /*
    let x = orders.find(order => order.orderId === orderId)
    orders.splice(x, 1);
    */

    res.write(JSON.stringify(output))
    res.end()
}

