import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  //Link
} from 'react-router-dom'
// import * as uuid from 'uuid'
import './App.css'
const ps = require('./posts.json');
//Components
import Nav from './components/Nav'
import Posts from './components/Posts'
import Post from './components/Post'
import './main.min.css'

/*const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem libero eos perspiciatis est ut ratione neque nulla natus, reiciendis molestias, nobis temporibus earum recusandae asperiores quibusdam! Temporibus asperiores pariatur officiis?
Obcaecati, sed, ad consequatur est vitae optio id ea eum nemo cum reprehenderit aliquam cumque quaerat eos. Temporibus, eveniet! Esse odit enim obcaecati voluptatibus velit blanditiis vel ratione eos iure?
Aliquid minima consequatur, quas odio similique adipisci officiis hic non autem alias cupiditate cum nesciunt soluta dignissimos debitis nihil eaque itaque nisi ratione accusantium vero quaerat consequuntur? Itaque, esse at.
Rerum, consequuntur animi alias cumque similique temporibus soluta optio neque, officia culpa quo. Accusamus culpa itaque ipsum temporibus unde eveniet quo, id hic error quaerat sunt reiciendis earum nobis soluta.`*/

interface post{
  title:string
  text:string
  color:string
  id:string
}
interface MyApp{
  posts: post[]
  id: string
}
interface Pr{

}
export const root = document.location.pathname == "/" ? "" : document.location.pathname

export default class App extends React.PureComponent<Pr,MyApp> {
  constructor(){
    super()
    this.state = {
      posts: ps/*[
        {title: 'Hi', text: lorem,color: this.randomColor(), id: uuid.v4()},
        {title: 'Hid', text: lorem,color: this.randomColor(), id: uuid.v4()},
        {title: 'Lol', text: lorem,color: this.randomColor(), id: uuid.v4()},
        {title: 'Did', text: lorem,color: this.randomColor(), id: uuid.v4()},
        {title: 'Bye', text: lorem,color: this.randomColor(), id: uuid.v4()},
        {title: 'BB', text: lorem,color: this.randomColor(), id: uuid.v4()},
        {title: 'FDIO', text: lorem,color: this.randomColor(), id: uuid.v4()}
      ]*/,
      id: ''
    }// eslint-disable-next-line
  }

  public randomColor():string{
    let rand = (min:number = 0, max:number = 2):number => {
      return Math.floor(Math.random() * (max - min) + min)
    },
    r:number = rand(0,255),
    g:number = rand(0,255),
    b:number = rand(0,255)
    return `rgb(${r},${g},${b})`
  }

  componentWillMount():void{
    /*ps.forEach((el:any) => {
      console.log(el)
    });*/
    /*this.setState({
      ElList: this.state.list.map((it:ListItem,i:number) => (
        <li className="posts__item" key={i}>
          <Link className="post" to={`/posts/${it.id}`}>
            <div className="post-header" style={{'--header-color': it.color}}></div>
            <span className="post-title">{it.title}</span>
          </Link>
        </li>
      ))
    } as object)*/
    
  }

  setId(id:string){
    this.setState({
      id:id
    }as object)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path={`${root}/`} exact render={props => (
            <Posts list={this.state.posts}/>
          )}/>
          <Route path={`${root}/posts/:id`} exact render={props => (
            <Post psts={this.state.posts} id={props}/>
          )}/>
        </div>
      </Router>
    )
  }
}



//
//pst={this.state.posts.filter((it:post) => {
//              // uuid regex: /\/(\d|\w)+?-.*/g
//              // dev regex: /\/(.(\d)).*/g
//              let m:any = window.location.href.match(/\/(\d|\w)+?-.*/g)
//              console.log(`${it.id}||||${m}`)
//              //console.log(this.state.posts)
//              return `/${it.id}` == m
//            })}
//