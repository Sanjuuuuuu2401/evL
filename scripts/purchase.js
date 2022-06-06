let purchusp = JSON.parse(localStorage.getItem("purchase"))

sfgfggh(purchusp)



function sfgfggh(data){

    data.forEach(function(elem){
        let box1 = document.createElement("div")

        let h21 = document.createElement("h2")
        h21.innerText=elem.productName

        let imag1 = document.createElement("img")
        imag1.setAttribute("src",elem.productImage)

        let p11 = document.createElement("p")
        p11.innerText= elem.productPrice

      
        box1.append(h21,imag1,p11)

        document.getElementById("purchased_vouchers").append(box1)


    })
}