// get the ref of the container that you want to manipulate dynamically.
let professionDivRef = document.querySelector(".profession");

// create an array of profession.
let professionList = ['Software Engineer', 'Artist', 'Teacher', 'Dancer'];

// let create index so that we can increase or decrease to change the profession.
let professionIndex = 0;
let partIndex = 1;

// creating fun to call it with setTimeout to change the position and reset the Index to create a loop.
function callProfession(){
  professionDivRef.innerText = professionList[professionIndex].slice(0,partIndex);
  partIndex++;
  if(partIndex > professionList[professionIndex].length){
    partIndex = 1;
    professionIndex++;
  }

  if(professionIndex == professionList.length){
    professionIndex = 0;
  }

  setTimeout(callProfession,100)
}

callProfession()

