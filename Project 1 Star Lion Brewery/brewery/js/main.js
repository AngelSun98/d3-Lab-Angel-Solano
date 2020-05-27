d3.json("data/revenues.json").then((data)=> {

	data.forEach((d)=>{
		console.log(d)

	});
var month = data.map((d) => { return d.month; }) ;
var width = 600;
var height = 400;
var margin = {top: 10, right: 10, bottom: 100, left:100};
var x = d3.scaleBand()
	.domain(month)
	.range([0, width])
	.paddingInner(0.3)
	.paddingOuter(0.3);


var y = d3.scaleLinear()
	.domain([0,50000])
	.range([height,0]);
y.nice();
var g = d3.select("body")
	.append("svg")
		.attr("width", width + margin.right + margin.left)
		.attr("height", height + margin.top + margin.bottom)
		.style("background-color","black")

	.append("g")
		.attr("transform", "translate(" + margin.left + ", " + margin.top + ")")
		.style("background-color","black");

var rects = g.selectAll("rect")
	.data(data);
rects.enter()
	.append("rect")
	.attr("y",(d) => { return y(d.revenue); })
	.attr("x", (d) => { return x(d.month); })
	.attr("width", x.bandwidth())
	.attr("height", (d) => { return height - y(d.revenue); })
	.attr("fill","yellow");


var bottomAxis = d3.axisBottom(x);
g.append("g")
	.attr("class", "bottom axis")
	.attr("transform", "translate(0, " + height+ ")")
	.style("fill","white")
	.style("stroke","white")
	.call(bottomAxis);

var leftAxis = d3.axisLeft(y).ticks(5)
.tickFormat((d) => { return "$"+ d/1000 + "k"; });

g.append("g")
	.attr("class", "left axis")
	.style("fill","white")
	.style("stroke","white")
	.call(leftAxis);


g.append("text")
	.attr("class", "x axis-label")
	.attr("x",  width/2)
	.attr("y", height +50)
	.attr("font-size", "20px")
	.attr("text-anchor", "middle")
	.style("fill","white")
	.text("Month");


g.append("text")
	.attr("class", "y axis-label")
	.attr("x", -(height / 2))
	.attr("y", -60)
	.attr("font-size", "20px")
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.style("fill","white")
	.text("Revenues (dlls)");

});