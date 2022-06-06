function vouch(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let address = document.getElementById("address").value
    let amount = document.getElementById("amount").value

    let  obj = {
        Username : name,
        UserEmail : email,
        userAddress : address,
        userAmount :amount
    }

    let userKey =JSON.parse(localStorage.getItem("user")) || []
    userKey.push(obj)
    localStorage.setItem("user",JSON.stringify(userKey))
    

}