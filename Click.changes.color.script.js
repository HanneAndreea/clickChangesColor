circle.attr(`fill`, pickRandom(color));
function changeColor(){circle.attr(`fill`, pickRandom(color));};
circle.on(`click`, changeColor);