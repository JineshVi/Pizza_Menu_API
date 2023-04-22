## Pizza_Menu_API
A REST API that facilitates Management of Pizza Menu of a Pizza Shop.
This is A RESTful API developed using Node.js and Express.js to provide facility to manage the Menu of a Pizza Shop. It provides all the CRUD operations. 

# API endpoints:
GET /pizzas: Retrieves the full menu list
POST /new-pizza: Adds a new pizza item to the menu
PUT /update-pizza/:id: Updates an existing pizza item by its ID
DELETE /delete-pizza/:id: Deletes an existing pizza item by its ID

# Each pizza item has the following attributes:

id: the id of the pizza
name: the name of the pizza
ingredients: ingredients used in pizza.
price: the price of the pizza
