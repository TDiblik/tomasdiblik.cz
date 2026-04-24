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
      title: "C#'s my favourite programming language and I use it for most of projects at my job.",
      children: [
        {
          name: "ASP.NET Core (API/MVC)",
          title: "Whenever I need to write an API, I pick up ASP.NET Core 99% of the time.",
          usage: nerly_every_day_usage,
          children: [
            {
              name: "Dapper",
              title: "I like to write my own SQL queries, so whenever I have the chance, I use Dapper instead of EF.",
              usage: nerly_every_day_usage,
            },
            {
              name: "Swagger",
              title:
                "ASP.NET Core + Swagger is a match made in heaven. I don't have to do any kind of extra job, but still receive an easy interface for testing endpoints.",
              usage: nerly_every_day_usage,
            },
            {
              name: "Entity Framework",
              title:
                "Sometimes projects already use EF. It would be dumb to all of a sudden start using Dapper, so I use EF sometimes.",
              usage: once_per_week_usage,
            },
          ],
        },
        {
          name: "Winforms",
          title:
            "Whenever development speed matters, and UI's not important, I pick up Winforms for desktop applications.",
          usage: once_per_week_usage,
        },
        {
          name: "ASP.NET 4.8 (legacy support)",
          title:
            "At my job, there are some pieces of software that still run on ASP.NET 4.8. I have to keep these pieces of software up-to-date and bug-free.",
          usage: once_per_month_usage,
        },
      ],
    },
    {
      name: "Typescript",
      usage: nerly_every_day_usage,
      title: "Typescript's my SECOND favourite programming language. I usually use it exclusively on frontend.",
      children: [
        {
          name: "React",
          usage: nerly_every_day_usage,
          title: "I use React on day-to-day basis at work.",
          children: [
            {
              name: "react-query",
              usage: nerly_every_day_usage,
              title: "Easy way of fetching data, maintaining data's state and passing it INTO component hierarchy.",
            },
            {
              name: "expo",
              usage: once_per_month_usage,
              title: "I used to use expo for most of my mobile projects, but svelte native is just more comfortable.",
            },
          ],
        },
      ],
    },
    {
      name: "Rust",
      usage: once_per_month_usage,
      title: "I usually use Rust for developing [TUI's / Performance heavy] projects.",
      children: [
        {
          name: "anyhow",
          usage: once_per_month_usage,
          title: "Life saver for simple error handling!",
        },
        {
          name: "tui-rs / ratatui",
          usage: once_per_month_usage,
          title:
            "Awesome library for UI's in terminal (TUI). Ratatui is an actively maintained fork of tui-rs, which I'm currently using for new projects.",
        },
        {
          name: "egui",
          usage: once_per_month_usage,
          title:
            "Awesome library for UI whenever you need something fast and robust without heavy design requirements",
        },
      ],
    },
    {
      name: "Golang",
      usage: once_per_week_usage,
      title: "I use Golang for personal web servers.",
      children: [
        {
          name: "Fiber",
          title: "lightweight, performant and easy to use",
          usage: once_per_week_usage,
        }
      ]
    },
    {
      name: "HTML & CSS",
      usage: nerly_every_day_usage,
      title: "Nowdays people seem to forget that you don't really need a full-blown JS framework for simple stuff.",
      children: [
        {
          name: "SASS",
          usage: once_per_month_usage,
          title:
            "Whenever available I try to utilize SCSS, however if it's not available by default, or takes more than a couple of commands to set up I don't really bother installing it.",
        },
      ],
    },
    {
      name: "SQL & NoSQL",
      usage: nerly_every_day_usage,
      title:
        "I really enjoy writing SQL queries. I believe that when you design your DB schema correctly, a lot of development is made a whole lot easier.",
      children: [
        {
          name: "MSSQL",
          usage: nerly_every_day_usage,
          title: "At my job we mainly use MSSQL, that's why I use it every day, but personally, I prefer PostgreSQL.",
        },
        {
          name: "PostgreSQL",
          usage: once_per_week_usage,
          title: "For hobby projects that require SQL server, I usually use Postgres.",
        },
        {
          name: "SQLite",
          usage: once_per_month_usage,
          title: "Sometimes you don't really need a whole db server.",
        },
        {
          name: "Redis",
          usage: once_per_month_usage,
          title: "When in-memory caching is not enough, or project deployment is larger than one server.",
        },
      ],
    },
    {
      name: "Dev tools",
      usage: nerly_every_day_usage,
      title: "My trusty toolbox :D",
      children: [
        {
          name: "Zed",
          usage: nerly_every_day_usage,
          title: "I use Zed editor with neovim bindings. Extremely fast and tailored to my workflow.",
        },
        {
          name: "git",
          usage: nerly_every_day_usage,
          title: "I have mastered git.",
        },
        {
          name: "Docker",
          usage: nerly_every_day_usage,
          title: "I use docker for containerizing applications and maintaining clean environments.",
        },
        {
          name: "Figma",
          usage: once_per_week_usage,
          title: "I use Figma to map out and review designs before jumping into the code.",
        },
        {
          name: "DataGrip",
          usage: once_per_week_usage,
          title: "My SQL IDE of choice.",
        },
        {
          name: "FreeCAD",
          usage: once_per_month_usage,
          title:
            "I consider FreeCAD as part of my tech stack, because I use it for designing parts for my embedded development projects.",
        },
      ],
    },
  ],
};

