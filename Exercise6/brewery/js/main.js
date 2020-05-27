


var width = 600;
var height = 400;
var margin = {top: 10, right: 10, bottom: 100, left:100};
var flag = true;
var g = d3.select("#chart-area")
	.append("svg")
		.attr("width", width + margin.right + margin.left)
		.attr("height", height + margin.top + margin.bottom)
		.style("background-color","black")

	.append("g")
		.attr("transform", "translate(" + margin.left + ", " + margin.top + ")")
		.style("background-color","black");





g.append("text")
	.attr("class", "x axis-label")
	.attr("x",  width/2)
	.attr("y", height +50)
	.attr("font-size", "20px")
	.attr("text-anchor", "middle")
	.style("fill","white")
	.text("Month");
var yLabel = g.append("text")
	.attr("class", "y axis-label")
	.attr("x", -(height / 2))
	.attr("y", -60)
	.attr("font-size", "20px")
	.attr("text-anchor", "middle")
	.attr("transform", "rotate(-90)")
	.style("fill","white")
	.text("Revenues (dlls)");



var x = d3.scaleBand()
		.range([0, width])
		.padding(0.2);

var y = d3.scaleLinear()
		.range([height, 0]);

var xAxisGroup = g.append("g").attr("class", "x axis")
.attr("transform", "translate(0, " + height + ")");

var yAxisGroup = g.append("g").attr("class", "y-axis");
var bottomAxis = d3.axisBottom(x);
g.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(0, " + height+ ")")
	.style("fill","white")
	.style("stroke","white")
	.call(bottomAxis);

d3.json("data/revenues.json").then((data)=> {

	data.forEach((d)=>{
		d.revenue = +d.revenue;
		d.profit= +d.profit;

	});




d3.interval( ( ) => {

		update(data);
		flag = !flag;
	}, 1000);
}).catch((error)=> {

	console.log(error);
});
function update(data) {
var value = flag ? "revenue" : "profit";
x.domain(data.map((d)=>{ return d.month; }));
y.domain([0, d3.max(data, (d) => { return d[value]; })]);



var leftAxis = d3.axisLeft(y).ticks(5)
.tickFormat((d) => { return "$"+ d/1000 + "k"; });

g.append("g")
	.attr("class", "left axis")
	.style("fill","white")
	.style("stroke","white")
	.call(leftAxis);

xAxisGroup.call(bottomAxis);
yAxisGroup.call(leftAxis);


var rects = g.selectAll("rect").data(data);
rects.exit().remove();
rects.attr("x", (d) => { return x(d.month); })
	.attr("y", (d) => { return y(d[value]); })
	.attr("width", x.bandwidth)
	.attr("height",(d) => { return height - y(d[value]);});


rects.enter()
	.append("rect")
	.attr("y",(d) => { return y(d[value]); })
	.attr("x", (d) => { return x(d.month); })
	.attr("width", x.bandwidth())
	.attr("height", (d) => { return height - y(d[value]); })
	.attr("fill","yellow");



var label = flag ? "Revenue" : "Profit";
yLabel.text(label);


}