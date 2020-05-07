export class Database {
    private MongoClient = require("mongodb").MongoClient
    private uri
    private client
    private dbName: string = "development"

    constructor() {
        let password
        if (!process.env.PASSWORD) {
            let secrets = require("./secrets.json")
            password = secrets.password
        } else {
            password = process.env.PASSWORD
        }
        this.uri =
            "mongodb+srv://liner:" +
            password +
            "@cluster0-ljwuj.mongodb.net/test?retryWrites=true&w=majority"

        this.client = new this.MongoClient(this.uri, { useNewUrlParser: true })
        ;(async () => {
            await this.client
                .connect()
                .then(() => {
                    console.log(this.dbName + " database connected")
                })
                .catch((err) => {
                    console.log(err)
                })
        })()
    }

    // handle create and update order
    public async putOrderByOrderId(orderId, updateList): Promise<void> {
        let db = this.client.db(this.dbName)
        let collectionName = "order"
        let collection = db.collection(collectionName)
        console.log("mongodb: put order by orderId: " + orderId)
        let result = await collection.updateOne(
            { orderId: orderId },
            { $set: updateList },
            { upsert: true }
        )
    }

    // returns an array of at least {orderId: ?, callNumber: ?, content: array}, with ready: false, sort by callNumber
    public async readOrderByRestaurantId(restaurantId) {
        let db = this.client.db(this.dbName)
        let collectionName = "order"
        let collection = db.collection(collectionName)
        console.log("mongodb: read order by restaurantId: " + restaurantId)
        let result = await collection
            .find({
                restaurantId: restaurantId,
                ready: false,
            })
            .sort({ callNumber: 1 })
            .toArray()
        return result
    }

    public async findOneRestaurant(restaurantId: string): Promise<string>{
        let result = await this.client.db(this.dbName).collection("restaurant").findOne({restaurantId: String});
        console.log("get: returned " + JSON.stringify(result))
        if (result){
            console.log(`No listings found with the name '${restaurantId}'`);
            console.log(result);
            return result.value
        }else{
            console.log('No results found');
            return null
        }
            
    }

    // public async get(key: string): Promise<string> {
    //     let db = this.client.db(this.dbName) // this.level(this.dbFile);
    //     let collection = db.collection(this.collectionName)
    //     console.log("get: key = " + key)
    //     let result = await collection.findOne({ name: key })
    //     console.log("get: returned " + JSON.stringify(result))
    //     if (result) {
    //         return result.value
    //     } else {
    //         return null
    //     }
    // }
}
