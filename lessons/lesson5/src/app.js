var ordianlScale = d3.scaleOrdinal()
    .domain(["good", "greet"])
    .range(["red", "green"]);


console.log(ordianlScale("greet")); //green