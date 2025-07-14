//const data 
const createCarForm = `
    <form action="" id="create">
                <h1>enter the new car details</h1>
                <div id="errors">
                </div>
                <div class="field">
                    <label for="name">name</label>
                    <input type="text" id="name">
                </div>
                <div class="field">
                    <label for="catigory">catigory</label>
                    <input type="text" id="catigory">
                </div>
                <div class="field">
                    <label for="price">price</label>
                    <input type="text" id="price">
                </div>
                <div class="field">
                    <label for="status">status</label>
                    <input type="text" id="status">
                </div>
                <div class="field">
                    <label for="kilometer-count">kilometer Count</label>
                    <input type="text" id="kilometer-count">
                </div>
                <div class="field">
                    <label for="pick-up-location">pick up location</label>
                    <input type="text" id="pick-up-location">
                </div>
                <div class="field">
                    <label for="license-duration">license duration</label>
                    <input type="text" id="license-duration">
                </div>
                <div class="field">
                    <label for="count">count</label>
                    <input type="number" id="count">
                </div>
                <div class="field">
                    <label for="imageBtn">inset an image :</label>
                    <button id="imageBtn" class="btn" type="button">add file</button>
                </div>
                <div class="buttons">
                    <input type="submit" value="Create" id="submitCreate" class="submitBtn">
                    <input type="reset" value="reset" id="resetCreate" class="resetBtn">
                </div>
            </form>
            <div class="image-selector hidden">
                <img src="/images/Audi-car.png" alt="">
                <img src="/images/skoda-car.webp" alt="">
                <img src="/images/VolksWagen-car.png" alt="">
                <img src="/images/kia-car.png" alt="">
                <img src="/images/bmw-car.png" alt="">
            </div>
`
const rentalCarForm = `
    <form action="" id="rent">
                <h1>enter the rental car details</h1>
                <div id="errors">
                </div>
                <div class="field">
                    <label for="name">name</label>
                    <input type="text" id="name">
                </div>
                <div class="field">
                    <label for="catigory">catigory</label>
                    <input type="text" id="catigory">
                </div>
                <div class="field">
                    <label for="price">price</label>
                    <input type="text" id="price">
                </div>
                <div class="field">
                    <label for="rental-period">rental period</label>
                    <input type="text" id="rental-period">
                </div>
                <div class="field">
                    <label for="pick-up-locationR">pick up location</label>
                    <input type="text" id="pick-up-locationR">
                </div>
                <div class="field">
                    <label for="count">count</label>
                    <input type="number" id="count">
                </div>
                 <div class="field">
                    <label for="imageBtn">inset an image :</label>
                    <button id="imageBtn" class="btn" type="button">add file</button>
                </div>
                 <div class="buttons">
                    <input type="submit" value="Create" id="submitCreate" class="submitBtn">
                    <input type="reset" value="reset" id="resetCreate" class="resetBtn">
                </div>
            </form>
            <div class="image-selector hidden">
                <img src="/images/Audi-car.png" alt="">
                <img src="/images/skoda-car.webp" alt="">
                <img src="/images/VolksWagen-car.png" alt="">
                <img src="/images/kia-car.png" alt="">
                <img src="/images/bmw-car.png" alt="">
            </div>
`
const updateDataForm = `
<div class="cars">
                <table>
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>pick up location</th>
                        <th>Update</th>
                        <th>delete</th>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
`
const updateData = `
 <form action="" id="updateForm">
                <h1> update car details</h1>
                <div id="errors">
                </div>
                <div class="field">
                    <label for="name">name</label>
                    <input type="text" id="name">
                </div>
                <div class="field">
                    <label for="catigory">catigory</label>
                    <input type="text" id="catigory">
                </div>
                <div class="field">
                    <label for="price">price</label>
                    <input type="text" id="price">
                </div>
                <div class="field">
                    <label for="status">status</label>
                    <input type="text" id="status">
                </div>
                <div class="field">
                    <label for="kilometer-count">kilometer Count</label>
                    <input type="text" id="kilometer-count">
                </div>
                <div class="field">
                    <label for="pick-up-location">pick up location</label>
                    <input type="text" id="pick-up-location">
                </div>
                <div class="field">
                    <label for="license-duration">license duration</label>
                    <input type="text" id="license-duration">
                </div>
                 <div class="field">
                    <label for="rental-period">rental period</label>
                    <input type="text" id="rental-period">
                </div>
                <div class="field">
                    <label for="imageBtn">inset an image :</label>
                    <button id="imageBtn" class="btn" type="button">add file</button>
                </div>
                <div class="buttons">
                    <input type="submit" value="update" id="submitUpdate" class="submitBtn">
                    <input type="reset" value="cancle" id="cancleUpdate" class="resetBtn">
                </div>
            </form>
            <div class="image-selector hidden">
                <img src="/images/Audi-car.png" alt="">
                <img src="/images/skoda-car.webp" alt="">
                <img src="/images/VolksWagen-car.png" alt="">
                <img src="/images/kia-car.png" alt="">
                <img src="/images/bmw-car.png" alt="">
            </div>
`
const CrudsContainer = document.getElementById('cruds')

