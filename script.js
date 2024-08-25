// const markMass=100;
// const markHeight=1.69;
// const johnMass=78;
// const johnHeight=1.95;

// const bmiMark=markMass/(markHeight*markHeight);
// const bmiJohn=johnMass/(johnHeight*johnHeight);
// console.log(bmiMark,bmiJohn);

// const markHigherBmi=bmiMark>bmiJohn;
// console.log(markHigherBmi);

//the third coding chalenge

// const dolphinsAverage=(108+96+89)/3;
// console.log(dolphinsAverage);
// const koalasAverage=(88+91+110)/3;
// console.log(koalasAverage);

// if (dolphinsAverage>koalasAverage) {
// console.log("dolphin team is the winner");
// }else{
//     console.log("team koalas is the winner");
// }

//bonus 2
// const dolphinsAverage=(97+112+101)/3;
// console.log(dolphinsAverage);
// const koalasAverage=(109+95+123)/3;
// console.log(koalasAverage);

// if (dolphinsAverage>=100 && dolphinsAverage>koalasAverage) {
//     console.log("team dolphin is the winner");
// }else if (koalasAverage>=100 && koalasAverage> dolphinsAverage){
//     console.log("team koalas is the winner");
// }else if  (dolphinsAverage===koalasAverage){
//     console.log("both  are  winners");
// }else{
//     console.log( "no one is the winner");
// }

// const day="monady";
// if (day==="monday") {
//     console.log("i will go to school");
// }else if(day ==="tuesday"){
//     console.log("i will do my home work");
// }else if(day==="wednesday"||day==="thursday"){
//     console.log(" i will go to sleep");

// }else{
//     console.log("it is a rest time");
// }

//coding challenge #4 conditional (ternary) operator

// const bill=275;
// const tip= bill>=50 && bill>=300? bill*0.15 : bill*0.2;
// console.log(tip);

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip+bill}`)

"use strict";

// coding challenge 5
// 1,calculating average of 3 scores by using arrow function
// const calcAverage=(x,y,z)=>{
//     const ave=(x+y+z)/3
//     return ave;
// }
// console.log(calcAverage(44,23,71));

// other way to calculate average using array
// const averageCalc=(h,i,j)=>(h+i+j)/3
// console.log(averageCalc(44,23,71));

// 2, by using function calculating average values for two teams
// function averageScore(a,b,c){
//       const average=(a+b+c)/3
//       return average;
// }
// console.log(averageScore(44,23,71));
// console.log(averageScore(65,54,49));
//3 checking the winner using a function to deside the winner it must have 2 time or greater value than the other average score

// function checkWinner(dolphinsAverage,koalasAverage){
//     if (dolphinsAverage>=2*koalasAverage) {
//         console.log("team dolphin is the winner");

//     }else if (koalasAverage>=2*dolphinsAverage) {
//         console.log("team koalas is the winner")
//     }else{
//         console.log("no one is the winner")
//     }
// }
//  console.log(checkWinner(46,56));

//coding challenge 6
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to).
//      Use the function type you like the
//       most. Test the function using a bill
//        value of 100

// function calcTip(bill){
//     if (bill>=50 && bill<=300) {
//         const tip=bill*0.15;
//         console.log(tip)
//     }else{
//         const tip=bill*0.2
//         console.log(tip)
//     }

// }

// const calcTip=function (bill) {
//     return bill>=50 && bill<=300 ? bill*0.15:
//     bill*0.2;
// }
// console.log(calcTip(100));
// //question number two
// const bills=[125,555,44]
// const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]
// console.log(bills,tips);

// //coding challenge 7 (work on objects) using my own way

// const mark={
//     firstName:'Mark',
//     lastName:'Miller',
//     masss:78,
//     height:1.69,
//     calcBmi:function(mass,height) {
//         this.bmi=mass/height**2
//         return this.bmi
//     }
// }

// const john={
//     firstName: 'John',
//     lastName: 'Smith',
//     masss: 92,
//     height: 1.95,
//     calcBmi:function(mass,height) {
//         this.bmi=mass/height**2
//         return this.bmi
//     }
// }

// console.log(`${john.firstName}'s BMI(${john.calcBmi(92,1.95)}
//     ) is higher than ${mark.firstName}'s BMI(${mark.calcBmi(78,1.69)})!`)

