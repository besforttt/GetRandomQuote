// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// an array of objects containing quotes that will be used
// some of them include 4 properties, others include less
var quotes = [
  {
    quote: "This is the first quote ever",
    source: "Unknown source",
    citation: "Famous first quotes",
    year: "1999",
  },
  {
    quote: "This is the second quote ever",
    source: "Known source",
    citation: "Famous second quotes",
    year: "2000",
    },
  {
    quote: "This is the third quote ever",
    source: "Unknown source",
    },
  {
    quote: "This is the fourth quote ever",
    source: "Known source",
    year: "2002",
    },
  {
    quote: "This is the fifth quote ever",
    source: "Unknown source",
    citation: "Famous fifth quotes",
    },
  {
    quote: "This is the sixth quote ever",
    source: "Known source",
    year: "2004",
    },
  {
    quote: "This is the seventh quote ever",
    source: "Unknown source",
    },
];

// generates a random quote in the form of an object from the array of quotes
function getRandomQuote() {
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
}

// debugging to check if the quote object is being generated
//console.log(getRandomQuote());

// print the html string from the getRandomQuote object
function printQuote(){
  q = getRandomQuote();
  message = '<p class="quote">' + q.quote  + ' </p>';
  message += '<p class="source">' + q.source;
  if (q.hasOwnProperty('citation')) {
    message += '<span class="citation">' + q.citation + '</span>';

  }if (q.hasOwnProperty('year')) {
    message += '<span class="year">' + q.year + '</span></p>';
  } else {
    message += "</p>"
    return message;
  }
  return document.getElementById('quote-box').innerHTML = message;
}
