##  d3.scaleOrdinal()
连续的值映射到分段的值

```javascript
var ordianlScale = d3.scaleOrdinal()
    .domain(["good", "greet"])
    .range(["red", "green"]);


console.log(ordianlScale("greet")); //green
```