//another way to calculate the bmi just by calling the function and logging this,bmi

// const mark={
//     firstName:'Mark',
//     lastName:'Miller',
//     masss:78,
//     height:1.69,
//     calcBmi:function() {
//         this.bmi=this.mass / this.height**2;
//         return this.bmi
//     }
// };

// const john={
//     firstName: 'John',
//     lastName: 'Smith',
//     masss: 92,
//     height: 1.95,
//     calcBmi:function(){
//         this.bmi=this.mass / this.height**2;
//         return this.bmi
//     }
// };

// mark.calcBmi();
// john.calcBmi();
// console.log(mark.bmi,john.bmi);

//coding challenge #8

// const calcTip=function (bill) {
//         return bill>=50 && bill<=300 ? bill*0.15:
//         bill*0.2;
// }

// const bills=[22,295,176,440,37,105,10,1100,86,52]

// const tips=[];
// const totals=[];

// for (let i = 0; i <= bills.length; i++) {
//     const tip=calcTip(bills[i])
//     tips.push(tip);
//     totals.push(tip+bills[i]);
//  }

//  console.log(bills,tips,totals);

//the bonus challenge

// const calcAverage=function(arr){
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         sum=sum+arr[i];
//     }
//     return sum/arr.length;
// }
// console.log(calcAverage([2,5,9]))

//section 5
"use strict";

//debugging( coding challenge #9)

//problem
//Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures.
//Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

//  temperature = [17, 21, 23];
// const temconstperatureTwo = [12, 5, -5, 0, 4];
// const printForecast = function (arr) {
//   let str = ""; // to enf orce the code no to go in a new line
//   for (let i = 0; i < arr.length; i++) {
//     str = `${str}...${arr[i]}°C in ${i + 1} days`;
//     return str;
//   }
// };

// console.log(printForecast(temperature));

// project of modal window

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenMdals = document.querySelectorAll(".show-modal");
// console.log(btnsOpenMdals);
//for (let i = 0; i < btnsOpenMdals.length; i++)
// btnsOpenMdals[i].addEventListener("click", function () {});

// btnCloseModal.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

//another way for the above commented code

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// const openModal = function () {
//   console.log("Button clicked");
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// for (let i = 0; i < btnsOpenMdals.length; i++)
//   btnsOpenMdals[i].addEventListener("click", openModal);

// btnCloseModal.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

///handling key board events(to handle key board events we also need event listener method)
// for any kind of keypressing
// document.addEventListener("keydown", function () {
//   console.log(" A key was pressed");
// });

//to know whcih key is pressed by puting an argument for the function
// document.addEventListener("keydown", function (e) {
//   console.log(e.key);
//   if (e.key === "Escape") {
//     if (!modal.classList.contains("hidden")) {
//       closeModal();
//     }
//   }
// });

// the pic game project
//selecting elements
// const player0EL=document.querySelector(".player--0")
// const player1EL=document.querySelector(".player--1")
// const score0El = document.querySelector("#score--0");
// const score1El = document.querySelector("#score--1");
// const current0El=document.getElementById("current--0")
// const current1El=document.getElementById("current--1")
// const diceEl = document.querySelector(".dice");
// const btnNew = document.querySelector(".btn--new");
// const btnRoll = document.querySelector(".btn--roll");
// const btnHold = document.querySelector(".btn--hold");
// //declaring variables with out assining their values so that to acess in all conditions thgrou out the code
// let scores,currentScore,activePlayer,playing; // as we learned in fundamental session we can declare d
// //in different variables using coma(,)

