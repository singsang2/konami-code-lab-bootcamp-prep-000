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


let index = 0;

function init() {
  document.body.addEventListener("keydown", function(e){
    const k = e.key;
    
    if (k === codes[index]){
      index++;
      if (index === codes.length){
        window.alert("YESSSSSSSS!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
