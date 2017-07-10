## 数据映射
在数据可视化中很重要的一点，将`abstract data value`映射到 `visual representation`

## linear scale
d3.scaleLinear是一个连续的线性表
```
var linearScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 1]);

console.log(linearScale(-1)); //-0.01
console.log(linearScale(0)); //0
console.log(linearScale(50)); //0.5
console.log(linearScale(100)); //1
```
### linear scale--clamp
限定output的最大值和最小值

```
var linearScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 1])
    .clamp(true);


console.log(linearScale(-1)); //0
console.log(linearScale(0)); //0
console.log(linearScale(50)); //0.5
console.log(linearScale(100)); //1
```
### linear scale--invert
由input range到output domain
```
var linearScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 1])
    .clamp(true);


console.log(linearScale(-1)); //0
console.log(linearScale(0)); //0
console.log(linearScale(50)); //0.5
console.log(linearScale(100)); //1


console.log(linearScale.invert(0.5)); //50
```