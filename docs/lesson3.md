## time Scale
如果直接用JavaScript来处理Date是比较复杂的，
如果你希望你的输入或者输出是date类型的数据时候，就需要用到这个


### d3.scaleTime

如果input domain是日期格式，那么输出的就需要是
```javascript
var timeScale = d3.scaleTime()
    .domain([new Date(2016, 0, 1), new Date()])
    .range([0, 100]);


console.log(timeScale(new Date(2016, 0, 15))); //2.505373055604601
console.log(timeScale(new Date(2016, 3, 15))); //18.79029791703451
console.log(timeScale(new Date())); //100.00000000414249
```

#### 为什么console.log(timeScale(new Date())); //100.00000000414249的值有变化

因为new Date()在函数执行的时候会变化。
