const express = require("express");
const app = express();
const PizzaService = require("../service/pizzaService");
const Pizza = require("../model/pizzas");

app.use(express.json());

app.get("/pizzas", (req, res)=>{
    res.status(200).send(PizzaService.getPizza());
})

app.post("/new-pizza", (req, res)=>{
    try{
        const newPizza = Pizza.fromJson(req.body);
        PizzaService.addPizza(newPizza);
        res.status(200).send("Succesfully Added!");
    }
    catch(error){
        res.status(400).send(error.message);
    }
})
app.put("/update-pizza/:id", (req, res)=>{
    try{
        const updatePizza = Pizza.fromJson(req.body);
        const id = parseInt(req.params.id);
        PizzaService.updatePizza(id, updatePizza);
        res.status(200).send("Updated successfully!");
    }
    catch(error){
        res.status(400).send(error.message);
    }
})

app.delete("/delete-pizza/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    res.send(PizzaService.deletePizza(id));
})

app.listen(3000, ()=> console.log("Listening..."));