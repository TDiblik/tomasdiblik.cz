const root_point_usage = 0;
const nerly_every_day_usage = 1;
const once_per_week_usage = 2;
const once_per_month_usage = 3;

const technologies = [
  {
    id: 0,
    name: "Me :D",
    links_to: null,
    usage: root_point_usage,
  },
  {
    id: 1,
    name: "C#",
    links_to: 0,
    usage: nerly_every_day_usage,
  },
  {
    id: 2,
    name: "TypeScript",
    links_to: 0,
    usage: nerly_every_day_usage,
  },
  {
    id: 3,
    name: "Python",
    links_to: 0,
    usage: once_per_month_usage,
  },
  {
    id: 4,
    name: "Rust",
    links_to: 0,
    usage: once_per_month_usage,
  },

  {
    id: 5,
    name: "Dapper",
    links_to: 1,
    usage: nerly_every_day_usage,
  },
  {
    id: 6,
    name: "Entity Framework",
    links_to: 1,
    usage: once_per_week_usage,
  },
];

window.addEventListener("load", () => {
  const text_width = 50;
  const text_height = 12;

  let svg = d3.select("#graph"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

  let x_scale = d3
    .scaleLinear()
    .domain([0, 6])
    .range([20, 500 - text_width]);
  let y_scale = d3
    .scaleBand()
    .domain([
      "Me :D",
      "C#",
      "TypeScript",
      "Python",
      "Rust",
      "Dapper",
      "Entity Framework",
    ])
    .range([50, height])
    .round(true);

  console.log(y_scale("Me :D"));

  svg
    .selectAll("rect")
    .data(technologies)
    .enter()
    .append("rect")
    .attr("x", text_width)
    .attr("y", (s) => y_scale(s.name))
    .attr("width", (s) => x_scale(s.id))
    .attr("height", 10)
    .attr("fill", "red");

  svg
    .selectAll("text")
    .data(technologies)
    .enter()
    .append("text")
    .attr("x", 0)
    .attr("y", (s) => y_scale(s.name) + text_height)
    .text((s) => s.name);
});
