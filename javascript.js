function mOver(obj) {
    obj.innerHTML = "Thank You"
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}

document.getElementById("button1").addEventListener("click", function () {
    
    document.getElementById("box").style.height = "250px";
    
});

document.getElementById("button2").addEventListener("click", function () {
    
    document.getElementById("box").style.background = "blue";
    
});

document.getElementById("button3").addEventListener("click", function () {
    
    document.getElementById("box").style.background = "purple";
    
});

document.getElementById("button4").addEventListener("click", function () {
    
    document.getElementById("box").style.opacity = "0.5";
    
});

document.getElementById("button5").addEventListener("click", function () {
    
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.background = "rgb(0, 255, 136)";
    document.getElementById("box").style.opacity = "100";
    
});

document.getElementById("button8").addEventListener("click", function () {
    
    document.getElementById("circle").style.background = "blue";
    
});

document.getElementById("button9").addEventListener("click", function () {
    
    document.getElementById("circle").style.background = "purple";
    
});

document.getElementById("button10").addEventListener("click", function () {
    
    document.getElementById("circle").style.opacity = "0.5";
    
});

document.getElementById("button11").addEventListener("click", function () {
    
    document.getElementById("circle").style.background = "orange";
    document.getElementById("circle").style.opacity = "100";
    
});
document.getElementById("button6").addEventListener("click", function () {
    
    document.getElementById('time').innerHTML = Date()
});

document.getElementById("lightBulbOnButton").addEventListener("click", function () {
    
    document.getElementById('lightbulb').src = 'https://www.w3schools.com/js/pic_bulbon.gif'
    
    
});

document.getElementById("lightBulbOffButton").addEventListener("click", function () {
    
    document.getElementById('lightbulb').src = 'https://www.w3schools.com/js/pic_bulboff.gif'
    
});

