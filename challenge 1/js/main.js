/*
*    main.js
*/
d3.json("data/buildings.json").then((data)=> {

	data.forEach((d)=>{

		d.height = +d.height;


	});


console.log(data)
var svg = d3.select("#chart-area").append("svg")
	.attr("width", 600)
	.attr("height", 400);

var rect = svg.selectAll("rect")
	.data(data);

rect.enter()
	.append("rect")
	.attr("x", (d, i)=>{return (i*50);})
	.attr("y", 0)
	.attr("width", 10)
	.attr("height", (d, i)=>{console.log(d.height);return d.height*0.35;})
	.attr("fill","blue");
});