const displayCreate = document.getElementById('add')
const displayRenatl = document.getElementById('add-rental')
const diplayUpdate = document.getElementById('update')
const diplayDelete = document.getElementById('delete')
const navDisplayer = document.getElementById('nav-displayer')

document.addEventListener('DOMContentLoaded', function () {
    const loginStatus = localStorage.getItem('loginStatus')
    if (!loginStatus || loginStatus !== 'true') {
        location.replace('/html/login.html')
    }
    loadCreateCarForm()
})

setInterval(_ => {
    const loginStatus = localStorage.getItem('loginStatus')
    if (!loginStatus || loginStatus !== 'true') {
        location.replace('/html/login.html')
    }
},1000)

const thirtyMinutes = 30 * 60 * 1000;

let loggingout = setTimeout(() => {
    localStorage.removeItem('loginStatus')
}, thirtyMinutes);


let usernameSection = document.getElementById('username')

let admin = JSON.parse(localStorage.getItem('admin')).username

usernameSection.textContent += admin

displayCreate.addEventListener('click', e => {
    e.preventDefault()
    loadCreateCarForm()
    displayCreate.style.border = '#102230 solid 5px'
    displayRenatl.style.border = 'none'
    diplayUpdate.style.border = 'none'
    diplayDelete.style.border = 'none'
})

displayRenatl.addEventListener('click', e => {
    e.preventDefault()
    LoadRentalCarForm()
    displayCreate.style.border = 'none'
    displayRenatl.style.border = '#102230 solid 5px'
    diplayUpdate.style.border = 'none'
    diplayDelete.style.border = 'none'
})

diplayUpdate.addEventListener('click', e => {
    e.preventDefault()
    loadUpdateDataForm()
    displayCreate.style.border = 'none'
    displayRenatl.style.border = 'none'
    diplayUpdate.style.border = '#102230 solid 5px'
    diplayDelete.style.border = 'none'
})
diplayDelete.addEventListener('click', e => {
    e.preventDefault()
    deleteAllItems()
    displayCreate.style.border = 'none'
    displayRenatl.style.border = 'none'
    diplayUpdate.style.border = 'none'
    diplayDelete.style.border = '#102230 solid 5px'
})

navDisplayer.addEventListener('click', _ => {
    let nav = document.querySelector('nav')
    nav.classList.toggle('hiddenNav')
})

