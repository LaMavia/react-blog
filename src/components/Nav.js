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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
/*
* @description Remember to put this component into a <Router> tag
*
* */
require("./Nav.min.css");
require("../materialize/css/materialize.min.css");
var Nav = /** @class */ (function (_super) {
    __extends(Nav, _super);
    function Nav() {
        var _this = _super.call(this) || this;
        _this.state = {
            _routes: [
                { name: 'home', path: '/', exact: true },
                { name: 'about', path: '/about', exact: true },
                { name: 'dev', path: '/dev', exact: true }
            ],
            routes: []
        };
        return _this;
    }
    Nav.prototype.componentWillMount = function () {
        this.setState({
            routes: this.state._routes.map(function (r, i) { return (React.createElement("li", { className: "nav__list__item", key: i + 1 },
                React.createElement(react_router_dom_1.Link, __assign({ className: "nav__list__item-link white-text" }, (function () { return r.exact ? 'exact' : ''; })(), { to: r.path }), r.name))); })
        });
    };
    Nav.prototype.render = function () {
        return (React.createElement("nav", { className: "nav grey darken-4" },
            React.createElement("div", { className: "nav-wrapper container" },
                React.createElement("h1", { className: "nav__logo" }),
                React.createElement("ul", { className: "nav__list" }, this.state.routes))));
    };
    return Nav;
}(React.PureComponent));
exports["default"] = Nav;
