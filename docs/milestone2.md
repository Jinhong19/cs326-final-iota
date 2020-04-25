# api documentation

## Get Restaurants

GET: /restaurants?name=\<Value\>

Request Data 
| key | description  | example |
|---|---|---|
| name | (Required) Name of a restaurant | localhost:8080/restaurants?name=pizza%20rest |

Response Data
| key  | type | description |
|---|---|---|
| result | string | The type of operation status: one of "success" or "error"|
| restaurantId | string | The unique id of the restaurant: string |
| restaurantName | string | The name of the restaurant |
| menu | array | the menu of this restaurant, format: [{name: food1, price: 2}, …. ] |



## Create orders

POST: /orders

Request Data  
| key  | type  | description  |
|---|---|---|
| restaurantId  | string  | id of the restaurant for this order  |
| userId  | string  | id of the user who place this order  |
| content  | array  | array of food items  |

Response  
| key  | type  | description  |
|---|---|---|
| result  | string  | "success" or "error"  |

## Get order
Get preparing orders information for a restaurant

GET: /orders?restaurantId=\<value\>

Parameter  
| key  | type  | description  |  example  |
|---|---|---|---|
| restaurantId  | string  | id of the restaurant for this order  | localhost:8080/orders?restaurantId=id123123  |

Response  
| key  | type  | description  |
|---|---|---|
| result  | string  | "success" or "error"  |
| restaurantId  | string  | id of the restaurant for this order  |
| orderId  | string  | id of the order  |
| callNumber| string  | Number called for customer to pick up order  |
| content  | array  | array of food items  |

## Update order

PUT: /orders?orderId=<value>

Parameter  
| key  | type  | description  |  example  |
|---|---|---|---|
| orderId  | string  | id of the order  | localhost:8080/create?id=fsd1221  |

Response  
| key  | type  | description  |
|---|---|---|
| result  | string  | "success" or "error"  |

# Screenshot
Get order: mock data created in back end (routes/order.ts), fetched with typescript (typescript/incoming-order.ts) and rendered with Jquery by modifying html (incoming-order.ts)  
![read order screenshot](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/images/read_order.png)  

# Division of Labor
Jinhong Gan - Set up server and router, implemented create and get order api in routes/orders.ts, implemented typescript for geting order in frontend in incoming-order.ts, created api documentation for read restaurant, create, read, and update orders, wrote setup.md/readme.md