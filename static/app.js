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

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.8.4@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/_react-dom@16.8.4@react-dom/index.js");

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
		_reactRouterDom.BrowserRouter,
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

	reactHotLoader.register(node, 'node', 'E:/react/question_react_node/src/App.jsx');
	reactHotLoader.register(NoMatch, 'NoMatch', 'E:/react/question_react_node/src/App.jsx');
	reactHotLoader.register(RoutedApp, 'RoutedApp', 'E:/react/question_react_node/src/App.jsx');
	reactHotLoader.register(_default, 'default', 'E:/react/question_react_node/src/App.jsx');
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

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.8.4@react/index.js");

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

	reactHotLoader.register(IssueAdd, 'IssueAdd', 'E:/react/question_react_node/src/IssueAdd.jsx');
	reactHotLoader.register(_default, 'default', 'E:/react/question_react_node/src/IssueAdd.jsx');
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

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.8.4@react/index.js");

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
                    console.log(this.props.match.params),
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

    reactHotLoader.register(IssueEdit, 'IssueEdit', 'E:/react/question_react_node/src/IssueEdit.jsx');
    reactHotLoader.register(_default, 'default', 'E:/react/question_react_node/src/IssueEdit.jsx');
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

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.8.4@react/index.js");

var _react2 = _interopRequireDefault(_react);

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
			return _react2.default.createElement(
				'div',
				null,
				'Filter'
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

	reactHotLoader.register(IssueFilter, 'IssueFilter', 'E:/react/question_react_node/src/IssueFilter.jsx');
	reactHotLoader.register(_default, 'default', 'E:/react/question_react_node/src/IssueFilter.jsx');
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

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.8.4@react/index.js");

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

    reactHotLoader.register(IssueTable, 'IssueTable', 'E:/react/question_react_node/src/IssueList.jsx');
    reactHotLoader.register(IssueList, 'IssueList', 'E:/react/question_react_node/src/IssueList.jsx');
    reactHotLoader.register(IssueRow, 'IssueRow', 'E:/react/question_react_node/src/IssueList.jsx');
    reactHotLoader.register(_default, 'default', 'E:/react/question_react_node/src/IssueList.jsx');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvSXNzdWVBZGQuanN4Iiwid2VicGFjazovLy8uL3NyYy9Jc3N1ZUVkaXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9Jc3N1ZUZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0lzc3VlTGlzdC5qc3giXSwibmFtZXMiOlsibm9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJOb01hdGNoIiwiUm91dGVkQXBwIiwiSXNzdWVMaXN0IiwiSXNzdWVFZGl0IiwiUmVhY3RET00iLCJyZW5kZXIiLCJtb2R1bGUiLCJJc3N1ZUFkZCIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiZm9ybXMiLCJpc3N1ZUFkZCIsInByb3BzIiwiY3JlYXRlSXNzdWUiLCJvd25lciIsInZhbHVlIiwidGl0bGUiLCJzdGF0dXMiLCJjcmVhdGVkIiwiRGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc29sZSIsImxvZyIsIm1hdGNoIiwicGFyYW1zIiwiaWQiLCJJc3N1ZUZpbHRlciIsIklzc3VlUm93IiwiaXNzdWUiLCJfaWQiLCJ0b0RhdGVTdHJpbmciLCJlZmZvcnQiLCJjb21wbGV0aW9uRGF0ZSIsIklzc3VlVGFibGUiLCJpc3N1ZVJvd3MiLCJpc3N1ZXMiLCJtYXAiLCJib3JkZXIiLCJzZWxmIiwic3RhdGUiLCJsb2FkRGF0YSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJhd0RhdGEiLCJfcmVjb3JkcyIsImZvckVhY2giLCJzZXRTdGF0ZSIsImNhdGNoIiwiZXJyIiwiZm9ybURhdGEiLCJuZXdJc3N1ZSIsInVuZGVmaW5lZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwibmV3SXNzdWVzIiwiY29uY2F0IiwiZXJyb3IiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7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R0FBUixDQUFZd0MsTUFBTUMsT0FBbEI7QUFDSCxxQkFGRDtBQUdIO0FBQ0osYUFuQkQsRUFtQkdkLEtBbkJILENBbUJTLFVBQUNDLEdBQUQsRUFBUztBQUNkN0Isd0JBQVFDLEdBQVIsQ0FBWTRCLEdBQVo7QUFDSCxhQXJCRDtBQXNCSDs7O2lDQUVRO0FBQ0wsZ0JBQUlaLE9BQU8sSUFBWDtBQUNBLG1CQUFPO0FBQUE7QUFBQTtBQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREc7QUFFSCw4Q0FBQyxxQkFBRCxPQUZHO0FBR0gseURBSEc7QUFJRiw4Q0FBQyxVQUFELElBQVksUUFBUUEsS0FBS0MsS0FBTCxDQUFXSixNQUEvQixHQUpFO0FBS0gseURBTEc7QUFNSCw4Q0FBQyxrQkFBRCxJQUFVLGFBQWFHLEtBQUsxQixXQUE1QjtBQU5HLGFBQVA7QUFRSDs7OztFQXRFa0NPLGdCQUFNQyxTOztlQUF4QnRCLFM7Ozs7Ozs7Ozs7OzRCQXBCWm1DLFU7NEJBb0JZbkMsUzs0QkFoQ2Y2QixRIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7IGhvdCB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXInXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSAsUmVkaXJlY3R9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IElzc3VlTGlzdCBmcm9tIFwiLi9Jc3N1ZUxpc3QuanN4XCI7XHJcbmltcG9ydCBJc3N1ZUVkaXQgZnJvbSBcIi4vSXNzdWVFZGl0LmpzeFwiO1xyXG5cclxuY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJyk7XHJcbmNvbnN0IE5vTWF0Y2ggPSAoKSA9PiA8cD5QYWdlIE5vdCBGb3VuZC48L3A+XHJcblxyXG5jb25zdCBSb3V0ZWRBcHAgPSAoKSA9PiB7XHJcblx0cmV0dXJuIDxSb3V0ZXIgPlxyXG5cdFx0PGRpdj5cdFxyXG5cdFx0XHQ8UmVkaXJlY3QgZnJvbT0nLycgdG89J2lzc3VlcycvPlxyXG5cdFx0XHQ8Um91dGUgcGF0aD1cIi9pc3N1ZXNcIiBjb21wb25lbnQ9e0lzc3VlTGlzdH0gLz5cclxuXHRcdFx0PFJvdXRlIHBhdGg9XCIvaXNzdWVzLzppZFwiIGNvbXBvbmVudD17SXNzdWVFZGl0fSAvPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9Sb3V0ZXI+XHJcbn1cclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuXHQ8Um91dGVkQXBwIC8+LFxyXG5cdG5vZGVcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvdChtb2R1bGUpKElzc3VlTGlzdCk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICBjbGFzcyBJc3N1ZUFkZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlU3VibWl0KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCBmb3JtID0gZG9jdW1lbnQuZm9ybXMuaXNzdWVBZGQ7XHJcblx0XHR0aGlzLnByb3BzLmNyZWF0ZUlzc3VlKHtcclxuXHRcdFx0b3duZXI6IGZvcm0ub3duZXIudmFsdWUsXHJcblx0XHRcdHRpdGxlOiBmb3JtLnRpdGxlLnZhbHVlLFxyXG5cdFx0XHRzdGF0dXM6ICdOZXcnLFxyXG5cdFx0XHRjcmVhdGVkOiBuZXcgRGF0ZSgpLFxyXG5cdFx0fSk7XHJcblx0XHRmb3JtLm93bmVyLnZhbHVlID0gXCJcIjtcclxuXHRcdGZvcm0udGl0bGUudmFsdWUgPSBcIlwiO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIDxkaXY+XHJcblx0XHRcdDxmb3JtIG5hbWU9J2lzc3VlQWRkJyBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSdvd25lcicgcGxhY2Vob2xkZXI9J293bmVyJz48L2lucHV0PlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSd0aXRsZScgcGxhY2Vob2xkZXI9J3RpdGxlJz48L2lucHV0PlxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT0nc3VibWl0Jz5BZGQ8L2J1dHRvbj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJc3N1ZUVkaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPHA+dGhpcyBpcyBlZGl0IHBhZ2Uue2NvbnNvbGUubG9nKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zKX17dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWR9PC9wPlxyXG4gICAgICAgICAgICA8TGluayB0bz0nL2lzc3Vlcyc+QmFjayB0byBpc3N1ZXMgbGlzdD48L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElzc3VlRmlsdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gPGRpdj5GaWx0ZXI8L2Rpdj5cclxuXHR9XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ3doYXR3Zy1mZXRjaCc7XHJcbmltcG9ydCBJc3N1ZUZpbHRlciBmcm9tIFwiLi9Jc3N1ZUZpbHRlci5qc3hcIjtcclxuaW1wb3J0IElzc3VlQWRkIGZyb20gXCIuL0lzc3VlQWRkLmpzeFwiO1xyXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgSXNzdWVSb3cgPSAocHJvcHMpID0+IChcclxuICAgIDx0cj5cclxuICAgICAgICA8dGQgPjxMaW5rIHRvPXtgL2lzc3Vlcy8ke3Byb3BzLmlzc3VlLl9pZH1gfT57cHJvcHMuaXNzdWUuX2lkfTwvTGluaz48L3RkPlxyXG4gICAgICAgIDx0ZCA+e3Byb3BzLmlzc3VlLnN0YXR1c308L3RkPlxyXG4gICAgICAgIDx0ZCA+e3Byb3BzLmlzc3VlLm93bmVyfTwvdGQ+XHJcbiAgICAgICAgPHRkID57cHJvcHMuaXNzdWUuY3JlYXRlZC50b0RhdGVTdHJpbmcoKX08L3RkPlxyXG4gICAgICAgIDx0ZCA+e3Byb3BzLmlzc3VlLmVmZm9ydH08L3RkPlxyXG4gICAgICAgIDx0ZCA+e3Byb3BzLmlzc3VlLmNvbXBsZXRpb25EYXRlID8gcHJvcHMuaXNzdWUuY29tcGxldGlvbkRhdGUudG9EYXRlU3RyaW5nKCkgOiAnJ308L3RkPlxyXG4gICAgICAgIDx0ZCA+e3Byb3BzLmlzc3VlLnRpdGxlfTwvdGQ+XHJcbiAgICA8L3RyPlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gSXNzdWVUYWJsZShwcm9wcykge1xyXG4gICAgY29uc3QgaXNzdWVSb3dzID0gcHJvcHMuaXNzdWVzLm1hcChpc3N1ZSA9PiA8SXNzdWVSb3cga2V5PXtpc3N1ZS5faWR9IGlzc3VlPXtpc3N1ZX0gLz4pO1xyXG4gICAgcmV0dXJuICg8dGFibGUgc3R5bGU9e3sgYm9yZGVyOiAnMXB4JyB9fT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCA+SWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkID5zdGF0dXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkID5vd25lcjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgPmNyZWF0ZWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkID5lZmZvcnQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkID5jb21wbGV0aW9uRGF0ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgPlRpdGxlPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge2lzc3VlUm93c31cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJc3N1ZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5zdGF0ZSA9IHsgaXNzdWVzOiBbXSB9O1xyXG4gICAgICAgIHNlbGYuY3JlYXRlSXNzdWUgPSBzZWxmLmNyZWF0ZUlzc3VlLmJpbmQoc2VsZik7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWREYXRhKCkge1xyXG4gICAgICAgIGZldGNoKCcvYXBpL2lzc3VlcycpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKChyYXdEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJhd0RhdGEuX3JlY29yZHMuZm9yRWFjaChpc3N1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpc3N1ZS5jcmVhdGVkID0gbmV3IERhdGUoaXNzdWUuY3JlYXRlZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNzdWUuY29tcGxldGlvbkRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc3N1ZS5jb21wbGV0aW9uRGF0ZSA9IG5ldyBEYXRlKGlzc3VlLmNvbXBsZXRpb25EYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc3N1ZXM6IHJhd0RhdGEuX3JlY29yZHMgfSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSXNzdWUoZm9ybURhdGEpIHtcclxuICAgICAgICBsZXQgbmV3SXNzdWUgPVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdHVzOiBcIk5ld1wiLFxyXG4gICAgICAgICAgICBvd25lcjogZm9ybURhdGEub3duZXIsXHJcbiAgICAgICAgICAgIGNyZWF0ZWQ6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIGVmZm9ydDogJycsXHJcbiAgICAgICAgICAgIGNvbXBsZXRpb25EYXRlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRpdGxlOiBmb3JtRGF0YS50aXRsZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmV0Y2goJy9hcGkvaXNzdWVzJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0lzc3VlKVxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKChyYXdEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmF3RGF0YS5jcmVhdGVkID0gbmV3IERhdGUocmF3RGF0YS5jcmVhdGVkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmF3RGF0YS5jb21wbGV0aW9uRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdEYXRhLmNvbXBsZXRpb25EYXRlID0gbmV3IERhdGUoaXNzdWUuY29tcGxldGlvbkRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SXNzdWVzID0gdGhpcy5zdGF0ZS5pc3N1ZXMuY29uY2F0KHJhd0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc3N1ZXM6IG5ld0lzc3VlcyB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICAgICAgPGgxPklzc3VlIFRyYWNrZXI8L2gxPlxyXG4gICAgICAgICAgICA8SXNzdWVGaWx0ZXIgLz5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIHs8SXNzdWVUYWJsZSBpc3N1ZXM9e3NlbGYuc3RhdGUuaXNzdWVzfSAvPn1cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxJc3N1ZUFkZCBjcmVhdGVJc3N1ZT17c2VsZi5jcmVhdGVJc3N1ZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=