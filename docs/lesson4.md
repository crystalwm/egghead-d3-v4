##  d3.scaleQuantize()
连续的值映射到分段的值

```javascript
var quantizeScale = d3.scaleQuantize()
    .domain([0, 100])
    .range(["red", "green"]);


console.log(quantizeScale(22)); //red
```