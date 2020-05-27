/*
*    main.js
*/
d3.json("data/buildings.json").then((data)=> {

	data.forEach((d)=>{

		d.height = +d.height;

	});



var svg = d3.select("#chart-area").append("svg")
	.attr("width", 500)
	.attr("height", 500);

var rect = svg.selectAll("rect")
	.data(data);

rect.enter()
	.append("rect")
	.attr("x", (d, i)=>{return (i*50);})
	.attr("y", 0)
	.attr("width", 10)
	.attr("height", (d, i)=>{return d.height*0.35;})
	.attr("fill","blue");

var names = data.map((d) => { return d.name; }) ;

var x = d3.scaleBand()
	.domain(names)
	.range([0, 400])
	.paddingInner(0.3)
	.paddingOuter(0.3);

	
var y = d3.scaleLinear()
	.domain([0,828])
	.range([0,400]);



});