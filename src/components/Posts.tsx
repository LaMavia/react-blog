import * as React from 'react'
// import * as uuid from 'uuid'
import {Link} from 'react-router-dom'
import './Posts.min.css'
import {root} from '../App'
interface MyState{
  _posts: object[]
  posts: HTMLElement[]
}
interface MyProps{
  list: object[]
} 
interface ListItem{
  title: string
  color: string
  img: string
  id: string
}

export default class Posts extends React.PureComponent<MyProps,MyState>{
  constructor(data:any){
    super(data)
    console.log(data)
    this.state = {
      _posts: data.list,
      posts: []
    }
    
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
    console.log(this.state._posts)
    this.setState({
      posts: this.state._posts.map((it:ListItem,i:number) => (
        <li className="posts__item" key={i}>
          <Link className="post" to={`${root}/posts/${it.id}`}>
            <div className="post-header" style={{'--header-color': it.color}}></div>
            <span className="post-title">{it.title}</span>
          </Link>
        </li>
      ))
    } as object)
    console.log(this.state._posts)
  }

  render(){
    return(
      <section className="posts">
        <ol className="posts__wrapper">
          {this.state.posts}
        </ol>
      </section>
    )
  }
}