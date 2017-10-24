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
require("./Post.min.css");
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post(pst) {
        var _this = _super.call(this, pst) || this;
        _this.state = {
            id: _this.props.id.match.params.id,
            post: _this.props.psts
        };
        return _this;
    }
    Post.prototype.componentWillMount = function () {
        var _this = this;
        this.setState({
            post: this.state.post.filter(function (pst) {
                return pst.id === _this.state.id;
            })[0]
        });
    };
    Post.prototype.componentDidMount = function () {
        window.scroll(0, 0);
        console.log(this.state);
    };
    Post.prototype.render = function () {
        var p = this.state.post, styles = {
            '--article-header-color': p.color.trim()
        }, sec = this.state.post.sections.map(function (s, i) {
            return (React.createElement("section", { className: "article__section", key: i },
                React.createElement("h1", { className: "article__section__header" }, s.title),
                React.createElement("p", { className: "article__section__text" }, s.text)));
        });
        return (React.createElement("article", { className: "article" },
            React.createElement("header", { style: styles, className: "article__header" }, p.title),
            React.createElement("main", { className: "article__content" }, sec)));
    };
    return Post;
}(React.PureComponent));
exports["default"] = Post;
