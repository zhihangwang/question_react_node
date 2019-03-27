(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

(function () {
	var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/_react-hot-loader@4.8.0@react-hot-loader/index.js")).enterModule;
	enterModule && enterModule(module);
})();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.8.5@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/_react-dom@16.8.5@react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/_react-hot-loader@4.8.0@react-hot-loader/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.3.1@react-router-dom/es/index.js");

var _IssueList = __webpack_require__(/*! ./IssueList.jsx */ "./src/IssueList.jsx");

var _IssueList2 = _interopRequireDefault(_IssueList);

var _IssueEdit = __webpack_require__(/*! ./IssueEdit.jsx */ "./src/IssueEdit.jsx");

var _IssueEdit2 = _interopRequireDefault(_IssueEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var node = document.getElementById('example');
var NoMatch = function NoMatch() {
	return _react2.default.createElement(
		'p',
		null,
		'Page Not Found.'
	);
};

var RoutedApp = function RoutedApp() {
	return _react2.default.createElement(
		_reactRouterDom.HashRouter,
		null,
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_reactRouterDom.Redirect, { from: '/', to: 'issues' }),
			_react2.default.createElement(_reactRouterDom.Route, { path: '/issues', component: _IssueList2.default }),
			_react2.default.createElement(_reactRouterDom.Route, { path: '/issues/:id', component: _IssueEdit2.default })
		)
	);
};

_reactDom2.default.render(_react2.default.createElement(RoutedApp, null), node);

var _default = (0, _reactHotLoader.hot)(module)(_IssueList2.default);

exports.default = _default;
;

(function () {
	var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/_react-hot-loader@4.8.0@react-hot-loader/index.js")).default;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(node, 'node', 'D:/jason/study/question_react_node/src/App.jsx');
	reactHotLoader.register(NoMatch, 'NoMatch', 'D:/jason/study/question_react_node/src/App.jsx');
	reactHotLoader.register(RoutedApp, 'RoutedApp', 'D:/jason/study/question_react_node/src/App.jsx');
	reactHotLoader.register(_default, 'default', 'D:/jason/study/question_react_node/src/App.jsx');
})();

;