// //initializing
// const init=function() {
//   scores=[0,0];
//   currentScore=0;
//   activePlayer=0;
//   playing=true;
// score0El.textContent = 0;
// score1El.textContent = 0;
// current0El.textContent = 0;
// current1El.textContent = 0;
// diceEl.classList.add("hidden");
// player0EL.classList.remove("player--winner");
// player1EL.classList.remove("player--winner");
// player0EL.classList.add("player--active");
// player1EL.classList.remove("player--active");

// }
// //calling the function
// init();

// const switchPlayer=function() {
//   activePlayer=activePlayer===0 ? 1 : 0;
//   document.getElementById(`current--${activePlayer}`).textContent=0
//   currentScore=0;
//   player0EL.classList.toggle("player--active");
//   player1EL.classList.toggle("player--active");
  
// }

// //implementing roll dice functionality
// btnRoll.addEventListener("click", function () {
//   if (playing) { // we use this if logic to give a state for the game
//   //1, generating arandom dice roll
//   const dice = Math.trunc(Math.random()*6) + 1;
//   console.log(dice);
  
//   //2,display the dice
//   diceEl.classList.remove("hidden");
//   diceEl.src=`/img/dice-${dice}.png`;

//   //check for the rolled 
//   if (dice!==1) {
//     currentScore=currentScore+dice;
//     document.getElementById(`current--${activePlayer}`).textContent=currentScore
  
//   }else{
//       switchPlayer();
//     }
//   }  
// })

// btnHold.addEventListener("click",function () {
  
//   if (playing) {
//     //add current score to active players score
//   scores[activePlayer]+=currentScore;
//   //the meaning of the above code is
//   //scores[1]=scores[1]+currentscore;

//   document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

  //check the players score>=100
//   if (scores[activePlayer]>=20) {
//    // finishing the game
//    playing=false;
//    diceEl.classList.add("hidden");// this make to remove the dice after we know yhe winner of the match
   
//     document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.add("player--winner");
//     document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove("player--active");
    
//   }else{
//     // swich to the next player
//     switchPlayer();
//   }
    
// }
  
// })

//reseting the game  using the new game button
//btnNew.addEventListener("click",init); // in tthis case we were not cll init function java script we call it self as soon as we cliked the new game buttton


//coding challenge #11

const game={
  team1:"Bayermunich",
  team2:"Borussia Dortumnd",
  players:[
    [
    "Neuer",
    "pavard",
    "Martinez",
    "Alaba",
    "Davies",
    "Kimich",
    "Gortezka",
    "coman",
    "muller",
    "grarby",
    "lewsdowstack"

  ],
  [
    "burki",
    "schiiz",
    "ramsey",
    "naymar",
    "pogba",
    "ferguson",
    "matich",
    "keven",
    "alexandro",
    "ronaldo",
    "messi",
    
  ],
],
score:'4:0',
scored:["davinchi","lukas","komoro","lacomoste"],
date:"nov 9th, 2037",
odds:{
  team1:1.33,
  x:3.25,
  team2:6.5,

},
};

// creating one player array for each team
//distructuring players array
///const[players1,players2]=game.players;
//console.log(players1,players2)

//set avariable gk for goalkeeper and create an array for  the field players
//const[gk,...fieldplayers]=players1;
//console.log(gk,fieldplayers);

//creating an array the combine the two teams
//const allPlayers=[...players1,...players2];
//console.log(allPlayers);

//including the substitiutes for the bayer munich

//const players1final=[...Players1,"thiago","cuthinho","perisisc",]
//console.log(players1final);

//retriving the odd values from the game object
//performing nested distructuring
// const{
//   odds:{team1,x:draw,team2},
// }=game;
// console.log(team1,draw,team2);

//reporting the goal that are counted using function

// const printGoals=function (...players) {
//   console.log(players);
//   console.log(`${players.length}goal was scored`);
// }

//printGoals(...game.scored);// in this case we use spread operator in order to retrive each element in the scored array

//determining the winner group //the team with less odd is the winner
//team1<team2 && console.log("team one is more likely to win");


