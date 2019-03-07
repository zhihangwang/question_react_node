/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _IssueAdd = __webpack_require__(1);

var _IssueAdd2 = _interopRequireDefault(_IssueAdd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var node = document.getElementById('example');

var IssueFilter = function (_React$Component) {
	_inherits(IssueFilter, _React$Component);

	function IssueFilter() {
		_classCallCheck(this, IssueFilter);

		return _possibleConstructorReturn(this, (IssueFilter.__proto__ || Object.getPrototypeOf(IssueFilter)).apply(this, arguments));
	}

	_createClass(IssueFilter, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				'Filter'
			);
		}
	}]);

	return IssueFilter;
}(React.Component);

var IssueRow = function IssueRow(props) {
	return React.createElement(
		'tr',
		null,
		React.createElement(
			'td',
			null,
			props.issue._id
		),
		React.createElement(
			'td',
			null,
			props.issue.status
		),
		React.createElement(
			'td',
			null,
			props.issue.owner
		),
		React.createElement(
			'td',
			null,
			props.issue.created.toDateString()
		),
		React.createElement(
			'td',
			null,
			props.issue.effort
		),
		React.createElement(
			'td',
			null,
			props.issue.completionDate ? props.issue.completionDate.toDateString() : ''
		),
		React.createElement(
			'td',
			null,
			props.issue.title
		)
	);
};

function IssueTable(props) {
	var issueRows = props.issues.map(function (issue) {
		return React.createElement(IssueRow, { key: issue._id, issue: issue });
	});
	return React.createElement(
		'table',
		{ style: { border: '1px' } },
		React.createElement(
			'thead',
			null,
			React.createElement(
				'tr',
				null,
				React.createElement(
					'td',
					null,
					'Id'
				),
				React.createElement(
					'td',
					null,
					'status'
				),
				React.createElement(
					'td',
					null,
					'owner'
				),
				React.createElement(
					'td',
					null,
					'created'
				),
				React.createElement(
					'td',
					null,
					'effort'
				),
				React.createElement(
					'td',
					null,
					'completionDate'
				),
				React.createElement(
					'td',
					null,
					'Title'
				)
			)
		),
		React.createElement(
			'tbody',
			null,
			issueRows
		)
	);
}

var IssueList = function (_React$Component2) {
	_inherits(IssueList, _React$Component2);

	function IssueList() {
		_classCallCheck(this, IssueList);

		var _this2 = _possibleConstructorReturn(this, (IssueList.__proto__ || Object.getPrototypeOf(IssueList)).call(this));

		var self = _this2;
		self.state = { issues: [] };
		self.createIssue = self.createIssue.bind(self);
		return _this2;
	}

	_createClass(IssueList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.loadData();
		}
	}, {
		key: 'loadData',
		value: function loadData() {
			var _this3 = this;

			fetch('/api/issues').then(function (response) {
				return response.json();
			}).then(function (rawData) {
				rawData._records.forEach(function (issue) {
					issue.created = new Date(issue.created);
					if (issue.completionDate) {
						issue.completionDate = new Date(issue.completionDate);
					}
				});
				console.log(rawData._records);
				_this3.setState({ issues: rawData._records });
			}).catch(function (err) {
				console.log(err);
			});
		}
	}, {
		key: 'createIssue',
		value: function createIssue(formData) {
			var _this4 = this;

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
						var newIssues = _this4.state.issues.concat(rawData);
						_this4.setState({ issues: newIssues });
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
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Issue Tracker'
				),
				React.createElement(IssueFilter, null),
				React.createElement('hr', null),
				React.createElement(IssueTable, { issues: self.state.issues }),
				React.createElement('hr', null),
				React.createElement(IssueAdd, { createIssue: self.createIssue })
			);
		}
	}]);

	return IssueList;
}(React.Component);

ReactDOM.render(React.createElement(IssueList, null), node);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
		key: "handleSubmit",
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
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"form",
					{ name: "issueAdd", onSubmit: this.handleSubmit },
					React.createElement("input", { type: "text", name: "owner", placeholder: "owner" }),
					React.createElement("input", { type: "text", name: "title", placeholder: "title" }),
					React.createElement(
						"button",
						{ type: "submit" },
						"Add"
					)
				)
			);
		}
	}]);

	return IssueAdd;
}(React.Component);

exports.default = IssueAdd;

/***/ })
/******/ ]);