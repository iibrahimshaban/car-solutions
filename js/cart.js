let totalPriceSection = document.getElementById('totalPrice')
let cart = localStorage.cartData == null ? [] : JSON.parse(localStorage.cartData)
let cartContainer = document.getElementById('order-body')
const deleteBtn = document.getElementById('deleteAll')

displayItems()

function calculateTotalPrice(){
    let price = document.querySelectorAll('.cart-wrapper .order-row .price');
    console.log(price)
    let totalPrice = 0
    price.forEach(x => {
        totalPrice += Number.parseInt(x.innerHTML)
    })

    totalPriceSection.innerText = `${totalPrice} $`
}

function displayItems(){
    cartContainer.innerHTML = ''
    cart.forEach((element,index) => {
        let orderRowDiv = document.createElement('div');
        orderRowDiv.classList.add('order-row');

        let item = `
                    <p>${itemCount(element.Name)}</p>
                    <p class="m">${element.Name}</p>
                    <p class="price">${element.price}</p>
                    <button type="button" onclick="removeItem('${index}')" class="remove">remove</button>
        `
        orderRowDiv.innerHTML += item
        cartContainer.appendChild(orderRowDiv)
    })

    calculateTotalPrice()
}

function removeItem(i){
    cart.splice(i,1)
    localStorage.setItem('cartData',JSON.stringify(cart))
    displayItems()
}

function itemCount(name){
   let filteredItems = cart.filter(ele => ele.Name == name)
   return filteredItems.length
}

deleteBtn.addEventListener('click',e =>{
    localStorage.removeItem('cartData')
    displayItems()
})