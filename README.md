## Pizza_Menu_API
A REST API that facilitates Management of Pizza Menu of a Pizza Shop.
This RESTful API is built using Node.js and Express.js to manage the menu of a pizza shop. It allows you to create, read, update, and delete pizza items in the menu.

#### API endpoints:
* GET /pizzas: Retrieves the full menu list
* POST /new-pizza: Adds a new pizza item to the menu
* PUT /update-pizza/:id: Updates an existing pizza item by its ID
* DELETE /delete-pizza/:id: Deletes an existing pizza item by its ID

#### Each pizza item has the following attributes:

* id: the id of the pizza
* name: the name of the pizza
* ingredients: ingredients used in pizza.
* price: the price of the pizza
