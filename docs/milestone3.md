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