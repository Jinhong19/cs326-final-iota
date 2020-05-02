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

    // not tested yet, test after router + database integration
    public async putOrderByOrderId(orderId, updateList): Promise<void> {
        let db = this.client.db(this.dbName)
        let collectionName = "Order"
        let collection = db.collection(collectionName)
        console.log("put with orderId: " + orderId)
        let result = await collection.updateOne(
            { orderId: orderId },
            { $set: updateList },
            { upsert: true }
        )
        console.log("result = " + result)
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

    // public async del(key: string): Promise<void> {
    //     let db = this.client.db(this.dbName)
    //     let collection = db.collection(this.collectionName)
    //     console.log("delete: key = " + key)
    //     let result = await collection.deleteOne({ name: key })
    //     console.log("result = " + result)
    //     // await this.db.del(key);
    // }

    // public async isFound(key: string): Promise<boolean> {
    //     console.log("isFound: key = " + key)
    //     let v = await this.get(key)
    //     console.log("is found result = " + v)
    //     if (v === null) {
    //         return false
    //     } else {
    //         return true
    //     }
    // }
}
