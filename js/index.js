let userName = document.querySelector("#userName")
let userEmail = document.querySelector("#userEmail")
let userPassword = document.querySelector("#userPassword")
let message = document.querySelector("#message")
let loginEmail = document.querySelector("#loginUserEmail")
let loginPassword = document.querySelector("#loginUserPassword")
let welcomeMess = document.querySelector('#header')
let btn = document.querySelector("#btnSign"); 





let users =[]



let userRegex = {
    userName : {
        value : /^\w{5,}$/,
        status : false
    },
    userEmail : {
        value : /^.{5,}(\.com)$/,
        status : false
    },
    userPassword : {
        value : /^.{5,}$/,
        status : false
    },
}

if(location.href.includes("http://127.0.0.1:5500/pages/logined%20In.html")){
    let User = JSON.parse(localStorage.getItem("new"))
    welcomeMess.innerHTML = `<h1> Welcome ${User}</h1>`
}


//!   sign up 
function addSignUp(){
    if( userName.value != "" && userEmail.value != "" && userPassword.value != ""){
        let user = {
            userName : userName.value,
            userEmail : userEmail.value,
            userPassword : userPassword.value,
        }
        users.push(user)
        message.classList.replace( "d-block" , "d-none")
    }else{
        message.classList.replace("d-none" , "d-block")

    }
    addStorage()
    clearform()
}

function clearform(){
    userName.value = null
    userEmail.value = null
    userPassword.value = null
}

function addStorage(){
    localStorage.setItem("user" , JSON.stringify(users))
}

function isInputValid(element){
    let exName = document.querySelector(".exName")
    let exEmail = document.querySelector(".exEmail")
    let exPass = document.querySelector(".exPass")
    if(userRegex[element.id].value.test(element.value)==true){
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
        userRegex[element.id].status = true
    }else{
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
        userRegex[element.id].status = false
    }
    toggelBtn()

}
function toggelBtn(){
    if (userRegex.userName.status && userRegex.userEmail.status && userRegex.userPassword.status ){
        btn.disabled=false
    }else{
        btn.disabled=true
    }
}

//!   login 

function canlogin(){
    let user = JSON.parse(localStorage.getItem("user"))
    for(let i = 0 ;i<user.length ;i++){
        if(loginEmail.value.toLowerCase()== user[i].userEmail.toLowerCase()&& loginPassword.value.toLowerCase()== user[i].userPassword.toLowerCase()){
            location.replace("http://127.0.0.1:5500/pages/logined%20In.html")
            let newStorage = localStorage.setItem("new" , JSON.stringify(user[i].userName))
        }else if(loginEmail.value == "" && loginPassword.value == ""){
            document.querySelector("#show").innerHTML = `<p class="text-danger mb-3 text-center">All input is required</p>`
        }else{
            document.querySelector("#show").innerHTML = `<p class="text-danger mb-3 text-center">wrong email or password</p>`
        }
    }
    clearloginForm()
    
}
    
function clearloginForm(){
    loginEmail.value = null;
    loginPassword.value = null
}


// ! loggedin
function logOut(){
    location.replace("http://127.0.0.1:5500/index.html")
}

function showBtn(){
    let btnLogout = document.querySelector("#logout")
    if(btnLogout.classList.contains("d-none")){
        btnLogout.classList.replace("d-none" , "d-block")
    }else{
        btnLogout.classList.replace("d-block" , "d-none")
    }
    
}








