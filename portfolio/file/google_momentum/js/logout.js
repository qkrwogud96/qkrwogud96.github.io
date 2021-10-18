const logOut = document.querySelector('.log-out');

const logOutEvent = () =>{
    window.localStorage.clear();
    window.location.reload();
}
logOut.addEventListener('click', logOutEvent);