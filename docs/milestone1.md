# Data Model and Interactions
Restaurants: The restaurants that users can place an order in. Created by developers for now. Read from the search bar in the ordering page. It has the following fields:
- restaurant id
- the name of the restaurant
- the location
- a brief description about this restaurant

Menus: Created by developers for now. Read from the ordering page. Fields:
- the restaurant that created this menu(id)
- type of the menu(default, morning, special)
- food items
  - name, price
  - ...

Orders: A customer can place an order based on the menu of a restaurant they see. Read from the confirm page. Fields:
- order id
- the time the order is placed
- the status of the order (order preparing, order ready)
- the restaurant preparing this order (id)
- the user that placed the order(id)
- food items
  - name, price
  - ...

Users: users created in the login page(sign up). Fields:
- user id
- first and last name
- email address
- phone number
- password

# User Interface
## Sign In  
![sign in wireframe](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/images/sign_In_wireframe.PNG)  
![sign in code](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/images/sign_in_screenshot.png)  

## Sign Up  
![sign up wireframe](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/images/sign_up_wireframe.PNG)  
![sign up code](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/images/Sign_Up_Screenshot.PNG)

## Place Order  
![place order wireframe](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/images/place_order_wireframe.PNG)  
![place order code](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/images/place_order_screenshot.png)

## Checkout  
![checkout wireframe](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/images/checkout_wireframe.png)  
![checkout code](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/images/Checkout_screenshot.PNG)

## Confirm  
![confirm wireframe](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/images/confirm_page_wireframe.png)  
![confirm code](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/images/confirm_page_screenshot.png)

## Incoming Order
![incoming order wireframe](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/images/incoming_order_wireframe.png)  
![incoming order code](https://github.com/Jinhong19/cs326-final-iota/blob/master/docs/images/incoming_order_screenshot.png)

# Breakdown of the Division of Labor
Jinhong Gan - data model and interactions, wireframes for checkout page and incoming order page, and HTML/CSS/Bootstrap for login page, place order page, and incoming order page.  

Note: Due to an username error, (DonnyWu) was not able to commit under my username. The commits I've made were the "Sign-up.html" and the "checkout.html". Also for the images I've done "Checkout_screenshot.PNG" and "Sign_Up_Screenshot.PNG".