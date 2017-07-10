var linearScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 1])
    .clamp(true);


console.log(linearScale(-1)); //0
console.log(linearScale(0)); //0
console.log(linearScale(50)); //0.5
console.log(linearScale(100)); //1


console.log(linearScale.invert(0.5)); //50