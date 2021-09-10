const food = new Map()
food.set(0,{item: 'Salad', price: 300})
food.set(1,{item: 'Cupcake', price: 380})
food.set(2,{item: 'Ice cream', price: 200})
food.set(3,{item: 'Taco', price: 250})

console.table(food);

foodinfo = (food_id) => {
    //GET
    let id = parseInt(food_id)
    if(food.has(id)){
        return food.get(id)
    }else{
        return 'Food Not Found'
    }
}
module.exports = {
    foodinfo:foodinfo,
    food:food,
}