function loadCreateCarForm() {
    CrudsContainer.innerHTML = createCarForm

    let fromCreate = document.getElementById('create')
    let errorSection = document.getElementById('errors')

    let car = {}
    let data;

    if (localStorage.data != null) {
        data = JSON.parse(localStorage.data)
    } else {
        data = [];
    }

    let imageBtn = document.getElementById('imageBtn')
    let imageSection = document.querySelector('.image-selector')
    let images = document.querySelectorAll('.image-selector img')
    let selectedImageSrc = ''


    imageBtn.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        imageSection.style.display = 'block'
    })

    images.forEach(ele => {
        ele.addEventListener('click', e => {
            e.stopPropagation()
            selectedImageSrc = ele.src
            ele.style.background = 'blue'
            ele.parentElement.style.display = 'none'
        })
    })

    document.addEventListener('click', _ => {
        imageSection.style.display = 'none'
    })

    fromCreate.addEventListener('submit', function (s) {
        s.preventDefault()
        let hasErrors = false;
        errorSection.innerHTML = 'the fields : '

        Array.from(fromCreate.elements)
            .filter(ele => ele.tagName.toLowerCase() === 'input' && ele.type === 'text')
            .forEach((element) => {
                if (element.value === '') {
                    hasErrors = true
                    errorSection.innerHTML += `<span>[${element.id}] </span>`
                    element.style.border = '1px solid red'
                }
            })

        if (!hasErrors) {
            createCar()
        } else {
            errorSection.classList.add('errors')
            errorSection.textContent += ' >> are required'
        }
    })

    Array.from(fromCreate.elements).forEach(ele => {
        ele.addEventListener('input', _ => {
            ele.style.cssText = `
        border: none;
        border-bottom: 2px solid black;
        border-radius: 5px;
        `

            sessionStorage.Name = fromCreate[0].value;
            sessionStorage.Catigory = fromCreate[1].value
            sessionStorage.Price = fromCreate[2].value
            sessionStorage.Status = fromCreate[3].value
            sessionStorage.MovingDistance = fromCreate[4].value
            sessionStorage.CarLocation = fromCreate[5].value
            sessionStorage.license = fromCreate[6].value
        })
    })

    function createCar() {
        car.Name = fromCreate[0].value;
        car.Catigory = fromCreate[1].value
        car.Price = fromCreate[2].value
        car.Status = fromCreate[3].value
        car.MovingDistance = fromCreate[4].value
        car.CarLocation = fromCreate[5].value
        car.license = fromCreate[6].value
        car.Type = 'buy'
        car.CarImage = selectedImageSrc

        for (let i = 0; i < fromCreate[7].value; i++) {
            data.push(car)
        }

        localStorage.setItem('data', JSON.stringify(data));
        alert('created successfully')
        fromCreate.reset()
        errorSection.innerHTML = ''
        errorSection.style.border = 'none'
        sessionStorage.clear()
    }


    window.onload = function () {
        fromCreate[0].value = sessionStorage.Name != undefined ? sessionStorage.Name : ''
        fromCreate[1].value = sessionStorage.Catigory != undefined ? sessionStorage.Catigory : ''
        fromCreate[2].value = sessionStorage.Price != undefined ? sessionStorage.Price : ''
        fromCreate[3].value = sessionStorage.Status != undefined ? sessionStorage.Status : ''
        fromCreate[4].value = sessionStorage.MovingDistance != undefined ? sessionStorage.MovingDistance : ''
        fromCreate[5].value = sessionStorage.CarLocation != undefined ? sessionStorage.CarLocation : ''
        fromCreate[6].value = sessionStorage.license != undefined ? sessionStorage.license : ''
    }

}

