const container = document.getElementById('js-container');
const highlight = document.getElementById('js-highlight');
var containerHeight;

window.onscroll = function() {

    containerHeight = container.offsetHeight - window.innerHeight;
    var containerPos = container.getBoundingClientRect();
    var diff = containerHeight + containerPos.top;
    var progressPercentage = Math.floor(100 - pro)





}