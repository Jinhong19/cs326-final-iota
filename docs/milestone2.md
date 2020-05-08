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

Place order: Currently using static data from place-order.ts. It will be using these data to create an order for the user, Once the user clicks the button, it will give a notfication to the user that their order is ready through jquery.
![Place order screenshot](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/images/place_order_interface.PNG)

Update order: Mock data representing the success of an order, currently using static data from update_orders.ts. It will be using this in the backend to verify that an order was successfully placed and received by a restaurant user.
![Update order screenshot](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/images/update_order.png)

# Division of Labor
Jinhong Gan - Set up server and router, implemented create and get order api in routes/orders.ts, implemented typescript for geting order in frontend in incoming-order.ts, created api documentation for read restaurant, create, read, and update orders, wrote setup.md/readme.md

Dongwei Wu - implented readRestaurant (read Restaurant api) on restaurant.ts for backend, implented CRUD Create on place-order.ts for frontend, Helped create the documentation for the apis.

Rudra Guin - implemented updateOrder, stated in Order API, on orders.ts for backend, implemented Update on incoming-order.ts for frontend, also committed to creating the API documentation.