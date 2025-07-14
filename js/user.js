const dropDownbtn = document.getElementById('drop-down-btn')
let dropDownList = document.getElementById('nested-list')
const search = document.getElementById('search')
let buyData = JSON.parse(localStorage.getItem('data'))
let rentData = JSON.parse(localStorage.rentalData) || []
let cards = document.querySelectorAll('.swiper .swiper-slide .card')
let itemDetails = document.querySelectorAll('.swiper .swiper-slide .card .more')
let Container = document.getElementById('search-result')
let carDetailsSection = document.querySelector('.car-details')
let wrapper = document.querySelector('.wrapper')
let addToCartBtn = document.querySelectorAll('.buyNow')
let cartData ;

 if(localStorage.cartData != null){
    cartData = JSON.parse(localStorage.cartData)
 }else {
    cartData = []
 }


dropDownbtn.onclick = function (event) {
    event.stopPropagation()
    dropDownList.style.display = 'block'
}
document.onclick = function () {
    dropDownList.style.display = 'none'
}

let swiper;

drawSwiperData(buyData)

function drawSwiperData(data) {
    const uniqueBuyData = data.filter((item, index, self) =>
        index === self.findIndex((t) => t.Name === item.Name)
    );

    const uniqueRentData = rentData.filter((item, index, self) =>
        index === self.findIndex((t) => t.Name === item.Name)
    );


    uniqueBuyData.forEach(d => {
        let card = `
        <div class="swiper-slide">
                        <div class="card">
                            <h1>${d.Name}</h1>
                            <img src=${d.CarImage} alt="">
                            <div class="info">
                                <p type="button" class="price">${d.Price} L.E</p>
                                <button type="button" class="more" onclick="getItemDetails('${d.Name}','buy')">more details</button>
                            </div>
                        </div>
        </div>
        `
        document.querySelector('.swiper-wrapper').innerHTML += card
    })

    uniqueRentData.forEach(d => {
        let card = `
        <div class="swiper-slide">
                        <div class="card">
                            <h1>${d.Name}</h1>
                            <img src=${d.CarImage} alt="">
                            <div class="info">
                                <p type="button" class="price">${d.Price} L.E</p>
                                <button type="button" class="more" onclick="getItemDetails('${d.Name}','rent')">more details</button>
                            </div>
                        </div>
        </div>
        `
        document.querySelector('.swiper-wrapper').innerHTML += card
    })

    if (!swiper) {
        swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    } else {
        swiper.update(); // Update Swiper if already initialized
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', () => swiper.autoplay.stop());
        card.addEventListener('mouseout', () => swiper.autoplay.start());
    });
}

function getItemDetails(item, type) {

    carDetailsSection.style.display = 'block'
    wrapper.classList.add('blur')
    carDetailsSection.innerHTML = ''
    if (type === 'buy') {
        let element = buyData.filter(f => f.Name == item)[0]
        let car = `
     <p id="eixit-blur"><i class="fa-solid fa-circle-xmark" ></i></p>
      <div class="car-swipper">
                    <div class="image">
                        <img src="${element.CarImage}" alt="">
                    </div>
                    <ul>
                        <h1>name : ${element.Name}</h1>
                        <li>catigory :${element.Catigory} </li>
                        <li>price : ${element.Price}</li>
                        <li>status : ${element.Status}</li>
                        <li>moved about : ${element.MovingDistance}</li>
                        <li>Location : ${element.CarLocation}</li>
                        <li>license: ${element.license}</li>
                        <button type="button" class="buyNow" onclick="addToCart('${element.Name}','${element.Price}')">Add to cart</button>
                    </ul>
     </div>  
    `
        carDetailsSection.innerHTML += car
    } else {
        let element = rentData.filter(f => f.Name == item)[0]
        let car = `
     <p id="eixit-blur"><i class="fa-solid fa-circle-xmark" ></i></p>
      <div class="car-swipper">
                    <div class="image">
                        <img src="${element.CarImage}" alt="">
                    </div>
                    <ul>
                        <h1>name : ${element.Name}</h1>
                        <li>catigory :${element.Catigory} </li>
                        <li>price : ${element.Price}</li>
                        <li>pick up Location : ${element.pickUpLocation}</li>
                        <li>rental duration: ${element.rentPeriod}</li>
                        <button type="button" class="buyNow" onclick="addToCart('${element.Name}','${element.Price}')">Add to cart</button>
                    </ul>
     </div>  
    `
        carDetailsSection.innerHTML += car
    }

    let blurExit = document.getElementById('eixit-blur')

    blurExit.addEventListener('click', e => {
        carDetailsSection.style.display = 'none'
        wrapper.classList.remove('blur')
    })
}



drawData(buyData, 'buy')

function drawData(data, type) {
    Container.innerHTML = ''
    if (type === 'buy') {
        data.forEach(element => {
            let car = `
      <div class="car">
                    <div class="image">
                        <img src="${element.CarImage}" alt="">
                    </div>
                    <h1>name : ${element.Name}</h1>
                    <ul>
                        <li>catigory :${element.Catigory} </li>
                        <li>price : ${element.Price}</li>
                        <li>status : ${element.Status}</li>
                        <li>moved about : ${element.MovingDistance}</li>
                        <li>Location : ${element.CarLocation}</li>
                        <li>license: ${element.license}</li>
                        <button type="button" class="buyNow" onclick="addToCart('${element.Name}','${element.Price}')">Add to cart</button>
                    </ul>
     </div>  
    `
            Container.innerHTML += car
        });
    }
    else{
        rentData.forEach(element => {
        let car = `
      <div class="car">
                    <div class="image">
                        <img src="${element.CarImage}" alt="">
                    </div>
                    <h1>name : ${element.Name}</h1>
                    <ul>
                        <li>catigory :${element.Catigory} </li>
                        <li>price : ${element.Price}</li>
                        <li>Location : ${element.pickUpLocation}</li>
                        <li>rental duration: ${element.rentPeriod}</li>
                        <button type="button" class="buyNow" onclick="addToCart('${element.Name}','${element.Price}')">Add to cart</button>
                    </ul>
     </div>  
    `
        Container.innerHTML += car
    });
    }
}

let rentSelector = document.getElementById('rent-car')
let buySelector = document.getElementById('buy-car')

let mood = 'buy'

rentSelector.addEventListener('click',e =>{
    e.preventDefault()
    drawData(rentData,'rent')
    mood = 'rent'
})

buySelector.addEventListener('click',e =>{
    e.preventDefault()
    drawData(buyData,'buy')
    mood = 'buy'
})

search.addEventListener('input', e => {
    let newData;
    if (mood === 'buy') {
        newData = buyData.filter(f =>
            f.Name.toLowerCase().includes(search.value.toLowerCase()) ||
            f.Catigory.toLowerCase().includes(search.value.toLowerCase()))
        drawData(newData, 'buy')
    } else {
        newData = rentData.filter(f =>
            f.Name.toLowerCase().includes(search.value.toLowerCase()) ||
            f.Catigory.toLowerCase().includes(search.value.toLowerCase()))
        drawData(newData, 'rent')
    }
})

function addToCart(name,price){
    let item = {Name: name ,price:price}
    cartData.push(item)
    localStorage.setItem('cartData',JSON.stringify(cartData))
}