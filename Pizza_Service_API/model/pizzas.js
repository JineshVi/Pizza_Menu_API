const Joi = require("joi");

class Pizza{
    constructor(id, pizzaName, ingredients, price){
        this.id = id;
        this.pizzaName = pizzaName;
        this.ingredients = ingredients;
        this.price = price;
    }

    getId(){
        return this.id;
    }
    getPizzaName(){
        return this.pizzaName;
    }
    getIngredients(){
        return this.ingredients;
    }
    getPrice(){
        return this.price;
    }

    setId(id){
        this.id = id;
    }
    setPizzaName(pizzaName){
        this.pizzaName = pizzaName;
    }
    setIngredients(ingredients){
        this.ingredients = ingredients;
    }
    setPrice(price){
        this.price = price;
    }

    static get schema() {
        return Joi.object({
          id: Joi.number().integer().min(1),
          pizzaName: Joi.string().trim().required(),
          ingredients: Joi.array().items(Joi.string().trim()).required(),
          price: Joi.number().positive().required(),
        });
    }
    
    static fromJson(json) {
        const { error, value } = this.schema.validate(json);
        if (error) {
          throw new Error(`Invalid pizza data: ${error.message}`);
        }
        return new Pizza(value.id, value.pizzaName, value.ingredients, value.price);
    }
}

module.exports = Pizza;