import * as d3 from "d3";

export const draw = ({
  canvasName,
  data,
  width = 500,
  height = 200,
  margin = 30
}) => {
  const svgId = `svg-${canvasName}`;

  const canvas = d3
    .select(`.${canvasName}`)
    .append("svg")
    .attr("width", width + 2 * margin)
    .attr("height", height + 2 * margin)
    .attr("id", svgId);

  canvas
    .append("text")
    .attr("x", -(height / 2) - margin)
    .attr("y", width + margin * 2)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .text("Love meter (%)");

  canvas
    .append("text")
    .attr("x", width / 2 + margin)
    .attr("y", margin / 2)
    .attr("text-anchor", "middle")
    .text("Most loved programming languages in 2020");

  const chart = canvas
    .append("g")
    .attr("transform", `translate(${margin}, ${margin})`);

  const yScale = d3
    .scaleLinear()
    .range([height, 0])
    .domain([0, Math.max(...data.map(d => d.value))]);

  chart.append("g").call(d3.axisLeft(yScale));

  const xScale = d3
    .scaleBand()
    .range([0, width])
    .domain(data.map(d => d.label))
    .padding(0.2);

  chart
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

  chart
    .append("g")
    .attr("class", "grid")
    .call(
      d3
        .axisLeft()
        .scale(yScale)
        .tickSize(-width, 0, 0)
        .tickFormat("")
    );

  chart
    .selectAll()
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => xScale(d.label))
    .attr("y", d => yScale(d.value))
    .attr("height", d => height - yScale(d.value))
    .attr("width", xScale.bandwidth());
};
