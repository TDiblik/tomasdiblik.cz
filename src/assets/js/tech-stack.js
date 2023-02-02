const root_point_usage = 0;
const nerly_every_day_usage = 1;
const once_per_week_usage = 2;
const once_per_month_usage = 3;

const technologies = {
  name: "Me",
  usage: root_point_usage,
  node_width: 50,
  children_hidden: false,
  children: [
    {
      name: "C#",
      usage: nerly_every_day_usage,
      node_width: 50,
      children_hidden: true,
      children: [
        {
          name: "Dapper",
          usage: nerly_every_day_usage,
          node_width: 75,
        },
        {
          name: "Entity Framework",
          usage: once_per_week_usage,
          node_width: 140,
        },
      ],
    },
    {
      name: "Typescript",
      usage: nerly_every_day_usage,
      node_width: 90,
      children_hidden: true,
    },
    {
      name: "Python",
      usage: once_per_month_usage,
      node_width: 75,
      children_hidden: true,
    },
    {
      name: "Rust",
      usage: once_per_month_usage,
      node_width: 50,
      children_hidden: true,
    },
  ],
};

const graph_element_selector = "#graph";
const moveable_group_classname = "moveable-group";
const clickable_group_classname = "clickable-group";

const node_height = 30;
const node_radius = 10;
const force_distance = node_radius * node_radius * 20 * -1;

let max_width;
let min_width;
let max_height;
let min_height;

function construct_drag_events(simulation) {
  return d3
    .drag()
    .on("start", (event, s) => {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      s.fx = s.x;
      s.fy = s.y;
    })
    .on("drag", (event, s) => {
      s.fx = event.x;
      s.fy = event.y;
    })
    .on("end", (event, s) => {
      if (!event.active) simulation.alphaTarget(0);
      s.fx = null;
      s.fy = null;
    });
}

window.addEventListener("load", () => {
  const root = d3.hierarchy(technologies);
  const links = root.links();
  const nodes = root.descendants();

  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance(50)
        .strength(1)
    )
    .force("charge", d3.forceManyBody().strength(force_distance))
    .force("x", d3.forceX())
    .force("y", d3.forceY());

  const svg = d3.select("#graph");

  max_width = +svg.attr("width");
  min_width = -max_width / 2;
  max_height = +svg.attr("height");
  min_height = -max_height / 2;

  svg.attr("viewBox", [min_width, min_height, max_width, max_height]);

  const link = svg
    .append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
    .attr("class", moveable_group_classname)
    .selectAll("line")
    .data(links)
    .join("line");

  const node_group = svg
    .append("g")
    .attr("fill", "#fff")
    .attr("stroke", "#000")
    .attr("stroke-width", 1.5)
    .attr("class", moveable_group_classname)
    .selectAll("g")
    .data(nodes)
    .join("g");

  node_group.attr("class", clickable_group_classname);
  node_group
    .on("click", (e, s) => {
      console.log(e);
      console.log(s);
    })
    .on("mouseover", (e, s) => {
      if (s.data.children !== undefined) {
        e.target.style.cursor = "pointer";
      }
    })
    .on("mouseout", (e, s) => {
      e.target.style.cursor = "default";
    });

  const node_background_shape = node_group
    .append("rect")
    .attr("width", (s) => s.data.node_width)
    .attr("height", node_height)
    .attr("fill", "transparent")
    .attr("stroke", "#fff")
    .attr("rx", node_radius)
    .attr("ry", node_radius)
    .call(construct_drag_events(simulation));
  node_background_shape.append("title").text((s) => s.data.name);

  const node_text = node_group
    .append("text")
    .attr("x", "0")
    .attr("y", "0")
    .attr("stroke", "#000")
    .attr("stroke-width", "0")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .text((s) => s.data.name)
    .call(construct_drag_events(simulation));

  simulation.on("tick", () => {
    link
      .attr("x1", (s) => s.source.x)
      .attr("y1", (s) => s.source.y)
      .attr("x2", (s) => s.target.x)
      .attr("y2", (s) => s.target.y);

    node_text.attr("x", (s) => s.x).attr("y", (s) => s.y);
    node_background_shape
      .attr("x", (s) => s.x - s.data.node_width / 2)
      .attr("y", (s) => s.y - node_height / 2);
  });

  const zoom = d3
    .zoom()
    .scaleExtent([0.25, 1.5])
    .on("start", () => {
      document.querySelector(graph_element_selector).style.cursor = "move";
    })
    .on("end", () => {
      document.querySelector(graph_element_selector).style.cursor = "default";
    })
    .on("zoom", (e) => {
      d3.selectAll(`.${moveable_group_classname}`).attr(
        "transform",
        e.transform
      );
    });
  svg.call(zoom);

  // Default zooom
  svg.transition().call(zoom.scaleBy, 0.75);
});
