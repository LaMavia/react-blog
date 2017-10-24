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
// import * as uuid from 'uuid'
var react_router_dom_1 = require("react-router-dom");
require("./Posts.min.css");
var Posts = /** @class */ (function (_super) {
    __extends(Posts, _super);
    function Posts(data) {
        var _this = _super.call(this, data) || this;
        console.log(data);
        _this.state = {
            _posts: data.list,
            posts: []
        };
        return _this;
    }
    Posts.prototype.randomColor = function () {
        var rand = function (min, max) {
            if (min === void 0) { min = 0; }
            if (max === void 0) { max = 2; }
            return Math.floor(Math.random() * (max - min) + min);
        }, r = rand(0, 255), g = rand(0, 255), b = rand(0, 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    };
    Posts.prototype.componentWillMount = function () {
        console.log(this.state._posts);
        this.setState({
            posts: this.state._posts.map(function (it, i) { return (React.createElement("li", { className: "posts__item", key: i },
                React.createElement(react_router_dom_1.Link, { className: "post", to: "/posts/" + it.id },
                    React.createElement("div", { className: "post-header", style: { '--header-color': it.color } }),
                    React.createElement("span", { className: "post-title" }, it.title)))); })
        });
        console.log(this.state._posts);
    };
    Posts.prototype.render = function () {
        return (React.createElement("section", { className: "posts" },
            React.createElement("ol", { className: "posts__wrapper" }, this.state.posts)));
    };
    return Posts;
}(React.PureComponent));
exports["default"] = Posts;
