// console.log("Script Connected");

// Heart Click and Count
let heartCount = 0;
document.getElementById("heartClick").addEventListener("click", function(e){
    e.preventDefault();
    console.log("Heart icon click");
    const getHeartCount = document.getElementById("heartCount");
    heartCount ++;
    getHeartCount.textContent = heartCount ;  
})

//Count Call Button Click
document.getElementById("callClick").addEventListener("click", function(e){
    e.preventDefault();
    console.log("Call btn clicked");
    alert("Calling National Emergency - 999")
})

//Count Copy Button click
let copyCount = 0;
document.getElementById("copyClick").addEventListener("click", function(e){
    e.preventDefault();
    console.log("Copy btn clicked");
    const getCopyCount = document.getElementById("copyCount");
    copyCount ++;
    getCopyCount.textContent = copyCount ;  
})

// Copy service number
document.getElementById("copyClick").addEventListener("click", function(e) {
  e.preventDefault();
  const text = document.getElementById("serviceNumber").textContent;
  navigator.clipboard.writeText(text);
  alert("Copied service number:  "+ text);
});
