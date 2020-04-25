# api documentation

## Create order

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