(function () {
	var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/_react-hot-loader@4.8.0@react-hot-loader/index.js")).leaveModule;
	leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.29.6@webpack/buildin/module.js */ "./node_modules/_webpack@4.29.6@webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/IssueAdd.jsx":
/*!**************************!*\
  !*** ./src/IssueAdd.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
	var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/_react-hot-loader@4.8.0@react-hot-loader/index.js")).enterModule;
	enterModule && enterModule(module);
})();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.8.5@react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueAdd = function (_React$Component) {
	_inherits(IssueAdd, _React$Component);

	function IssueAdd() {
		_classCallCheck(this, IssueAdd);

		var _this = _possibleConstructorReturn(this, (IssueAdd.__proto__ || Object.getPrototypeOf(IssueAdd)).call(this));

		_this.handleSubmit = _this.handleSubmit.bind(_this);
		return _this;
	}

	_createClass(IssueAdd, [{
		key: 'handleSubmit',
		value: function handleSubmit(e) {
			e.preventDefault();
			var form = document.forms.issueAdd;
			this.props.createIssue({
				owner: form.owner.value,
				title: form.title.value,
				status: 'New',
				created: new Date()
			});
			form.owner.value = "";
			form.title.value = "";
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'form',
					{ name: 'issueAdd', onSubmit: this.handleSubmit },
					_react2.default.createElement('input', { type: 'text', name: 'owner', placeholder: 'owner' }),
					_react2.default.createElement('input', { type: 'text', name: 'title', placeholder: 'title' }),
					_react2.default.createElement(
						'button',
						{ type: 'submit' },
						'Add'
					)
				)
			);
		}
	}]);

	return IssueAdd;
}(_react2.default.Component);

var _default = IssueAdd;
exports.default = _default;
;

(function () {
	var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/_react-hot-loader@4.8.0@react-hot-loader/index.js")).default;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(IssueAdd, 'IssueAdd', 'D:/jason/study/question_react_node/src/IssueAdd.jsx');
	reactHotLoader.register(_default, 'default', 'D:/jason/study/question_react_node/src/IssueAdd.jsx');
})();

;

(function () {
	var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/_react-hot-loader@4.8.0@react-hot-loader/index.js")).leaveModule;
	leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.29.6@webpack/buildin/module.js */ "./node_modules/_webpack@4.29.6@webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/IssueEdit.jsx":
/*!***************************!*\
  !*** ./src/IssueEdit.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/_react-hot-loader@4.8.0@react-hot-loader/index.js")).enterModule;
    enterModule && enterModule(module);
})();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.8.5@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.3.1@react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueEdit = function (_React$Component) {
    _inherits(IssueEdit, _React$Component);

    function IssueEdit() {
        _classCallCheck(this, IssueEdit);

        return _possibleConstructorReturn(this, (IssueEdit.__proto__ || Object.getPrototypeOf(IssueEdit)).apply(this, arguments));
    }

    _createClass(IssueEdit, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'this is edit page.',
                    this.props.match.params.id
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/issues' },
                    'Back to issues list>'
                )
            );
        }
    }]);

    return IssueEdit;
}(_react2.default.Component);

var _default = IssueEdit;
exports.default = _default;
;

(function () {
    var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/_react-hot-loader@4.8.0@react-hot-loader/index.js")).default;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(IssueEdit, 'IssueEdit', 'D:/jason/study/question_react_node/src/IssueEdit.jsx');
    reactHotLoader.register(_default, 'default', 'D:/jason/study/question_react_node/src/IssueEdit.jsx');
})();

;

(function () {
    var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/_react-hot-loader@4.8.0@react-hot-loader/index.js")).leaveModule;
    leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.29.6@webpack/buildin/module.js */ "./node_modules/_webpack@4.29.6@webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/IssueFilter.jsx":
/*!*****************************!*\
  !*** ./src/IssueFilter.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
	var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/_react-hot-loader@4.8.0@react-hot-loader/index.js")).enterModule;
	enterModule && enterModule(module);
})();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.8.5@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.3.1@react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueFilter = function (_React$Component) {
	_inherits(IssueFilter, _React$Component);

	function IssueFilter() {
		_classCallCheck(this, IssueFilter);

		return _possibleConstructorReturn(this, (IssueFilter.__proto__ || Object.getPrototypeOf(IssueFilter)).apply(this, arguments));
	}

	_createClass(IssueFilter, [{
		key: 'render',
		value: function render() {
			var Separator = function Separator() {
				return _react2.default.createElement(
					'span',
					null,
					' | '
				);
			};
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: '/Issues' },
					'All Issues'
				),
				_react2.default.createElement(Separator, null),
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: { pathname: '/issues', search: '?status=Open' } },
					'Open Issues'
				),
				_react2.default.createElement(Separator, null),
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: { pathname: '/issues', search: '?status=New' } },
					'New Issues'
				)
			);
		}
	}]);

	return IssueFilter;
}(_react2.default.Component);

var _default = IssueFilter;
exports.default = _default;
;

(function () {
	var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/_react-hot-loader@4.8.0@react-hot-loader/index.js")).default;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(IssueFilter, 'IssueFilter', 'D:/jason/study/question_react_node/src/IssueFilter.jsx');
	reactHotLoader.register(_default, 'default', 'D:/jason/study/question_react_node/src/IssueFilter.jsx');
})();

;

(function () {
	var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/_react-hot-loader@4.8.0@react-hot-loader/index.js")).leaveModule;
	leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.29.6@webpack/buildin/module.js */ "./node_modules/_webpack@4.29.6@webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
    var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/_react-hot-loader@4.8.0@react-hot-loader/index.js")).enterModule;
    enterModule && enterModule(module);
})();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.8.5@react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! whatwg-fetch */ "./node_modules/_whatwg-fetch@3.0.0@whatwg-fetch/fetch.js");

var _IssueFilter = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");

var _IssueFilter2 = _interopRequireDefault(_IssueFilter);

var _IssueAdd = __webpack_require__(/*! ./IssueAdd.jsx */ "./src/IssueAdd.jsx");

var _IssueAdd2 = _interopRequireDefault(_IssueAdd);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@4.3.1@react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IssueRow = function IssueRow(props) {
    return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/issues/' + props.issue._id },
                props.issue._id
            )
        ),
        _react2.default.createElement(
            'td',
            null,
            props.issue.status
        ),
        _react2.default.createElement(
            'td',
            null,
            props.issue.owner
        ),
        _react2.default.createElement(
            'td',
            null,
            props.issue.created.toDateString()
        ),
        _react2.default.createElement(
            'td',
            null,
            props.issue.effort
        ),
        _react2.default.createElement(
            'td',
            null,
            props.issue.completionDate ? props.issue.completionDate.toDateString() : ''
        ),
        _react2.default.createElement(
            'td',
            null,
            props.issue.title
        )
    );
};

