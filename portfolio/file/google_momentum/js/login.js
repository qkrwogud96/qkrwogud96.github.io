const loginElem = document.querySelector('#log-in-form');
const loginInput = loginElem.querySelector('input');
const loginGreet = document.querySelector('#log_submit > h1');
const USERMANE_KEY = 'username';

const signUp = () => {
    // 회원가입
    const userName = loginInput.value;
    window.localStorage.setItem(USERMANE_KEY, userName);
}
const signIn = (value) =>{
    //로그인
    loginGreet.style.display = 'inline-block';
    loginGreet.innerText = 'Hello ' + value;
    loginElem.style.display = 'none';
}
const loadlog = () => {
        signUp();
        signIn(window.localStorage.getItem(USERMANE_KEY));  
}
const logEvent = (event) => {
    event.preventDefault();
    loadlog();
}
const checkKey = () =>{
    const checkUserName = window.localStorage.getItem(USERMANE_KEY);
    if(checkUserName){
        signIn(checkUserName);
    }
}
window.addEventListener('load', checkKey);
loginElem.addEventListener('submit', logEvent);
