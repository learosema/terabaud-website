import * as d3 from 'https://cdn.skypack.dev/d3';

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const randomCircle = (id) => ({
  id,
  x: -44 + Math.random() * 88,
  y: -44 + Math.random() * 88,
  color: pick([
    'deeppink',
    'white',
    'deepskyblue',
    'rebeccapurple',
    'mediumseagreen',
  ]),
});

const data = Array(33)
  .fill(0)
  .map((_, i) => randomCircle(i));

const svg = d3.select('svg.weird-demo');

const circle = svg.selectAll('circle').data(data, (d) => d.id);

circle
  .enter()
  .append('circle')
  .classed('circle', true)
  .attr('stroke', (d) => d.color)
  .attr('r', 5)
  .attr('cx', (d) => d.x)
  .attr('cy', (d) => d.y);

function update() {
  const insertId = 1000 + Math.random();
  data.splice(0, 1);
  data.push(randomCircle(insertId));
  const t = svg.transition().duration(300);
  const t2 = svg.transition().duration(1000);
  const collection = svg.selectAll('.circle').data(data, (d) => d.id);
  collection
    .join(
      (enter) =>
        enter
          .append('circle')
          .classed('circle', true)
          .attr('stroke', (d) => d.color)
          .style('opacity', 0)
          .attr('r', 0)
          .attr('cx', (d) => d.x)
          .attr('cy', (d) => d.y),
      (update) => update,
      (exit) => {
        exit
          .classed('circle', false)
          .style('opacity', 1)
          .transition(t2)
          .attr('r', 0)
          .style('opacity', 0)
          .remove();
      }
    )
    .transition(t)
    .attr('r', 5)
    .style('opacity', 1);
}

function loop() {
  setTimeout(() => {
    update();
    requestAnimationFrame(loop);
  }, 50);
}

loop();
