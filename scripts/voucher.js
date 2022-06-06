async function getVoucher(){
    try{
    let url =`https://masai-vouchers-api.herokuapp.com/api/vouchers`
    let res = await fetch(url)
    let vouch =  await res.json()
    console.log(vouch)
    appendCVouchers(vouch[0].vouchers)
    }
    catch(error){
        console.log(error)
    }
}

getVoucher()


let voucher_data = document.getElementById("voucher_list")

function appendCVouchers(data){

    data.forEach(function(elem){
        let box = document.createElement("div")
        box.setAttribute("class","voucher")
        let h2 = document.createElement("h2")
        h2.innerText=elem.name

        let imag = document.createElement("img")
        imag.src =elem.image

        let p1 = document.createElement("p")
        p1.innerText= elem.price

        let btn = document.createElement("button")
        btn.innerText = "Add"
        btn.setAttribute("class","buy_voucher")
        btn.addEventListener("click",function(){
            addkar(elem)
        })
        box.append(h2,imag,p1,btn)

        voucher_data.append(box)


    })
}

function addkar(elem){
    let purchaseKey = JSON.parse(localStorage.getItem("purchase")) || []

    let objj = {
        productName:elem.name,
        productImage :elem.image,
        productPrice :elem.price,
    }
    purchaseKey.push(objj)
    localStorage.setItem("purchase",JSON.stringify(purchaseKey))
}


