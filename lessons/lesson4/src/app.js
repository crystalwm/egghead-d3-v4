var quantizeScale = d3.scaleQuantize()
    .domain([0, 100])
    .range(["red", "green"]);


console.log(quantizeScale(22)); //red