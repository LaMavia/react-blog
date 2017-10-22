const fs = require('fs')
const uuid = require('uuid')
const path = require('path')

const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis repellendus quas nihil odit quibusdam, obcaecati recusandae ratione, iste incidunt at, facere itaque quo aperiam? Facere quis consectetur aspernatur? Architecto, pariatur.Modi error tenetur delectus voluptatem eos illum esse blanditiis earum rerum sint veniam ipsum deserunt at non enim temporibus id, rem iure provident magnam, quo alias aliquid dolorum! Reiciendis, distinctio?`

function randomColor(){
  let rand = (min = 0, max = 2) => {
    return Math.floor(Math.random() * (max - min) + min)
  },
  r = rand(0,255),
  g = rand(0,255),
  b = rand(0,255)
  return `rgb(${r},${g},${b})`
}

const posts = [
  {title: 'Hi', text: lorem,color: randomColor(), id: uuid.v4()},
  {title: 'Hid', text: lorem,color: randomColor(), id: uuid.v4()},
  {title: 'Lol', text: lorem,color: randomColor(), id: uuid.v4()},
  {title: 'Did', text: lorem,color: randomColor(), id: uuid.v4()},
  {title: 'Bye', text: lorem,color: randomColor(), id: uuid.v4()},
  {title: 'BB', text: lorem,color: randomColor(), id: uuid.v4()},
  {title: 'FDIO', text: lorem,color: randomColor(), id: uuid.v4()}
]

fs.writeFileSync(`${path.dirname('.')}/../src/posts.json`,JSON.stringify(posts),'utf8');