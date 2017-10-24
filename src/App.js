"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
// import * as uuid from 'uuid'
require("./App.css");
require("./materialize/css/materialize.min.css");
var ps = require('./posts.json');
//Components
var Nav_1 = require("./components/Nav");
var Posts_1 = require("./components/Posts");
var Post_1 = require("./components/Post");
require("./main.min.css");
/*const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem libero eos perspiciatis est ut ratione neque nulla natus, reiciendis molestias, nobis temporibus earum recusandae asperiores quibusdam! Temporibus asperiores pariatur officiis?
Obcaecati, sed, ad consequatur est vitae optio id ea eum nemo cum reprehenderit aliquam cumque quaerat eos. Temporibus, eveniet! Esse odit enim obcaecati voluptatibus velit blanditiis vel ratione eos iure?
Aliquid minima consequatur, quas odio similique adipisci officiis hic non autem alias cupiditate cum nesciunt soluta dignissimos debitis nihil eaque itaque nisi ratione accusantium vero quaerat consequuntur? Itaque, esse at.
Rerum, consequuntur animi alias cumque similique temporibus soluta optio neque, officia culpa quo. Accusamus culpa itaque ipsum temporibus unde eveniet quo, id hic error quaerat sunt reiciendis earum nobis soluta.`*/
var PureComponent = React.PureComponent;
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this) || this;
        _this.state = {
            posts: ps /*[
              {title: 'Hi', text: lorem,color: this.randomColor(), id: uuid.v4()},
              {title: 'Hid', text: lorem,color: this.randomColor(), id: uuid.v4()},
              {title: 'Lol', text: lorem,color: this.randomColor(), id: uuid.v4()},
              {title: 'Did', text: lorem,color: this.randomColor(), id: uuid.v4()},
              {title: 'Bye', text: lorem,color: this.randomColor(), id: uuid.v4()},
              {title: 'BB', text: lorem,color: this.randomColor(), id: uuid.v4()},
              {title: 'FDIO', text: lorem,color: this.randomColor(), id: uuid.v4()}
            ]*/,
            id: ''
        }; // eslint-disable-next-line
        return _this;
    }
    App.prototype.randomColor = function () {
        var rand = function (min, max) {
            if (min === void 0) { min = 0; }
            if (max === void 0) { max = 2; }
            return Math.floor(Math.random() * (max - min) + min);
        }, r = rand(0, 255), g = rand(0, 255), b = rand(0, 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    };
    App.prototype.componentWillMount = function () {
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
    };
    App.prototype.setId = function (id) {
        this.setState({
            id: id
        });
    };
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", { className: "App" },
                React.createElement(Nav_1["default"], null),
                React.createElement(react_router_dom_1.Route, { path: "/", exact: true, render: function (props) { return (React.createElement(Posts_1["default"], { list: _this.state.posts })); } }),
                React.createElement(react_router_dom_1.Route, { path: "/posts/:id", exact: true, render: function (props) { return (React.createElement(Post_1["default"], { psts: _this.state.posts, id: props })); } }))));
    };
    return App;
}(PureComponent));
exports["default"] = App;
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
