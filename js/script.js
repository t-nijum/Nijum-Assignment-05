// function heart click count//
let heartCount = 0;
function heartClickCount(){
    heartCount ++
    document.getElementById("displayHeartCount").innerText = heartCount;
}

// function copy click count//
let copyCount = 0;
function copyClickCount(){
    copyCount ++
    document.getElementById("displayCopyCount").innerText = copyCount;
}


//function copy number and paste somewhere
function copyServiceNumber(event){
    const text =  event.target.getAttribute("service-number");
    navigator.clipboard.writeText(text);
    alert (`Service Number: ${text}`);
}

// Call history add
const callHistory = document.getElementById("callHistory")
const clearHistory = document.getElementById("clearHistory")

function getHistory(event){
    if (coins < 20) {
    return; 
    }
    const name = event.target.getAttribute("service-name");
    const number = event.target.getAttribute("service-number");
    const time = new Date().toLocaleTimeString();
    const div = document.createElement("div");
    div.className = "flex justify-between items-center bg-[#fafafa] rounded-2xl w-[352px] h-[83px] p-2 mt-5";
    div.innerHTML = `
        <div>
          <p class="font-[600] text-[18px]">${name}</p>
          <p class="font-[400] text-[18px] text-[#5c5c5c]">${number}</p>
        </div>
         <div>
         <p class=" font-[400] text-[18px] text-[#111111] text-lg">${time}</>
        </div>
        `;
    callHistory.appendChild(div);
}

clearHistory.addEventListener("click", function(){callHistory.innerHTML ="";});

document.querySelectorAll(".callBtn").forEach(function(setCallHistoryButton){
    setCallHistoryButton.addEventListener("click", getHistory);});

//call service and coin calculation
let coins =100;
const callCost = 20;
const coinDisplay = document.getElementById("coinDisplay")

function calling(event){
    if (coins < callCost){
        alert("You do not have enough coin! You need 20 coins for every call.")
        return;   
    }
    const serviceName = event.target.getAttribute("service-name");
    const serviceNumber = event.target.getAttribute("service-number");
    if(coins >=20){
        coins -= 20;
        coinDisplay.innerText = coins;
        alert (`Calling to ${serviceName}: ${serviceNumber}`);
    }
    else{
        alert("You don't have sufficient coin to make a call")
    }

}

document.querySelectorAll(".callBtn").forEach(function(callButton){
  callButton.addEventListener("click", function(event) {
    calling(event);
  });
})

document.querySelectorAll(".heartClickBtn").forEach(function(heartButton){
  heartButton.addEventListener("click", function(event) {
    heartClickCount(event);
  });
})


// count copy click, copy service number and paste somewhere feature
document.querySelectorAll(".copyClickBtn").forEach(function(copyButton){
  copyButton.addEventListener("click", function(event) {
    copyClickCount();
    copyServiceNumber(event);
  });
})