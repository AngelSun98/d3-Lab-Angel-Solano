/*
*    main.js
*/
var data = [25, 20, 15, 10, 5];
var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);

var rect = svg.selectAll("rect")
	.data(data);

rect.enter()
	.append("rect")
	.attr("x", (d, i)=>{return (i*80);})
	.attr("y", 20)
	.attr("width", 40)
	.attr("height", (d, i)=>{return i*50;})
	.attr("fill","red");