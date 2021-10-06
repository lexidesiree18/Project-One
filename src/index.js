const correctpassword = "CorrectPassword"
function onloginclick(){
    let userinput = document.getElementById("username")
    let passinput = document.getElementById("password")
    let username = userinput.value
    let password = passinput.value
    let iscorrect = checkpassword(password)
    if (iscorrect){
        login(username, password)
    }

}
function checkpassword(password){
    return password == correctpassword;
}
function login(username, password){
    storeusername(username)
    storepassword(password)
}
function isloggedin(){
    let pass = getpassword()
    if (pass == null){
        return false
    }else{
        return checkpassword(pass)
    }
}
function sendtologin(){
    let checkifloggedin = isloggedin()
    if(!checkifloggedin){
        location.replace("/src/index.html")
    }
}
function sendtologout(){
    let checkifloggedin = isloggedin()
    if(checkifloggedin){
        location.replace("/src/logout/logout.html")
    }
}
function storeusername(username){
    localStorage.setItem("username", username)
}
function storepassword(password){
    localStorage.setItem("password", password)
}
function getusername(){
    return localStorage.getItem("username")
}
function getpassword(){
    return localStorage.getItem("password")
}