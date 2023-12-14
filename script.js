window.onload = function refreshDise1() {
   let diceNo1 = Math.floor(Math.random() * 7);
   let diceNo2 = Math.floor(Math.random() * 7);
 
   console.log(diceNo1);
   console.log(diceNo2);
 
   let imageURL;
   let imageURL2;
 
   if (diceNo1 > diceNo2) {
     document.querySelector("h1").innerHTML = "Player 1 Wins!🚩";
   } else if (diceNo1 < diceNo2) {
     document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
   } else if (diceNo1 == diceNo2) {
     document.querySelector("h1").innerHTML = "Draw!";
   };
 
 
   if (diceNo1 == 1) {
     imageURL = "images/dice1.png";
     document.getElementById("img1").src = imageURL;
   } else if (diceNo1 == 2) {
     imageURL = "images/dice2.png";
     document.getElementById("img1").src = imageURL;
   } else if (diceNo1 == 3) {
     imageURL = "images/dice3.png";
     document.getElementById("img1").src = imageURL;
   } else if (diceNo1 == 4) {
     imageURL = "images/dice4.png";
     document.getElementById("img1").src = imageURL;
   } else if (diceNo1 == 5) {
     imageURL = "images/dice5.png";
     document.getElementById("img1").src = imageURL;
   } else if (diceNo1 == 6) {
     imageURL = "images/dice6.png";
     document.getElementById("img1").src = imageURL;
   } else {
     refreshDise1();
   };
 
 
   if (diceNo2 == 1) {
    imageURL2 = "images/dice1.png";
    document.getElementById("img2").src = imageURL2;
  } else if (diceNo2 == 2) {
    imageURL2 = "images/dice2.png";
    document.getElementById("img2").src = imageURL2;
  } else if (diceNo2 == 3) {
    imageURL2 = "images/dice3.png";
    document.getElementById("img2").src = imageURL2;
  } else if (diceNo2 == 4) {
    imageURL2 = "images/dice4.png";
    document.getElementById("img2").src = imageURL2;
  } else if (diceNo2 == 5) {
    imageURL2 = "images/dice5.png";
    document.getElementById("img2").src = imageURL2;
  } else if (diceNo2 == 6) {
    imageURL2 = "images/dice6.png";
    document.getElementById("img2").src = imageURL2;
  } else {
    refreshDise1();
  };
  
 };
 