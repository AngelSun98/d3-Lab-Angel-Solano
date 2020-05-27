/*
*    main.js
*/
d3.json("data/ages.json").then((data)=> {

	data.forEach((d)=>{

		d.age = +d.age;
		

	});


console.log(data)
var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);

var circles = svg.selectAll("circle")
	.data(data);

circles.enter()
	.append("circle")
	.attr("cx", (d, i)=>{console.log(d.age);return (i*80)+40;})
	.attr("cy", 200)
	.attr("r", (d, i)=>{return d.age*3;})
	.attr("fill","blue");
});