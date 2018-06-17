const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {

document.body.addEventListener("keydown", onKeyDownHandler);
//const konami = [  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
let index = 0;
function onKeyDownHandler(e) {
  const key = e.key;
  if (key === codes[index]) {
    index++;
    if (index === codes.length) {
      alert("Nailed it!");
      index = 0;
    }
  } else {
    index = 0;
  }
}
}

//
// document.body.addEventListener("keydown", keyDownTextField, false);
//
// function keyDownTextField(e) {
// var keyCode = e.keyCode;
//   if(keyCode==13) {
//   alert("You hit the enter key.");
//   } else {
//   alert("Oh no you didn't.");
//   }
// }


/*

  // Keys for A, B, and C keys.
const konami = ['38', '38', '40', '40', '37', '39', '37', '39', '66', '65'];

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = e.key;

  if (key === alphabet[index]) {
    index++;

    if (index === alphabet.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
*/


}