function IssueTable(props) {
    var issueRows = props.issues.map(function (issue) {
        return _react2.default.createElement(IssueRow, { key: issue._id, issue: issue });
    });
    return _react2.default.createElement(
        'table',
        { style: { border: '1px' } },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                    'td',
                    null,
                    'Id'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'status'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'owner'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'created'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'effort'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'completionDate'
                ),
                _react2.default.createElement(
                    'td',
                    null,
                    'Title'
                )
            )
        ),
        _react2.default.createElement(
            'tbody',
            null,
            issueRows
        )
    );
}

var IssueList = function (_React$Component) {
    _inherits(IssueList, _React$Component);

    function IssueList() {
        _classCallCheck(this, IssueList);

        var _this = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));

        var self = _this;
        self.state = { issues: [] };
        self.createIssue = self.createIssue.bind(self);
        return _this;
    }

    _createClass(IssueList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadData();
        }
    }, {
        key: 'loadData',
        value: function loadData() {
            var _this2 = this;

            fetch('/api/issues').then(function (response) {
                return response.json();
            }).then(function (rawData) {
                rawData._records.forEach(function (issue) {
                    issue.created = new Date(issue.created);
                    if (issue.completionDate) {
                        issue.completionDate = new Date(issue.completionDate);
                    }
                });
                _this2.setState({ issues: rawData._records });
            }).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: 'createIssue',
        value: function createIssue(formData) {
            var _this3 = this;

            var newIssue = {
                status: "New",
                owner: formData.owner,
                created: new Date(),
                effort: '',
                completionDate: undefined,
                title: formData.title
            };
            fetch('/api/issues', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newIssue)
            }).then(function (response) {
                if (response.ok) {
                    response.json().then(function (rawData) {
                        rawData.created = new Date(rawData.created);
                        if (rawData.completionDate) {
                            rawData.completionDate = new Date(issue.completionDate);
                        }
                        var newIssues = _this3.state.issues.concat(rawData);
                        _this3.setState({ issues: newIssues });
                    });
                } else {
                    response.json().then(function (error) {
                        console.log(error.message);
                    });
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var self = this;
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Issue Tracker'
                ),
                _react2.default.createElement(_IssueFilter2.default, null),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(IssueTable, { issues: self.state.issues }),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(_IssueAdd2.default, { createIssue: self.createIssue })
            );
        }
    }]);

    return IssueList;
}(_react2.default.Component);

var _default = IssueList;
exports.default = _default;
;

(function () {
    var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/_react-hot-loader@4.8.0@react-hot-loader/index.js")).default;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(IssueTable, 'IssueTable', 'D:/jason/study/question_react_node/src/IssueList.jsx');
    reactHotLoader.register(IssueList, 'IssueList', 'D:/jason/study/question_react_node/src/IssueList.jsx');
    reactHotLoader.register(IssueRow, 'IssueRow', 'D:/jason/study/question_react_node/src/IssueList.jsx');
    reactHotLoader.register(_default, 'default', 'D:/jason/study/question_react_node/src/IssueList.jsx');
})();

;

(function () {
    var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/_react-hot-loader@4.8.0@react-hot-loader/index.js")).leaveModule;
    leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/_webpack@4.29.6@webpack/buildin/module.js */ "./node_modules/_webpack@4.29.6@webpack/buildin/module.js")(module)))

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/App.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/App.jsx */"./src/App.jsx");


