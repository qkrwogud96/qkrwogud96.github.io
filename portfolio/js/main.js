const mainText = document.querySelector('.home-header');

let check;



var typewriter = new Typewriter(mainText,{
    // loop : true,
    delay: 75,
    autoStart : true,
});

typewriter
.pauseFor(2500)
.typeString('HELLO.')
.pauseFor(300)
.deleteChars(10)
.typeString('WELCOME TO MY PORTFOLIO.')
.pauseFor(1000)
.start();

