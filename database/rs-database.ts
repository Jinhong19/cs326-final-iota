export class DataBase{
    private pgp = require('pg-promise')();

    private uri ="";
    private dbName : string = "";

    private db: any;

    constructor(dbName : string) {
        this.dbName = dbName;
        this.db = this.pgp(this.uri);
        (async () => {
            let result = await this.db.none('CREATE TABLE restaurant(key VARCHAR(30) PRiMARY KEY, value VARCHAR(30)');
		    console.log(JSON.stringify(result));
        })
    }

}