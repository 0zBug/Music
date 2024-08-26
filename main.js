// BUGTUNES.SCOT.WTF - Written by scot | <3 ty for making this site bug
var colors = ["#8b99e1", "#8cc8a9", "#7ebae6", "#e0bb99", "#e0909e"];
var colorIndex = 0;

document.querySelectorAll("a").forEach(function(link){
    var color = colors[colorIndex];
    link.style.setProperty('--color', color);
    colorIndex = (colorIndex + 1) % colors.length;
});