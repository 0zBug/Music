
var colors = ["#8b99e1", "#8cc8a9", "#7ebae6", "#e0bb99", "#e0909e"];

document.querySelectorAll("a").forEach(function(link){
    var color = colors[colorIndex];
    link.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
    colorIndex = (colorIndex + 1) % colors.length;
});