const graph_element_selector = "#graph";
const moveable_group_classname = "moveable-group";
const clickable_group_classname = "clickable-group";
const hideable_classname = "hideable-group-";

const node_height = 30;
const node_radius = 10;
const force_distance = node_radius * node_radius * node_height * -1;

const character_width = 8; // 12.5

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function calculate_node_width_recursivelly(root_node) {
  if (root_node.children !== undefined) {
    for (let i = 0; i < root_node.children.length; i++) {
      calculate_node_width_recursivelly(root_node.children[i]);
    }
  }
  root_node.node_width = root_node.name.length * character_width + 30;
}

const already_generated_ids = new Set();
function generate_node_nanoids_recursivelly(root_node) {
  if (root_node.children !== undefined) {
    for (let i = 0; i < root_node.children.length; i++) {
      generate_node_nanoids_recursivelly(root_node.children[i]);
    }
  }

  let new_uuid;
  do {
    new_uuid = nanoid(32);
  } while (already_generated_ids.has(new_uuid));

  already_generated_ids.add(new_uuid);
  root_node.nanoid = new_uuid;
}

let graph_container;
let graph_root;
function expand_button_mouse_event_constructor(element) {
  element
    .on("click", (e, s) => {
      show_children_recursively(graph_root.data);
    })
    .on("mouseover", (e, s) => {
      e.target.style.cursor = "pointer";
    })
    .on("mouseout", (e, s) => {
      e.target.style.cursor = "default";
    });
}

function generate_helper_row(color, text, minus_text, max_width, min_width, min_height, i) {
  const gap_between = 10 * i + 25 * i;
  graph_container
    .append("rect")
    .attr("x", max_width + min_width - minus_text)
    .attr("y", min_height + 15 + gap_between)
    .attr("width", 25)
    .attr("height", 25)
    .attr("rx", node_radius)
    .attr("ry", node_radius)
    .attr("class", "graph-helper-group")
    .attr("fill", color);

  graph_container
    .append("text")
    .attr("x", max_width + min_width - 75)
    .attr("y", min_height + 27.5 + gap_between)
    .attr("fill", "var(--white)")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("class", "graph-helper-group")
    .text(text);
}

function update_graph_size() {
  const main_element = document.querySelector("main");
  if (!main_element) return;

  let max_width = main_element.offsetWidth;
  let min_width = -max_width / 2;
  let max_height = main_element.offsetHeight;
  let min_height = -max_height / 2;

  graph_container
    .attr("width", max_width)
    .attr("height", max_height - max_height * 0.1)
    .attr("viewBox", [min_width, min_height, max_width, max_height]);

  const previous_instances = document.querySelectorAll(".graph-helper-group");
  for (let i = 0; i < previous_instances.length; i++) {
    const previous_instance = previous_instances[i];
    previous_instance.parentNode.removeChild(previous_instance);
  }

  generate_helper_row(nerly_every_day_usage, "using nearly every day", 190, max_width, min_width, min_height, 0);
  generate_helper_row(once_per_week_usage, "using once per week", 190, max_width, min_width, min_height, 1);
  generate_helper_row(once_per_month_usage, "using once per month", 190, max_width, min_width, min_height, 2);

  const expand_rect = graph_container
    .append("rect")
    .attr("x", max_width + min_width - 99)
    .attr("y", max_height + min_height - 72.5)
    .attr("width", 100)
    .attr("height", 35)
    .attr("rx", node_radius)
    .attr("ry", node_radius)
    .attr("class", "graph-helper-group")
    .attr("fill", "var(--secondary-color-muted)");
  expand_button_mouse_event_constructor(expand_rect);

  const expand_text = graph_container
    .append("text")
    .attr("x", max_width + min_width - 50)
    .attr("y", max_height + min_height - 55)
    .attr("fill", "var(--white)")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("class", "graph-helper-group")
    .text("Expand all");
  expand_button_mouse_event_constructor(expand_text);

  graph_container
    .append("text")
    .attr("x", max_width + min_width - 130)
    .attr("y", max_height + min_height - 20)
    .attr("fill", "var(--white)")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("class", "graph-helper-group")
    .text("? - click technology (node) to expand it");
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

  const items_to_show_or_hide = document.getElementsByClassName(`${hideable_classname}${parent.nanoid}`);
  const should_hide = is_first_itteration ? parent.has_hidden_children !== true : true;

  for (let i = 0; i < items_to_show_or_hide.length; i++) {
    items_to_show_or_hide[i].style.display = should_hide ? "none" : "block";
  }
  parent.has_hidden_children = should_hide;
}

function show_children_recursively(parent) {
  if (parent.children !== undefined) {
    for (let i = 0; i < parent.children.length; i++) {
      show_children_recursively(parent.children[i]);
    }
  }

  const items_to_show_or_hide = document.getElementsByClassName(`${hideable_classname}${parent.nanoid}`);
  for (let i = 0; i < items_to_show_or_hide.length; i++) {
    items_to_show_or_hide[i].style.display = "block";
  }
  parent.has_hidden_children = false;
}

window.addEventListener("load", () => {
  // Prepare data
  calculate_node_width_recursivelly(technologies);
  generate_node_nanoids_recursivelly(technologies);

  // Render graph
  graph_root = d3.hierarchy(technologies);
  const links = graph_root.links();
  const nodes = graph_root.descendants();

  const simulation = d3
    .forceSimulation(nodes)
    .alphaDecay(0.04)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance(50)
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
        default:
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
      (s) => `${clickable_group_classname} ${s.parent ? `${hideable_classname}${s.parent.data.nanoid}` : ""}`
    )
    .on("click", (e, s) => {
      if (s.data.children === undefined) return;
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

  node_background_shape.append("title").text((s) => s.data.title ?? s.data.name);
  node_text.append("title").text((s) => s.data.title ?? s.data.name);

  simulation.on("tick", () => {
    link
      .attr("x1", (s) => s.source.x)
      .attr("y1", (s) => s.source.y)
      .attr("x2", (s) => s.target.x)
      .attr("y2", (s) => s.target.y);

    node_text.attr("x", (s) => s.x).attr("y", (s) => s.y);
    node_background_shape.attr("x", (s) => s.x - s.data.node_width / 2).attr("y", (s) => s.y - node_height / 2);
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
      d3.selectAll(`.${moveable_group_classname}`).attr("transform", e.transform);
    });
  graph_container.call(zoom);
  graph_container.transition().call(zoom.scaleBy, typeof is_mobile_or_tablet === "function" && is_mobile_or_tablet() ? 1 : 1.15);
});

window.addEventListener("resize", debounce(() => update_graph_size(), 150), true);
