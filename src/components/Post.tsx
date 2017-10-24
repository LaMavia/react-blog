import * as React from 'react'
import './Post.min.css'
// interface IPost{
//   title:string
//   text:string
//   color:string
//   id:string
// }
interface section{
  title: string
  text: string
}
interface post{
  title: string
  sections: section[]
  color: string
  id: string
} 

interface PostPr{
  psts: any
  id: any
}
interface PostState{
  post: any
  id: string
}

export default class Post extends React.PureComponent<PostPr,PostState>{
  constructor(pst:any){
    super(pst)
    this.state = {
      id: this.props.id.match.params.id,
      post: this.props.psts
    }
  }

  componentWillMount():void{
    this.setState({
      post: this.state.post.filter((pst:post)=>{
        return pst.id === this.state.id
      })[0] as post
    }as object)
  }

  componentDidMount():void{
    window.scroll(0,0)
    console.log(this.state)
  }
  
  render(){
    const p:post = this.state.post,
    styles={
      '--article-header-color': p.color.trim()
    },
    sec = this.state.post.sections.map((s:section,i:number)=>{
      return(
        <section className="article__section" key={i}>
          <h1 className="article__section__header">{s.title}</h1>
          <p className="article__section__text">{s.text}</p>
        </section>
      )
    })
    return(
      <article className="article">
        <header style={styles} className="article__header">{p.title}</header>
        <main className="article__content">
          {sec}
        </main>
      </article>
    )
  }
}
