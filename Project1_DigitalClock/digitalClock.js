
let hoursE1 = document.getElementById("Hours"); //get 
let minE1= document.getElementById("Min");
let SecE1 = document.getElementById("Sec");
let ampmE1 = document.getElementById("ampm");
let toggalBtnE1 = document.getElementById("toggalBtn");

let is24Hours = false;

function updateClock(){
    let now = new Date();

    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let ampm = "AM"

    if(!is24Hours){
        if(hours >=12){
           ampm= "PM"
        }
        hours = hours % 12 || 12
        ampmE1.style.display = "inline";
    }
    else{
        ampm = " "
        ampmE1.style.display = "none"; 
    }

    hoursE1.textContent = String(hours).padStart(2,"0");
    minE1.textContent = String(min).padStart(2,"0");
    SecE1.textContent = String(sec).padStart(2,"0");
    ampmE1.textContent = ampm;
    
    setTimeout(updateClock,1000)
}

toggalBtnE1.addEventListener("click", ()=>{
    is24Hours = !is24Hours;
    updateClock();

});

updateClock();

//  Light/Dark Mode Toggle
let modeBtn = document.getElementById("modeBtn");
let isLightMode = false;

modeBtn.addEventListener("click", () => {
  isLightMode = !isLightMode;
  document.body.classList.toggle("light-mode", isLightMode);

  // Change button text dynamically
  modeBtn.textContent = isLightMode ? "🌙 Dark Mode" : "🌞 Light Mode";

});
