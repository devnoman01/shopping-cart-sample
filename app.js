function productCount(inputField, updateValue, price) {
    const productInput = document.getElementById(inputField);
    let productNumber = productInput.value;
    let subTotal = 1278;

    function priceUpdate(productValue, updateValue){
        const productPriceInput = document.getElementById(price);
        let newProductPrice;
    
        if(productValue == 'phone-number'){
            newProductPrice = productNumber * 1219;
            if(updateValue == true){
                subTotal = subTotal + 1219;
            } else{
                subTotal = subTotal - 1219;
            }   
        }
        if(productValue == 'case-number'){
            newProductPrice = productNumber * 59;
            if(updateValue == true){
                subTotal = subTotal + 59;
            } else{
                subTotal = subTotal - 59;
            }
        }
        productPriceInput.innerText = newProductPrice;
    }

    if(updateValue == 'increase'){
        productNumber = parseInt(productNumber) + 1;
        priceUpdate(inputField, true);
    }
    if(updateValue == 'decrease'){
        if(parseInt(productNumber) > 1){
            productNumber = parseInt(productNumber) - 1;
            priceUpdate(inputField, false);
        }
    }
    productInput.value = productNumber;
    document.getElementById('sub-total').innerText = subTotal;
    const vatCount = subTotal / 10;
    document.getElementById('tax').innerText = vatCount;
    document.getElementById('total').innerText = vatCount + subTotal;
    
}