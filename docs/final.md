# Final Report

## Title:
Iota

## Subtitle:
Liner

## Semester:
Spring 2020

## Overview:
The idea of our application Liner generally revolves around the idea of efficiently picking up food. We live in a very busy world where time is everything, we want to help people get some time back by having them avoid lines. This app essentially lets our users order food based on venue and let them choose off the menu for pick up. The app will return to the user an estimate of when the food will be done, and when it’s done it will notify our user. This will in turn not only save our user’s time but also help the food venue from overcrowding customers.

There are similar applications out there such as Grubhub and other delivery services, but they mainly target restaurants. Our app on the other hand targets “fast-food” places, such as McDonalds, Baby berk, and other similarly established venues.

We focus on allowing customers to skip the lines when they place an order, and only for in-store pickup. Even though self-ordering kiosks in some restaurants, customers might still have to wait in a line to place an order. Our website therefore allows customers to avoid waiting in any line.

## Team Members:
Jinhong Gan (Jinhong19)

Rudra Guin (rguin26)

Dongwei Wu (DonnyWu)

## APIs:
### Get Restaurants
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



### Create orders
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

### Get order
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

### Update order
PUT: /orders?orderId=<value>

Parameter  
| key  | type  | description  |  example  |
|---|---|---|---|
| orderId  | string  | id of the order  | localhost:8080/create?id=fsd1221  |

Response  
| key  | type  | description  |
|---|---|---|
| result  | string  | "success" or "error"  |

## Database:


## URL Routes/Mappings:


## Authentication/Authorization:


## Division of Labor:


## Conclusion:

