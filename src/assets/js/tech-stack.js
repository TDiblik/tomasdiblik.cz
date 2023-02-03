// Possible selected color combinations

// Light gray: rgba(211, 211, 211, 0.6)
// Pale blue: rgba(173, 216, 230, 0.6)

// Light olive: rgba(164, 190, 92, 0.6)
// Soft green: rgba(191, 227, 180, 0.6)

// Pale pink: rgba(255, 182, 193, 0.6)
// Light Peach: rgba(255, 229, 180, 0.6)

const root_point_usage = "var(--white)";
const nerly_every_day_usage = "rgba(164, 190, 92, 0.6)";
const once_per_week_usage = "rgba(173, 216, 230, 0.6)";
const once_per_month_usage = "rgba(255, 182, 193, 0.6)";

const technologies = {
  name: "Me :D",
  is_root: true,
  usage: root_point_usage,
  overwrite_fill: "var(--black)",
  overwrite_stroke: "var(--black)",
  title: "Center point of my knowledge ^_^",
  children: [
    {
      name: "C#",
      usage: nerly_every_day_usage,
      children: [
        {
          name: "ASP.NET Core",
          usage: nerly_every_day_usage,
          children: [
            {
              name: "Dapper",
              usage: nerly_every_day_usage,
            },
            {
              name: "Swagger",
              usage: nerly_every_day_usage,
            },
            {
              name: "Entity Framework",
              usage: once_per_week_usage,
            },
          ],
        },
        {
          name: "MAUI Blazor",
          usage: once_per_month_usage,
        },
        {
          name: "Winforms",
          usage: once_per_week_usage,
        },
      ],
    },
    {
      name: "Typescript",
      usage: nerly_every_day_usage,
      children: [
        {
          name: "React",
          usage: nerly_every_day_usage,
          children: [
            {
              name: "@testing-library/react",
              usage: once_per_month_usage,
            },
            {
              name: "react-query",
              usage: nerly_every_day_usage,
            },
          ],
        },
        {
          name: "Svelte",
          usage: once_per_week_usage,
          children: [
            {
              name: "@testing-library/svelte",
              usage: once_per_month_usage,
            },
            {
              name: "@sveltestack/svelte-query",
              usage: once_per_week_usage,
            },
            {
              name: "svelte-spa-router",
              usage: once_per_week_usage,
            },
          ],
        },
      ],
    },
    {
      name: "Rust",
      usage: once_per_month_usage,
      children: [
        {
          name: "clap",
          usage: once_per_month_usage,
        },
        {
          name: "anyhow",
          usage: once_per_month_usage,
        },
        {
          name: "tui-rs",
          usage: once_per_month_usage,
        },
      ],
    },
    {
      name: "HTML & CSS",
      usage: nerly_every_day_usage,
      children: [
        {
          name: "Bootstrap",
          title:
            "I have projects with bootstrap versions ranging from v3 to v5. I prefer v5, but I'm able to work with earlier versions",
          usage: nerly_every_day_usage,
        },
        {
          name: "SASS",
          usage: once_per_month_usage,
        },
      ],
    },
    {
      name: "Dev tools",
      usage: nerly_every_day_usage,
      children: [
        {
          name: "Visual Studio Code",
          usage: nerly_every_day_usage,
        },
        {
          name: "Visual Studio",
          usage: once_per_week_usage,
        },
        {
          name: "git",
          usage: nerly_every_day_usage,
          title:
            "List some hosting platforms that I use: eg. github, azure devops",
        },
        {
          name: "Docker",
          usage: nerly_every_day_usage,
        },
        {
          name: "Figma",
          usage: once_per_week_usage,
        },
        {
          name: "DataGrip",
          usage: once_per_week_usage,
        },
        {
          name: "Postman",
          usage: once_per_month_usage,
        },
        {
          name: "Fusion 360",
          usage: once_per_month_usage,
          title:
            "I consider Fusion 360 as part of my tech stack, used for designing parts for my embedded development projects.",
        },
      ],
    },
  ],
};

const character_width = 8; // 12.5
function calculate_node_width_recursivelly(root_node) {
  if (root_node.children !== undefined) {
    for (let i = 0; i < root_node.children.length; i++) {
      calculate_node_width_recursivelly(root_node.children[i]);
    }
  }
  root_node.node_width = root_node.name.length * character_width + 30; // +20 padding
}

let already_generated_ids = [];
function generate_node_nanoids_recursivelly(root_node) {
  if (root_node.children !== undefined) {
    for (let i = 0; i < root_node.children.length; i++) {
      generate_node_nanoids_recursivelly(root_node.children[i]);
    }
  }

  // make sure that there are no uuid collisions
  // This could be optimized by changing the number of generated charaters and then matched agains different possibilities of collisions occuring,
  // but after profiling, this is not even close to beeing a problem
  let new_uuid;
  do {
    new_uuid = nanoid(32);
  } while (already_generated_ids.includes(new_uuid));
  already_generated_ids.push(new_uuid);

  root_node.nanoid = new_uuid;
}

const graph_element_selector = "#graph";
const moveable_group_classname = "moveable-group";
const clickable_group_classname = "clickable-group";
const hideable_classname = "hideable-group-";

const node_height = 30;
const node_radius = 10;
const force_distance = node_radius * node_radius * node_height * -1;

let graph_container;
function update_graph_size() {
  const main_element = document.querySelector("main");

  let max_width = main_element.offsetWidth;
  let min_width = -max_width / 2;
  let max_height = main_element.offsetHeight;
  let min_height = -max_height / 2;

  graph_container
    .attr("width", max_width)
    .attr("height", max_height - max_height * 0.09) // * 0.09 because of top-bottom padding
    .attr("viewBox", [min_width, min_height, max_width, max_height]);

  const previous_instances = document.querySelectorAll(".graph-helper-group");
  for (let i = 0; i < previous_instances.length; i++) {
    const previous_instance = previous_instances[i];
    previous_instance.parentNode.removeChild(previous_instance);
  }

  graph_container
    .append("text")
    .attr("x", max_width + min_width - 120)
    .attr("y", max_height + min_height - 20)
    .attr("fill", "var(--white)")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("class", "graph-helper-group")
    .text("? - click to expand technologies");

  generate_helper_row(
    nerly_every_day_usage,
    "using nearly every day",
    190,
    max_width,
    min_width,
    min_height,
    0
  );

  generate_helper_row(
    once_per_week_usage,
    "using once per week",
    190,
    max_width,
    min_width,
    min_height,
    1
  );

  generate_helper_row(
    once_per_month_usage,
    "using once per month",
    190,
    max_width,
    min_width,
    min_height,
    2
  );
}

function generate_helper_row(
  color,
  text,
  minus_text,
  max_width,
  min_width,
  min_height,
  i
) {
  graph_container
    .append("rect")
    .attr("x", max_width + min_width - minus_text)
    .attr("y", min_height + 5 + 10 * i + 25 * i)
    .attr("width", 25)
    .attr("height", 25)
    .attr("rx", node_radius)
    .attr("ry", node_radius)
    .attr("class", "graph-helper-group")
    .attr("fill", color);

  graph_container
    .append("text")
    .attr("x", max_width + min_width - 75)
    .attr("y", min_height + 10 * i + 20 + 25 * i)
    .attr("fill", "var(--white)")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("class", "graph-helper-group")
    .text(text);
}

function construct_drag_events(simulation) {
  return d3
    .drag()
    .on("start", (e, s) => {
      if (!e.active) simulation.alphaTarget(0.3).restart();
      s.fx = s.x;
      s.fy = s.y;
    })
    .on("drag", (e, s) => {
      s.fx = e.x;
      s.fy = e.y;
      e.sourceEvent.target.style.cursor = "grabbing";
    })
    .on("end", (e, s) => {
      if (!e.active) simulation.alphaTarget(0);
      s.fx = null;
      s.fy = null;
    });
}

function hide_children_recursively(parent, is_first_itteration) {
  if (parent.children !== undefined) {
    for (let i = 0; i < parent.children.length; i++) {
      hide_children_recursively(parent.children[i], false);
    }
  }

  const items_to_show_or_hide = document.getElementsByClassName(
    `${hideable_classname}${parent.nanoid}`
  );

  const should_hide = is_first_itteration
    ? parent.has_hidden_children !== true
    : true;
  for (let i = 0; i < items_to_show_or_hide.length; i++) {
    const item = items_to_show_or_hide[i];
    item.style.display = should_hide ? "none" : "block";
  }
  parent.has_hidden_children = should_hide;
}

window.addEventListener("load", () => {
  // Prepare data
  calculate_node_width_recursivelly(technologies);
  generate_node_nanoids_recursivelly(technologies);

  // Render graph
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
        .distance(100)
        .strength(0.5)
    )
    .force("charge", d3.forceManyBody().strength(force_distance))
    .force("x", d3.forceX())
    .force("y", d3.forceY());

  graph_container = d3.select(graph_element_selector);
  update_graph_size();

  const link = graph_container
    .append("g")
    .attr("stroke", "var(--gray)")
    .attr("class", moveable_group_classname)
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("class", (s) => `${hideable_classname}${s.source.data.nanoid}`)
    .attr("stroke-opacity", (s) => {
      switch (s.source.data.usage) {
        case root_point_usage:
          return 0.75;
        case nerly_every_day_usage:
          return 0.6;
        case once_per_week_usage:
          return 0.55;
        case once_per_month_usage:
          return 0.5;
      }
    });

  const node_group = graph_container
    .append("g")
    .attr("fill", "var(--white)")
    .attr("class", moveable_group_classname)
    .selectAll("g")
    .data(nodes)
    .join("g")
    .attr("id", (s) => (s.data.is_root ? "graph-root-node" : ""))
    .attr(
      "class",
      (s) =>
        `${clickable_group_classname} ${
          s.parent ? `${hideable_classname}${s.parent.data.nanoid}` : ""
        }`
    )
    .on("click", (e, s) => {
      if (s.data.children === undefined) {
        return;
      }
      hide_children_recursively(s.data, true);
    })
    .on("mouseover", (e, s) => {
      e.target.style.cursor = "grab";
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
    .attr("fill", (s) => s.data.usage)
    .attr("stroke", (s) => s.data.overwrite_stroke ?? "var(--white)")
    .attr("stroke-width", 1)
    .attr("rx", node_radius)
    .attr("ry", node_radius)
    .call(construct_drag_events(simulation));

  const node_text = node_group
    .append("text")
    .attr("x", "0")
    .attr("y", "0")
    .attr("stroke", "#000")
    .attr("stroke-width", "0")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("fill", (s) => s.data.overwrite_fill ?? "")
    .text((s) => s.data.name)
    .call(construct_drag_events(simulation));

  node_background_shape
    .append("title")
    .text((s) => s.data.title ?? s.data.name);
  node_text.append("title").text((s) => s.data.title ?? s.data.name);

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
    .scaleExtent([0.75, 3.5])
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
  graph_container.call(zoom);

  // Default zooom
  graph_container
    .transition()
    .call(zoom.scaleBy, is_mobile_or_tablet() ? 1 : 1.25);

  // Default children hidden
  for (let i = 0; i < root.data.children.length; i++) {
    const child = root.data.children[i];
    hide_children_recursively(child);
  }
});

window.addEventListener("resize", () => update_graph_size(), true);
