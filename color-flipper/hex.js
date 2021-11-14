const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const sampleColor = document.querySelector(".color");
const btn = document.getElementById("btn");
//#6 values #1234CD

btn.addEventListener("click",function () {
    // console.log("hello!")
    let hexColor ="#";
    
    for( var i =0; i<6;i++){
       hexColor +=hex[getRandomNumber()];
    }

  sampleColor.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;     
    
});
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
    
}
