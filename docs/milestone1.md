# Data Model and Interaction
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
- The time the order is placed
- the status of the order (order preparing, order ready)
- The restaurant preparing this order (id)
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


Note: Due to an username error, (DonnyWu) was not able to commit under my username. The commits I've made were the "Sign-up.html" and the "checkout.html". Also for the images I've done "Checkout_screenshot.PNG" and "Sign_Up_Screenshot.PNG".