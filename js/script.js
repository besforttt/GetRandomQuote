// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// event listener to respond to "Show another quote" button clicks based on the already existing one
// when user clicks anywhere on the button, the "changeBacgroundColor" function is called
document.getElementById('loadQuote').addEventListener("click", changeBacgroundColor, false);

//array of colors to randomly use as background color when the button is clicked.
// they are given in a form of array of objects to make them more pleasant to look at (hence the hex color code) and easier to understand (hence the color name)
var color = [
{color:'red', code: '#d32f2f'},
{color:'blue', code: '#1565c0'},
{color:'green', code: '#43a047'},
//{color:'yellow', code: '#ffea00'}, - removed because it makes the text unreadable
{color:'orange', code: '#ef6c00'},
{color:'purple', code: '#8e24aa'},
{color:'gray', code: '#616161'},
];

// an array of objects containing quotes that will be used
// some of them include 4 properties, others include less
var quotes = [
  {
    quote: "There is always some madness in love. But there is also always some reason in madness",
    source: "Friedrich Nietzsche",
    category: "Love"
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly",
    source: "John F. Kennedy",
    //category: "Inspirational" - removed to test if it works without it
  },
  {
    quote: "Forgive your enemies, but never forget their names",
    source: "John F. Kennedy",
    category: "Wisdom"
  },
  {
    quote: "There is no love without forgiveness, and there is no forgiveness without love",
    source: "Bryant H. McGill",
    category: "Love"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    source: "Lao Tzu",
    citation: "Old chinesse proverbs", // here to demonstrate that the
    year: -530, // here to demonstrate that the
    category: "Love"
  },
  {
    quote: "Nothing is softer or more flexible than water, yet nothing can resist it",
    source: "Lao Tzu",
    category: "Wisdom"
  },
  {
    quote: "Nature does not hurry, yet everything is accomplished",
    source: "Lao Tzu",
    category: "Inspirational"
  },
  {
    quote: "When I let go of what I am, I become what I might be",
    source: "Lao Tzu",
    category: "Wisdom"
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on",
    source: "Franklin D. Roosevelt",
    category: "Inspirational",
    year: 1940
  },
];

// generates a random quote in the form of an object from the array of quotes

function getRandomQuote() {
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
}

// debugging to check if the quote object is working
//console.log(getRandomQuote());


// print the html string from the getRandomQuote object and modify the index.html
function printQuote(){
  q = getRandomQuote();
  message = '<p class="quote">' + q.quote  + ' </p>';
  message += '<p class="source">' + q.source;
  if (q.citation) {
    message += '<span class="citation">' + q.citation + '</span>';

  }if (q.year) {
    message += '<span class="year">' + q.year + '</span></p>';
  }if (q.category) {
    message += '<span class="category">' + q.category + '</span></p>';
  }else {
    message += "</p>"
  }
  return document.getElementById('quote-box').innerHTML = message;
}

//generates a random color from the array and modifies the background color of the main div
//and the 'loadQuote' button background

function changeBacgroundColor(){
  col = color[Math.floor(Math.random() * color.length)]
  return document.body.style.backgroundColor = col.code,
  document.getElementById("loadQuote").style.background = col.code;
}

//change the quote and the color automatically after 10 seconds
var myTimer = setInterval(printQuote, 10000);
var myTimer = setInterval(changeBacgroundColor, 10000);

//debugging the main output functions' values via console
//console.log(printQuote());
//console.log(changeBacgroundColor());
