# database documentation

## A Restaurant Document
```
{
    _id: <ObjectId>,
    restaurantId: String,
    name: String,
    menu: Array
    [
        item: Object 
        {
            name: String,
            price: Double,
        }, ...
    ]
}
```

## An Order Document
```
{  
    _id: <ObjectId>,  
    orderId: String,  
    restaurantId: String,  
    userId: String,  
    callNumber: Integer,  
    ready: Boolean,  
    content: Array  
    [  
        item: Object 
        {  
            name: String,  
            quantity: String  
        }, ...  
    ]  
}  
```

# Division of Labor
Jinhong Gan: set up mongodb and connected it with routers, implemented create, update, and read order funtionality from frontend to database, helped with rendering restaurant menu.

Dongwei Wu: Created restaurant collection on mongoDB for application to use, implemented read function (findOneRestaurant()) for restaurant.

Rudra Guin: Helped with creating and modifying documents of collections for the mongoDB database that were used for our app. Assisted with the front end and back end.
