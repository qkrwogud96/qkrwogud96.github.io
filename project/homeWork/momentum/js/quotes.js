const quotes = [
  {
    quotes: `"Genius is one percent inspiration and ninety-nine percent perspiration."`,
    author: `-Thomas Edison-`,
  },
  {
    quotes: `"Hell has no fury like a woman scorned."`,
    author: `-William Congreve-`,
  },
  {
    quotes: `"If at first you don’t succeed, try, try again."`,
    author: `-W. E. Hickson-`,
  },
  {
   quotes: `"Keep your friends close, but your enemies closer."`,
    author: `-Michael Corleone-`,
  },
  {
    quotes: `"Knowledge is power."`,
    author: `-Sir Francis Bacon-`,
  },
  {
    quotes: `"Life is like a box of chocolates. You never know what you’re gonna get."`,
    author: `-Forrest Gump-`,
  },
  {
    quotes: `"No one can make you feel inferior without your consent."`,
    author: `-Eleanor Roosevelt-`,
  },
  {
    quotes: `"Parting is such sweet sorrow."`,
    author: `-William Shakespeare-`,
  },
  {
    quotes: `"The only thing we have to fear is fear itself."`,
    author: `-Franklin D. Roosevelt-`,
  },
  {
    quotes: `"To be or not to be, that is the question."`,
    author: `-William Shakespeare-`,
  },
];
const num = Math.floor(Math.random(10) * 10);
const today = quotes[num];

const quoteElem = document.querySelector("#quote p");
const authorElem = document.querySelector("#quote span");
quoteElem.innerText = today.quotes;
authorElem.innerText = today.author;
