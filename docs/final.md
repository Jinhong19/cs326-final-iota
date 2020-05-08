# Final Report

## Title:
Iota

## Subtitle:
Liner

## Semester:
Spring 2020

## Overview:
The basis of liner is a light weight application that will handle our user's pickup needs, without the hassle of waiting in line. The application will allow our users to choose the restaurant they want to order from, and the menu from that restaurant will show up. From the menu the user will choose the item and the amount that they want. Once the user submits the order from the client side it will create an order, which will then be recieved by the restaurant. Once the restaurant is done with the order, they will then update the status of the order to be ready, letting the customer know that their food is ready for pick up.

The reason we decided to create Liner was because we felt that the waiting in line can waste a lot of time for our customers. As well as slowing down businesses for restaurants. However with Liner, customers can order ahead using our application and just pick up when they arrive at the restaurant. This method of placing take out orders is much more effective than phone calling as it avoids human error as well as being able to directly create the order without having someone manually input the order into their system. It also help restaurants, as they can prepare ordered item ahead of time without the stress of handling all the orders at once.

There are application out there with similar functionalities out there such as Doordash and Instacart. However, our service cater more towards "smaller/school establishments" such Roots cafe, baby berk, bubble tea shops, etc. This application was created to serve a niche market and not as a competitor application.

## Team Members:
Jinhong Gan (Jinhong19)

Rudra Guin (rguin26)

Dongwei Wu (DonnyWu)

## User Interface:
[Milestone 1](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/milestone1.md)

## APIs:

[Milestone 2](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/milestone2.md)

## Database:

[Milestone 3](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/milestone2.md)

## URL Routes/Mappings:

Client Side:

Login page: (http://localhost:8080/)  

Place Order page: (http://localhost:8080/place-order.html)  

Confirm Order page: (http://localhost:8080/confirm-order.html)  

Business Side:

Incoming Order page: (http://localhost:8080/incoming-order.html)  

## Authentication/Authorization:

N/A

## Division of Labor:
Jinhong Gan: Implemented incoming order page and login(index.html) page, set up server and database, worked with mongodb atlas, implemented read, update, and create order functionalities, worked on rendering restaurant menu.

Rudra Guin: Worked on update order basic functionality, created and modified mongoDB collection documents, and assisted for rendering menu code.

Note: For some reason, whenever I modified a document, it showed that I would delete the document and then add it again. Git blame does not reflect the contribution for some files. Please look at Git History (--Rudra).

## Conclusion:

Coming into this project our team had varied amount of experiences in web programming. However, we all learned how to create the basic layout of a HTML page using bootstrap/ CSS. We also learned how to use to typescript/ javascript to handle our backend and front functionalities. The hardest part of the project was creating routes for each of our pages, as well as creating a database to interact with our web application.