//coding chalenge 12
// #1 looping arrays
// for(const [i,player] of game.scored.entries()){
//   console.log(`goal ${i+1} ,${player}`)
//   }
  //in the above code we have distructuring i for index and player for the name of players
  //we used .entries since we need both the index and name of players
  //we used i +1 to start from 1 since index starts from zero

  //#2 calculating the average of game.odds

// const odds= Object.values(game.odds)
// let average=0;
// for(const odd of odds)
//   average+=odd
//   average/=odds.length
//   console.log(average);

 //quwestion no 3
 
//  for(const[team,odd] of Object.entries(game.odds))
//  {
//   const teamstr=team==="x"? "draw":`victory
// ${game,team}`
//  console.log(`odd of ${teamstr} ${odd}`);
// }

//coding challenge #13

const gameEvents=new Map(
  [
    [17,"⚽goal"],
    [37,"👕substitution"],
    [47,"⚽goal"],
    [61,"👕substitution"],
    [64,"🎁yellow card"],
    [69,"🧧red card"],
    [70,"👕substitution"],
    [72,"👕substitution"],
    [76,"⚽goal"],
    [80,"⚽goal"],
    [92,"🎁yellow card"],

  ]
)

//1,creating the array using the above map with out dupilicate values
// const events=[...new Set(gameEvents.values())];
// console.log(events);

//we use the spread operator(...)and the bracket braces inorder to change  the set to array

//2 removing the yellow card in minute 64

//console.log(gameEvents.delete(64));
//to delete an element from key value pair in map just select the key in the above events

//3 computing amd printing the below string
//an event happent on average every 9 minutes

// console.log(`an event happend on average every 
//   ${90/gameEvents.size}`);

// 3, looping over the map and doing some exerscise on it

// for(const [min,event] of gameEvents){
//   const half=min<=45? "FIRST":"SECOND"; //using the ternary operator to desude whether its first or second half     
//   console.log(`[${half}]:${min} ${event}`);
  
// }

//uppercase
//lowercase
//slowercase





//coding challenge 14
//preparing aprogram that accepts avariable and change into camel case when button is pressed
//first preparing the text area and the button with dom manipulation

// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// //secondly lets select the button and do our tas with in function
//  document.querySelector("button").addEventListener("click",function(){
//    const text=document.querySelector("textarea").value;
//    const rows=text.split("\n");
//    console.log(rows);
//    for (const [i,row] of rows.entries()){
//     const[first,second]=row.toLowerCase()
//     .trim().split("_");
//     const output=`${first}${second.
//       replace(second[0],second[0].toUpperCase())}`;
//     console.log(`${output.padEnd(20)}${'🎁'.repeat(i+1)}`);
//    } 
//  })

 //coding challenge 15

// const poll={
//   question:"what is your favourite progrraming language?",

//  options:["0:javascript","1:phyton","2:rest","3:c++"],
//  answers: new Array(4).fill(0),
 
//  //the above array is like[0,0,0,0]
//  registerNewAnswer:function() {
// //getting the answer
//   const answer=Number(prompt(`${this.question}\n
//      ${this.options.join("\n")}\n(write option number)`))
    
//     console.log(answer);
    
// // register the answer
// //using short circuiting for registering the answer
//  typeof answer==="number"&& 
//  answer < this.answers.length &&
//   this.answers[answer]++;
//   this.displayResults();
//   this.displayResults("string")
//  },
  

// //displaying the result
// displayResults(type="array"){
// // using the default pareameter array
//   if (type==="array"){
//     console.log(this.answers);
//   }else if (type==="string"){
//   //poll results are 13,2,4,1
//   console.log(`poll results are ${this.answers.join(", ")}`);
//   }
// }

// }

//  //connecting with the click events

// document.querySelector(".poll")
// .addEventListener
// ("click", poll.registerNewAnswer.bind(poll))

//coding challenge #16

//understanding closure by using immediately invoked function

(function(){
  const header=document.querySelector("h1");
  header.style.color="red";
  document.querySelector("body")
  .addEventListener("click",function()
  {header.style.color="blue"});

  }());








