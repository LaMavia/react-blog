import * as React from 'react'
import { Link } from 'react-router-dom'
import {root} from '../App'
/*
* @description Remember to put this component into a <Router> tag 
* 
* */
import './Nav.min.css'
import '../materialize/css/materialize.min.css'

interface VRoute{
  name: string
  path: string
  exact: boolean
}
interface MyProps{
}
interface MyState{
  _routes: VRoute[],
  routes: HTMLElement[]
}

export default class Nav extends React.PureComponent<MyProps, MyState>{
  constructor(){
    super()
    this.state = {
      _routes: [
        {name: 'home', path: '/', exact: true}, 
        {name: 'about', path: '/about', exact: true},
        {name: 'dev', path: '/dev', exact: true}
      ] as VRoute[],
      routes: [] 
    }
    
  }

  componentWillMount(): void{
    this.setState({
      routes: this.state._routes.map((r,i) => (
       <li className="nav__list__item" key={i+1}>
        <Link className="nav__list__item-link white-text" {...(function(){return r.exact ? 'exact' : ''})()} to={`${root + r.path}`} >{r.name}</Link>
       </li> 
      ))
    } as object)
  }

  render(){
    return (
      <nav className="nav grey darken-4">
        <div className="nav-wrapper container">
          <h1 className="nav__logo"></h1>
          <ul className="nav__list">
            {this.state.routes}
          </ul>
        </div>
      </nav>
    )
  }
}