/***/ })

},[[0,"manifest","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvSXNzdWVBZGQuanN4Iiwid2VicGFjazovLy8uL3NyYy9Jc3N1ZUVkaXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9Jc3N1ZUZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0lzc3VlTGlzdC5qc3giXSwibmFtZXMiOlsibm9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJOb01hdGNoIiwiUm91dGVkQXBwIiwiSXNzdWVMaXN0IiwiSXNzdWVFZGl0IiwiUmVhY3RET00iLCJyZW5kZXIiLCJtb2R1bGUiLCJJc3N1ZUFkZCIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiZm9ybXMiLCJpc3N1ZUFkZCIsInByb3BzIiwiY3JlYXRlSXNzdWUiLCJvd25lciIsInZhbHVlIiwidGl0bGUiLCJzdGF0dXMiLCJjcmVhdGVkIiwiRGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibWF0Y2giLCJwYXJhbXMiLCJpZCIsIklzc3VlRmlsdGVyIiwiU2VwYXJhdG9yIiwicGF0aG5hbWUiLCJzZWFyY2giLCJJc3N1ZVJvdyIsImlzc3VlIiwiX2lkIiwidG9EYXRlU3RyaW5nIiwiZWZmb3J0IiwiY29tcGxldGlvbkRhdGUiLCJJc3N1ZVRhYmxlIiwiaXNzdWVSb3dzIiwiaXNzdWVzIiwibWFwIiwiYm9yZGVyIiwic2VsZiIsInN0YXRlIiwibG9hZERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyYXdEYXRhIiwiX3JlY29yZHMiLCJmb3JFYWNoIiwic2V0U3RhdGUiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJmb3JtRGF0YSIsIm5ld0lzc3VlIiwidW5kZWZpbmVkIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJuZXdJc3N1ZXMiLCJjb25jYXQiLCJlcnJv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QSw0QkFBSTZCLFFBQVFiLGNBQVosRUFBNEI7QUFDeEJhLG9DQUFRYixjQUFSLEdBQXlCLElBQUlmLElBQUosQ0FBU1csTUFBTUksY0FBZixDQUF6QjtBQUNIO0FBQ0QsNEJBQUk4QixZQUFZLE9BQUt2QixLQUFMLENBQVdKLE1BQVgsQ0FBa0I0QixNQUFsQixDQUF5QmxCLE9BQXpCLENBQWhCO0FBQ0EsK0JBQUtHLFFBQUwsQ0FBYyxFQUFFYixRQUFRMkIsU0FBVixFQUFkO0FBQ0gscUJBUEQ7QUFRSCxpQkFURCxNQVNPO0FBQ0huQiw2QkFBU0MsSUFBVCxHQUFnQkYsSUFBaEIsQ0FBcUIsaUJBQVM7QUFDMUJTLGdDQUFRQyxHQUFSLENBQVlZLE1BQU1DLE9BQWxCO0FBQ0gscUJBRkQ7QUFHSDtBQUNKLGFBbkJELEVBbUJHaEIsS0FuQkgsQ0FtQlMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RDLHdCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDSCxhQXJCRDtBQXNCSDs7O2lDQUVRO0FBQ0wsZ0JBQUlaLE9BQU8sSUFBWDtBQUNBLG1CQUFPO0FBQUE7QUFBQTtBQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREc7QUFFSCw4Q0FBQyxxQkFBRCxPQUZHO0FBR0gseURBSEc7QUFJRiw4Q0FBQyxVQUFELElBQVksUUFBUUEsS0FBS0MsS0FBTCxDQUFXSixNQUEvQixHQUpFO0FBS0gseURBTEc7QUFNSCw4Q0FBQyxrQkFBRCxJQUFVLGFBQWFHLEtBQUszQixXQUE1QjtBQU5HLGFBQVA7QUFRSDs7OztFQXRFa0NPLGdCQUFNQyxTOztlQUF4QnRCLFM7Ozs7Ozs7Ozs7OzRCQXBCWm9DLFU7NEJBb0JZcEMsUzs0QkFoQ2Y4QixRIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7IGhvdCB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXInXHJcbmltcG9ydCB7IEhhc2hSb3V0ZXIgYXMgUnVvdGVyLCBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCBJc3N1ZUxpc3QgZnJvbSBcIi4vSXNzdWVMaXN0LmpzeFwiO1xyXG5pbXBvcnQgSXNzdWVFZGl0IGZyb20gXCIuL0lzc3VlRWRpdC5qc3hcIjtcclxuXHJcbmNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpO1xyXG5jb25zdCBOb01hdGNoID0gKCkgPT4gPHA+UGFnZSBOb3QgRm91bmQuPC9wPlxyXG5cclxuY29uc3QgUm91dGVkQXBwID0gKCkgPT4ge1xyXG5cdHJldHVybiA8UnVvdGVyPlxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PFJlZGlyZWN0IGZyb209Jy8nIHRvPSdpc3N1ZXMnIC8+XHJcblx0XHRcdDxSb3V0ZSBwYXRoPVwiL2lzc3Vlc1wiIGNvbXBvbmVudD17SXNzdWVMaXN0fSAvPlxyXG5cdFx0XHQ8Um91dGUgcGF0aD1cIi9pc3N1ZXMvOmlkXCIgY29tcG9uZW50PXtJc3N1ZUVkaXR9IC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L1J1b3Rlcj5cclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG5cdDxSb3V0ZWRBcHAgLz4sXHJcblx0bm9kZVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG90KG1vZHVsZSkoSXNzdWVMaXN0KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgIGNsYXNzIElzc3VlQWRkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVTdWJtaXQoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0bGV0IGZvcm0gPSBkb2N1bWVudC5mb3Jtcy5pc3N1ZUFkZDtcclxuXHRcdHRoaXMucHJvcHMuY3JlYXRlSXNzdWUoe1xyXG5cdFx0XHRvd25lcjogZm9ybS5vd25lci52YWx1ZSxcclxuXHRcdFx0dGl0bGU6IGZvcm0udGl0bGUudmFsdWUsXHJcblx0XHRcdHN0YXR1czogJ05ldycsXHJcblx0XHRcdGNyZWF0ZWQ6IG5ldyBEYXRlKCksXHJcblx0XHR9KTtcclxuXHRcdGZvcm0ub3duZXIudmFsdWUgPSBcIlwiO1xyXG5cdFx0Zm9ybS50aXRsZS52YWx1ZSA9IFwiXCI7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gPGRpdj5cclxuXHRcdFx0PGZvcm0gbmFtZT0naXNzdWVBZGQnIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J293bmVyJyBwbGFjZWhvbGRlcj0nb3duZXInPjwvaW5wdXQ+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9J3RleHQnIG5hbWU9J3RpdGxlJyBwbGFjZWhvbGRlcj0ndGl0bGUnPjwvaW5wdXQ+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkFkZDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElzc3VlRWRpdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8cD50aGlzIGlzIGVkaXQgcGFnZS57dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWR9PC9wPlxyXG4gICAgICAgICAgICA8TGluayB0bz0nL2lzc3Vlcyc+QmFjayB0byBpc3N1ZXMgbGlzdD48L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElzc3VlRmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCBTZXBhcmF0b3I9KCk9PjxzcGFuPiB8IDwvc3Bhbj47XHJcblx0XHRyZXR1cm4gPGRpdj5cclxuXHRcdFx0PExpbmsgdG89Jy9Jc3N1ZXMnPkFsbCBJc3N1ZXM8L0xpbms+XHJcblx0XHRcdDxTZXBhcmF0b3IvPlxyXG5cdFx0XHQ8TGluayB0bz17e3BhdGhuYW1lOicvaXNzdWVzJyxzZWFyY2g6Jz9zdGF0dXM9T3Blbid9fT5PcGVuIElzc3VlczwvTGluaz5cclxuXHRcdFx0PFNlcGFyYXRvci8+XHJcblx0XHRcdDxMaW5rIHRvPXt7cGF0aG5hbWU6Jy9pc3N1ZXMnLHNlYXJjaDonP3N0YXR1cz1OZXcnfX0+TmV3IElzc3VlczwvTGluaz5cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnd2hhdHdnLWZldGNoJztcclxuaW1wb3J0IElzc3VlRmlsdGVyIGZyb20gXCIuL0lzc3VlRmlsdGVyLmpzeFwiO1xyXG5pbXBvcnQgSXNzdWVBZGQgZnJvbSBcIi4vSXNzdWVBZGQuanN4XCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBJc3N1ZVJvdyA9IChwcm9wcykgPT4gKFxyXG4gICAgPHRyPlxyXG4gICAgICAgIDx0ZCA+PExpbmsgdG89e2AvaXNzdWVzLyR7cHJvcHMuaXNzdWUuX2lkfWB9Pntwcm9wcy5pc3N1ZS5faWR9PC9MaW5rPjwvdGQ+XHJcbiAgICAgICAgPHRkID57cHJvcHMuaXNzdWUuc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgPHRkID57cHJvcHMuaXNzdWUub3duZXJ9PC90ZD5cclxuICAgICAgICA8dGQgPntwcm9wcy5pc3N1ZS5jcmVhdGVkLnRvRGF0ZVN0cmluZygpfTwvdGQ+XHJcbiAgICAgICAgPHRkID57cHJvcHMuaXNzdWUuZWZmb3J0fTwvdGQ+XHJcbiAgICAgICAgPHRkID57cHJvcHMuaXNzdWUuY29tcGxldGlvbkRhdGUgPyBwcm9wcy5pc3N1ZS5jb21wbGV0aW9uRGF0ZS50b0RhdGVTdHJpbmcoKSA6ICcnfTwvdGQ+XHJcbiAgICAgICAgPHRkID57cHJvcHMuaXNzdWUudGl0bGV9PC90ZD5cclxuICAgIDwvdHI+XHJcbik7XHJcblxyXG5mdW5jdGlvbiBJc3N1ZVRhYmxlKHByb3BzKSB7XHJcbiAgICBjb25zdCBpc3N1ZVJvd3MgPSBwcm9wcy5pc3N1ZXMubWFwKGlzc3VlID0+IDxJc3N1ZVJvdyBrZXk9e2lzc3VlLl9pZH0gaXNzdWU9e2lzc3VlfSAvPik7XHJcbiAgICByZXR1cm4gKDx0YWJsZSBzdHlsZT17eyBib3JkZXI6ICcxcHgnIH19PlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkID5JZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgPnN0YXR1czwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgPm93bmVyPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCA+Y3JlYXRlZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgPmVmZm9ydDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgPmNvbXBsZXRpb25EYXRlPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCA+VGl0bGU8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7aXNzdWVSb3dzfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElzc3VlTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLnN0YXRlID0geyBpc3N1ZXM6IFtdIH07XHJcbiAgICAgICAgc2VsZi5jcmVhdGVJc3N1ZSA9IHNlbGYuY3JlYXRlSXNzdWUuYmluZChzZWxmKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZERhdGEoKSB7XHJcbiAgICAgICAgZmV0Y2goJy9hcGkvaXNzdWVzJykudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpLnRoZW4oKHJhd0RhdGEpID0+IHtcclxuICAgICAgICAgICAgcmF3RGF0YS5fcmVjb3Jkcy5mb3JFYWNoKGlzc3VlID0+IHtcclxuICAgICAgICAgICAgICAgIGlzc3VlLmNyZWF0ZWQgPSBuZXcgRGF0ZShpc3N1ZS5jcmVhdGVkKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc3N1ZS5jb21wbGV0aW9uRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzc3VlLmNvbXBsZXRpb25EYXRlID0gbmV3IERhdGUoaXNzdWUuY29tcGxldGlvbkRhdGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzc3VlczogcmF3RGF0YS5fcmVjb3JkcyB9KVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVJc3N1ZShmb3JtRGF0YSkge1xyXG4gICAgICAgIGxldCBuZXdJc3N1ZSA9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzdGF0dXM6IFwiTmV3XCIsXHJcbiAgICAgICAgICAgIG93bmVyOiBmb3JtRGF0YS5vd25lcixcclxuICAgICAgICAgICAgY3JlYXRlZDogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgZWZmb3J0OiAnJyxcclxuICAgICAgICAgICAgY29tcGxldGlvbkRhdGU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGl0bGU6IGZvcm1EYXRhLnRpdGxlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmZXRjaCgnL2FwaS9pc3N1ZXMnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3SXNzdWUpXHJcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKHJhd0RhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByYXdEYXRhLmNyZWF0ZWQgPSBuZXcgRGF0ZShyYXdEYXRhLmNyZWF0ZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyYXdEYXRhLmNvbXBsZXRpb25EYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd0RhdGEuY29tcGxldGlvbkRhdGUgPSBuZXcgRGF0ZShpc3N1ZS5jb21wbGV0aW9uRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdJc3N1ZXMgPSB0aGlzLnN0YXRlLmlzc3Vlcy5jb25jYXQocmF3RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzc3VlczogbmV3SXNzdWVzIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+SXNzdWUgVHJhY2tlcjwvaDE+XHJcbiAgICAgICAgICAgIDxJc3N1ZUZpbHRlciAvPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgezxJc3N1ZVRhYmxlIGlzc3Vlcz17c2VsZi5zdGF0ZS5pc3N1ZXN9IC8+fVxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPElzc3VlQWRkIGNyZWF0ZUlzc3VlPXtzZWxmLmNyZWF0ZUlzc3VlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==