function LoadRentalCarForm() {
    CrudsContainer.innerHTML = rentalCarForm

    let myForm = document.getElementById('rent')
    let errorSection = document.getElementById('errors')

    loadSessionStorage()

    let car = {}
    let data;

    if (localStorage.rentalData != null) {
        data = JSON.parse(localStorage.rentalData)
    } else {
        data = [];
    }

    let imageBtn = document.getElementById('imageBtn')
    let imageSection = document.querySelector('.image-selector')
    let images = document.querySelectorAll('.image-selector img')
    let selectedImageSrc = ''


    imageBtn.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        imageSection.style.display = 'block'
    })

    images.forEach(ele => {
        ele.addEventListener('click', e => {
            e.stopPropagation()
            selectedImageSrc = ele.src
            ele.style.background = 'blue'
            ele.parentElement.style.display = 'none'
        })
    })

    document.addEventListener('click', _ => {
        imageSection.style.display = 'none'
    })

    myForm.addEventListener('submit', function (s) {
        s.preventDefault()
        let hasErrors = false;
        errorSection.innerHTML = 'the fields : '

        Array.from(myForm.elements)
            .filter(ele => ele.tagName.toLowerCase() === 'input' && ele.type === 'text')
            .forEach((element, index, array) => {
                if (element.value === '') {
                    hasErrors = true
                    errorSection.innerHTML += `<span>[${element.id}] </span>`
                    element.style.border = '1px solid red'
                }
            })

        if (!hasErrors) {
            errorSection.classList.add('hidden')
            createCar()
        } else {
            errorSection.classList.add('errors')
            errorSection.textContent += ' >> are required'
        }
    })

    Array.from(myForm.elements).forEach(ele => {
        ele.addEventListener('input', _ => {
            ele.style.cssText = `
        border: none;
        border-bottom: 2px solid black;
        border-radius: 5px;
        `

            sessionStorage.rentName = myForm[0].value;
            sessionStorage.rentCatigory = myForm[1].value
            sessionStorage.rentPrice = myForm[2].value
            sessionStorage.rentPeriod = myForm[3].value
            sessionStorage.pickUpLocation = myForm[4].value
        })
    })

    function createCar() {
        car.Name = myForm[0].value;
        car.Catigory = myForm[1].value
        car.Price = myForm[2].value
        car.rentPeriod = myForm[3].value
        car.pickUpLocation = myForm[4].value
        car.Type = 'rented'
        car.CarImage = selectedImageSrc

        for (let i = 0; i < myForm[5].value; i++) {
            data.push(car)
        }

        localStorage.setItem('rentalData', JSON.stringify(data));
        alert('created successfully')
        myForm.reset()
        errorSection.innerHTML = ''
        errorSection.style.border = 'none'
        sessionStorage.clear()
    }

    function loadSessionStorage() {
        myForm[0].value = sessionStorage.rentName != undefined ? sessionStorage.rentName : ''
        myForm[1].value = sessionStorage.rentCatigory != undefined ? sessionStorage.rentCatigory : ''
        myForm[2].value = sessionStorage.rentPrice != undefined ? sessionStorage.rentPrice : ''
        myForm[3].value = sessionStorage.rentPeriod != undefined ? sessionStorage.Status : ''
        myForm[4].value = sessionStorage.pickUpLocation != undefined ? sessionStorage.MovingDistance : ''
    }
}

function loadUpdateDataForm() {
    CrudsContainer.innerHTML = updateDataForm
    let carContainer = document.querySelector('.cars tbody')

    let cars = localStorage.data == null ? [] : JSON.parse(localStorage.data)
    let rentalcars = localStorage.rentalData == null ? [] : JSON.parse(localStorage.rentalData) 

    drawData(cars, rentalcars)


    function drawData(buy, rent) {
        carContainer.innerHTML = ''

        for (let i = 0; i < buy.length; i++) {
            let car = `
         <tr>
                            <td>${i + 1}</td>
                            <td>${buy[i].Name}</td>
                            <td>buy</td>
                            <td>${buy[i].CarLocation}</td>
                            <td><button type="button" onclick="updateItem(${i}, 'buy')">Update</button></td>
                            <td><button type="button" onclick="deleteItem(${i}, 'buy')" class="delete">delete</button></td>
         </tr>
        `
            carContainer.innerHTML += car
        }

        for (let i = 0; i < rent.length; i++) {
            let car = `
         <tr>
                            <td>${i + buy.length + 1}</td>
                            <td>${rent[i].Name}</td>
                            <td>rent</td>
                            <td>${rent[i].pickUpLocation}</td>
                            <td><button type="button" onclick="updateItem(${i}, 'rent')">Update</button></td>
                            <td><button type="button" onclick="deleteItem(${i}, 'rent')" class="delete">delete</button></td>
         </tr>
        `
            carContainer.innerHTML += car
        }
    }
}

