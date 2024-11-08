// on left click, with either a js prompt or alert window, show a quote from a famous person. randmoized quote

function quoteGenerator() {
  const quotes = [
    "Jesus - Love the Lord your God with all your heart and with all your soul and with all your mind.",
    "Albert Einstein - Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",
    "Steve Jobs - The only way to do great work is to love what you do.",
    "Nelson Mandela - It always seems impossible until it's done.",
    "Henry Ford - Whether you think you can, or you think you can't - you're right.",
    "Mother Teresa - Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    "Aristotle - We are what we repeatedly do. Excellence, then, is not an act but a habit.",
    "Leonardo da Vinci - Simplicity is the ultimate sophistication.",
    "Martin Luther King Jr. - The time is always right to do what is right.",
    "Thomas Edison - I have not failed. I've just found 10,000 ways that won't work.",
  ];

  const randomQuooteSelection = Math.floor(Math.random() * quotes.length);
  const stringValue = quotes[randomQuooteSelection];
  const returnquote = document.getElementById("messageBox");
  returnquote.innerHTML = stringValue;
  //   alert(stringValue);
}

const button = document.getElementById("quoteBtn");
button.addEventListener("click", quoteGenerator);
