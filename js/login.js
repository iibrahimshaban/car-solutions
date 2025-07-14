const adminCredintials = {
    username: 'Ibrahim',
    password:'Ibrahim000'
}

if (localStorage.getItem('admin') == undefined){
    localStorage.setItem('admin',JSON.stringify(adminCredintials))
}
let myForm = document.forms[0]

let errorSection = document.getElementById('error-box')

myForm.addEventListener('submit', e => {
    e.preventDefault()
    let result = validatePassword(myForm[0].value,myForm[1].value)
    console.log(result)
    if (result){
        localStorage.setItem('loginStatus',true)
        window.location.href = '/html/admin.html'
    }else{        
        errorSection.innerHTML = ''
        errorSection.classList.add('errors')
        let content = document.createTextNode('invalid user credintials')
        errorSection.append(content)
    } 
})

let inputs = myForm.querySelectorAll('input')

inputs.forEach(element => {
    element.addEventListener('input', _ => {
        errorSection.classList.remove('errors')
        errorSection.innerHTML = ''
    })
});

function validatePassword(username, password) {
    let user = JSON.parse(localStorage.getItem('admin')).username
    let pass = JSON.parse(localStorage.getItem('admin')).password

    if (username == user && password == pass) {
        return true
    }
    else {
        return false
    }

}

const openEye = document.querySelector('.fa-eye-slash')
const CloseEye = document.querySelector('.fa-eye')

openEye.addEventListener('click',_ => {
    inputs[1].type = 'text'
    openEye.parentElement.style.display = 'none';
    CloseEye.parentElement.style.display = 'inline-block';
})

CloseEye.addEventListener('click',_ => {
    inputs[1].type = 'password'
    openEye.parentElement.style.display = 'inline-block';
    CloseEye.parentElement.style.display = 'none';
})