const fs = require('fs')
const uuid = require('uuid')
const path = require('path')

const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis repellendus quas nihil odit quibusdam, obcaecati recusandae ratione, iste incidunt at, facere itaque quo aperiam? Facere quis consectetur aspernatur? Architecto, pariatur.Modi error tenetur delectus voluptatem eos illum esse blanditiis earum rerum sint veniam ipsum deserunt at non enim temporibus id, rem iure provident magnam, quo alias aliquid dolorum! Reiciendis, distinctio?`
const oldPosts=[
  {title: 'Hi', sections: [
    {
      title: 'First section',
      text: lorem
    },
    {
      title: 'Second section',
      text: lorem
    },
    {
      title: 'Third section',
      text: lorem
    }
  ],color: randomColor(), id: uuid.v4()},
  {title: 'Hi', sections: [
    {
      title: 'First section',
      text: lorem
    },
    {
      title: 'Second section',
      text: lorem
    },
    {
      title: 'Third section',
      text: lorem
    }
  ],color: randomColor(), id: uuid.v4()},
  {title: 'Hi', sections: [
    {
      title: 'First section',
      text: lorem
    },
    {
      title: 'Second section',
      text: lorem
    },
    {
      title: 'Third section',
      text: lorem
    }
  ],color: randomColor(), id: uuid.v4()},
  {title: 'Hi', sections: [
    {
      title: 'First section',
      text: lorem
    },
    {
      title: 'Second section',
      text: lorem
    },
    {
      title: 'Third section',
      text: lorem
    }
  ],color: randomColor(), id: uuid.v4()}
]

function randomColor(){
  let rand = (min = 0, max = 2) => {
    return Math.floor(Math.random() * (max - min) + min)
  },
  r = rand(0,255),
  g = rand(0,255),
  b = rand(0,255)
  return `rgb(${r},${g},${b})`
}
function Post(){
  this.title = 'Hi',
   this.sections = [
    {
      title: 'First section',
      text: lorem
    },
    {
      title: 'Second section',
      text: lorem
    },
    {
      title: 'Third section',
      text: lorem
    }
  ],
  this.color = randomColor(),
  this.id = uuid.v4()
}

const posts = []
for(let i = 0;i < 50;i++){
  posts.push(new Post())
}

fs.writeFileSync(`${path.dirname('.')}/../src/posts.json`,JSON.stringify(posts),'utf8');