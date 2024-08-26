
var colors = ["#8b99e1", "#8cc8a9", "#7ebae6", "#e0bb99", "#e0909e"];
var pages = document.querySelectorAll('a.page');

var numberOfElementsToColor = Math.floor(pages.length / 2);

var coloredElements = new Set();

while (coloredElements.size < numberOfElementsToColor) {
    var randomIndex = Math.floor(Math.random() * pages.length);
    
    if (!coloredElements.has(randomIndex)) {
        coloredElements.add(randomIndex);
        var page = pages[randomIndex];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        page.style.color = randomColor;
    }
}

document.querySelectorAll("a").forEach(function(link){
    var color = colors[colorIndex];
    link.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
    colorIndex = (colorIndex + 1) % colors.length;
});
