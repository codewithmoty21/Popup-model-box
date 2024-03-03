document.getElementById("open-popup-btn").addEventListener("click",function(){
document.getElementsByClassName("Popup")[0].classList.add("active");  
});

document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("Popup")[0].classList.remove("active");  
    });