const customer = new Map()
customer.set(0,{firstname: "Thunchanok", lastname: "Duangthip", email:"nuk.thunchanok@gamil.com", phone:"0916282047"})
customer.set(1,{firstname: "Tony", lastname: "Stark", email:"tony_S@gmail.com", phone:"0623456789"})
customer.set(2,{firstname: "Thor", lastname: "Odinson", email:"Thorr_Odin@gmail.com", phone:"0987654321"})
customer.set(3,{firstname: "Loki", lastname: "Kiki", email:"Loki_k@gmail.com", phone:"0687451236"})

console.table(customer);
customerinfo = (customer_id) => {
    //GET
    let id = parseInt(customer_id)
    if(customer.has(id)){
        return customer.get(id)
    }else{
        return 'Customer Not Found'
    }
}
module.exports = {
    customerinfo:customerinfo,
    customer:customer,
}