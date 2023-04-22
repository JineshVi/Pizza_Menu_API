let Pizzas = [
    {
        id : 1,
        pizzaName : "Golden Corn Pizza",
        ingredients : ["Mozarella Cheese","Sweet corn"],
        price : 15
    },
    {
        id : 2,
        pizzaName : "Chicken Sausage Pizza",
        ingredients : ["Mozarella Cheese","Chicken Sausages","Tomatoes"],
        price : 15
    },
    {
        id : 3,
        pizzaName : "Veg Paradise Pizza",
        ingredients : ["Mozarella Cheese","Mushrooms","Olives","Capsicum","Tomatoes","Onion"],
        price : 15
    }
];

class PizzaService{
    static getPizza(){
        return Pizzas;
    }

    static addPizza(pizza){
        Pizzas.push(pizza);
    }

    static updatePizza(id, updatedPizza) {
        const pizzaToUpdate = Pizzas.find(pizza => pizza.id === id);
        if (pizzaToUpdate){
            pizzaToUpdate.pizzaName = updatedPizza.pizzaName;
            pizzaToUpdate.ingredients = updatedPizza.ingredients;
            pizzaToUpdate.price = updatedPizza.price;
        } 
        else{
            throw new Error("Pizza not found!");
        }
    }
    static deletePizza(id){
        const index = Pizzas.findIndex(pizza => pizza.id === id);

        if (index === -1) {
            return "Pizza not found";
        }
        
        Pizzas.splice(index, 1);
        return "Pizza successfully deleted";
    }
}

module.exports = PizzaService