function updateItem(id, type) {
    CrudsContainer.innerHTML = updateData

    let updateForm = document.getElementById('updateForm')
    console.log(updateForm)
    let errorSection = document.getElementById('errors')

    let car = {}

    if (localStorage.data != null && type === 'buy') {
        car = JSON.parse(localStorage.data)[id];
        document.getElementById('name').value = car.Name || '';
        document.getElementById('catigory').value = car.Catigory || '';
        document.getElementById('price').value = car.Price || '';
        document.getElementById('status').value = car.Status || '';
        document.getElementById('kilometer-count').value = car.MovingDistance || '';
        document.getElementById('pick-up-location').value = car.CarLocation || '';
        document.getElementById('license-duration').value = car.license || '';
        document.getElementById('rental-period').parentElement.style.display = 'none';
    } else if (localStorage.rentalData != null && type === 'rent') {
        car = JSON.parse(localStorage.rentalData)[id];
        document.getElementById('name').value = car.Name || '';
        document.getElementById('catigory').value = car.Catigory || '';
        document.getElementById('price').value = car.Price || '';
        document.getElementById('status').parentElement.style.display = 'none';
        document.getElementById('kilometer-count').parentElement.style.display = 'none';
        document.getElementById('pick-up-location').value = car.pickUpLocation || '';
        document.getElementById('license-duration').parentElement.style.display = 'none';
        document.getElementById('rental-period').value = car.rentPeriod || '';
    } else {
        car = {};
    }

    console.log(car)

    submitBtn = document.getElementById('submitUpdate')

    submitBtn.addEventListener('click', function (event) {
        event.preventDefault()
        console.log('submitting')
         updateCar()
         loadUpdateDataForm()
        
    })

    let imageBtn = document.getElementById('imageBtn')
    let imageSection = document.querySelector('.image-selector')
    let images = document.querySelectorAll('.image-selector img')
    let selectedImageSrc = ''


    imageBtn.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        imageSection.style.display = 'block'
    })

    images.forEach(ele => {
        ele.addEventListener('click', e => {
            e.stopPropagation()
            selectedImageSrc = ele.src
            ele.style.background = 'blue'
            ele.parentElement.style.display = 'none'
        })
    })

    document.addEventListener('click', _ => {
        imageSection.style.display = 'none'
    })

    let cancleBtn = document.getElementById('cancleUpdate')

    cancleBtn.addEventListener('click', e => {
        e.preventDefault()
        loadUpdateDataForm()
    })

    function updateCar() {
        let updatedcar = {};
        if (type == 'buy') {
            updatedcar = {
                Name: document.getElementById('name').value ,
                Catigory:  document.getElementById('catigory').value,
                Price:  document.getElementById('price').value ,
                Status:  document.getElementById('status').value,
                MovingDistance:  document.getElementById('kilometer-count').value ,
                CarLocation: document.getElementById('pick-up-location').value ,
                license:  document.getElementById('license-duration').value ,
                Type:'buy',
                CarImage: selectedImageSrc
            }

            let data = JSON.parse(localStorage.data)
            data[id] = updatedcar
            console.log(data[id])
            localStorage.setItem('data', JSON.stringify(data));
            alert('updated successfully')
            updateForm.reset()
        } else {
            updatedcar = {
                Name: document.getElementById('name').value ,
                Catigory: document.getElementById('catigory').value,
                Price: document.getElementById('price').value ,
                pickUpLocation: document.getElementById('pick-up-location').value ,
                rentPeriod : document.getElementById('rental-period').value,
                type:'rented',
                CarImage: selectedImageSrc
            }

            let data = JSON.parse(localStorage.rentalData)
            data[id] = updatedcar
            console.log(data[id])
            localStorage.setItem('data', JSON.stringify(data));
            alert('updated successfully')
            updateForm.reset()
        }  
    }
}

function deleteItem(id, type) {
    let cars = JSON.parse(localStorage.getItem('data')) || [];
    let rentalcars = JSON.parse(localStorage.getItem('rentalData')) || [];

    if (type === 'rent') {
        if (id >= 0 && id < rentalcars.length) {
            rentalcars.splice(id, 1);
            localStorage.setItem('rentalData', JSON.stringify(rentalcars));
            loadUpdateDataForm()
        }
    } else {
        if (id >= 0 && id < cars.length) {
            cars.splice(id, 1);
            localStorage.setItem('data', JSON.stringify(cars));
            loadUpdateDataForm()
        }
    }
}

function deleteAllItems(){
    let check = confirm('are you sure you wanna delete all the items')
    if(check){
        localStorage.removeItem('data')
        localStorage.removeItem('rentalData')
        loadUpdateDataForm()
        displayCreate.style.border = 'none'
        displayRenatl.style.border = 'none'
        diplayUpdate.style.border = '#102230 solid 5px'
        diplayDelete.style.border = 'none'
    } else{
        location.reload()
    }
}