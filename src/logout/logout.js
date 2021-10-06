const statusicon = document.getElementById("status-icon")
function onmousehover(){
    statusicon.src = "/assets/red-x.png"
}
function onmouseleft(){
    statusicon.src ="/assets/green-checkmark.png"
}
function onlogoutclick(){
    logout()
    location.reload()
}
function logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("password")
}