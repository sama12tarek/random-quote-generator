

var Button=document.getElementById("randBtn");


var text = {
  first: {
    paragraph:
      "Resentment is like drinking poison and waiting for your enemies to die.",
    span: "--Nelson Mandela",
  },
  second: {
    paragraph:
      "It's not what happens to you, but how you react to it that matters.",
    span: "--Epictetus",
  },
  third: {
    paragraph: "You miss 100% of the shots you don't take.",
    span: "--Wayne Gretzy",
  },
};

var keys = Object.keys(text);


var randomIndex = Math.floor(Math.random() * keys.length);
var randomKey = keys[randomIndex];

function quateRandom() {
  var keys = Object.keys(text);
  var randomIndex = Math.floor(Math.random() * keys.length);
  var randomKey = keys[randomIndex];

  document.getElementById("rand").innerHTML = `
    <p>${text[randomKey].paragraph}</p>
    <span>${text[randomKey].span}</span>
  `;
}



