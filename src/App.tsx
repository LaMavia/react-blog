import * as React from 'react'
import {
  BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'
import * as uuid from 'uuid'
import './App.css'

import Nav from './components/Nav'
import './main.min.css'

import './materialize/css/materialize.min.css'
//const logo = require('./logo.svg');
const PureComponent = React.PureComponent
const dev = {
  img: 'http://images.all-free-download.com/images/graphiclarge/harry_potter_icon_6825007.jpg'
}
interface MyApp{
  list: any[]
  ElList: HTMLElement[]
  _routes: object[]
  routes: HTMLElement[]
}

class App extends PureComponent<{},MyApp> {
  constructor(){
    super()
    this.state = {
      list: [
        {title: 'Hi', color: this.randomColor(), img: dev.img, id: uuid.v4()},
        {title: 'Hi', color: this.randomColor(), img: dev.img, id: uuid.v4()},
        {title: 'Hi', color: this.randomColor(), img: dev.img, id: uuid.v4()},
        {title: 'Hi', color: this.randomColor(), img: dev.img, id: uuid.v4()},
        {title: 'Hi', color: this.randomColor(), img: dev.img, id: uuid.v4()},
        {title: 'Hi', color: this.randomColor(), img: dev.img, id: uuid.v4()},
        {title: 'Hi', color: this.randomColor(), img: dev.img, id: uuid.v4()}
      ],
      ElList: [],
      _routes: [
        {}
      ],
      routes: []

    }// eslint-disable-next-line
  }

  private randomColor():string{
    let rand = (min:number = 0, max:number = 2):number => {
      return Math.floor(Math.random() * (max - min) + min)
    }
    let r:number = rand(50,255),
        g:number = rand(50,255),
        b:number = rand(50,255)
    return `rgb(${r},${g},${b})`
  }

  componentWillMount():void{
    this.setState({
      ElList: this.state.list.map((it,i:number) => (
        <li className="posts__item" key={i}>
          <Link className="post" to={`/posts/${it.id}`}>
            <div className="post-header" style={{'--header-color': it.color}}></div>
            <span className="post-title">{it.title}</span>
          </Link>
        </li>
      ))
    } as object)
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
            <div className="parallax">
            </div>
          <section className="posts">
            <ol className="posts__wrapper">
              {this.state.ElList}
            </ol>
          </section>
        </div>
      </Router>
    )
  }
}

export default App;
