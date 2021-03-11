//Helper Functions
 const pickColor = () => {
   return colors[(Math.floor(Math.random() * colors.length))]
 }

 const generateRandomColor = () => {
   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);
   return `rgb(${r}, ${g}, ${b})`;
 }

 const generateRandomColors = (numOptions) => {
   let colors = [];
   for(let i = 0; i < numOptions; i++){
     colors.push(generateRandomColor());
   }
   return colors;
 }

 const changeColors = (color) => {
   // squares.forEach((square) => {
   //   square.style.backgroundColor = color;
   for(let i = 0; i < squares.length; i++){
     if(colors[i]){
       squares[i].style.backgroundColor = color;
     }else{
       squares[i].style.backgroundColor = "grey";
     }
   }
 };

 const reset = () => {
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   resetButton.textContent = "New Colors";
   colorDisplay.textContent = "pickedColor";
   for(let i = 0; i < squares.length; i++){
     if(colors[i]){
       squares[i].style.backgroundColor = colors[i];
     }
     else{
       squares[i].style.backgroundColor = "grey";
     }
   }
   title.style.backgroundColor = "steelblue";
   message.textContent = "";
 }
 //init variables

//state
let numSquares = 6;

//returns a node of all elements with class of square
 const squares = document.querySelectorAll(".square");
 const modeButtons = document.querySelectorAll(".mode");
 
 const title = document.querySelector("h1");

 const colorDisplay = document.getElementById("colorDisplay");
 const message = document.getElementById("message");
 const resetButton = document.getElementById("resetButton");



 let colors = generateRandomColors(numSquares);
 let pickedColor = pickColor();

 function main(){
   // Update colorDisplay
   colorDisplay.textContent = pickedColor;

   //adding eventing listener to reset button
   resetButton.addEventListener("click", reset);

   //modeButtons
   modeButtons.forEach((button) => {
     button.addEventListener("click", function(){
       modeButtons[0].classList.remove("selected");
       modeButtons[1].classList.remove("selected");
       this.classList.add("selected");
       if (this.textContent === "Easy"){
         numSquares = 3;
       }
       else{
         numSquares = 6;
       }
       reset();
     });
   });
   //set up squares
   //dom setting background color
    for(let i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
      //add click listener
      squares[i].addEventListener("click", function() {
        //get Color of clicked squares
        const clickedColor = this.style.backgroundColor;

        //compare to clicked colors
        if(clickedColor === pickedColor){
         // alert("You win");
         resetButton.textContent = "Play Again?";
         title.style.backgroundColor = pickedColor;
         changeColors(pickedColor);
         message.textContent = "Correct :)";
        }else{
          this.style.backgroundColor = "gray";
          message.textContent = "Try again!";
         }
      })
    };
 }


main();


/*
//adding event listener to easy button
easyButton.addEventListener("click" , function() {
  numSquares = 3;
  this.classList.add("selected");
  hardButton.classList.remove("selected");
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  title.style.backgroundColor = "grey";
  for(let i =0 ; i< squares.length; i++){
    if(colors[i]){
    squares[i].style.backgroundColor = colors[i];
  } else{
    squares[i].style.display = "none";
  }
}
});

//adding event listener to hard button
hardButton.addEventListener("click", function() {
  numSquares = 6;
  this.classList.add("selected");
  hardButton.classList.remove("selected");
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  title.style.backgroundColor = "grey";
  for(let i =0 ; i< squares.length; i++){
     squares[i].style.backgroundColor = colors[i];
     squares[i].style.display = "block";
  }
});
*/
