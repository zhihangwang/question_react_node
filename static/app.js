(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.8.4@react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/_react-dom@16.8.4@react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IssueList = __webpack_require__(/*! ./IssueList.jsx */ "./src/IssueList.jsx");

var _IssueList2 = _interopRequireDefault(_IssueList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var node = document.getElementById('example');
console.log(22);

_reactDom2.default.render(_react2.default.createElement(_IssueList2.default, null), node);

if (false) {}

/***/ }),

/***/ "./src/IssueAdd.jsx":
/*!**************************!*\
  !*** ./src/IssueAdd.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

exports.default = IssueAdd;

/***/ }),

/***/ "./src/IssueFilter.jsx":
/*!*****************************!*\
  !*** ./src/IssueFilter.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

exports.default = IssueFilter;

/***/ }),

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/_react@16.8.4@react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! whatwg-fetch */ "./node_modules/_whatwg-fetch@3.0.0@whatwg-fetch/fetch.js");

var _IssueFilter = __webpack_require__(/*! ./IssueFilter.jsx */ "./src/IssueFilter.jsx");

var _IssueFilter2 = _interopRequireDefault(_IssueFilter);

var _IssueAdd = __webpack_require__(/*! ./IssueAdd.jsx */ "./src/IssueAdd.jsx");

var _IssueAdd2 = _interopRequireDefault(_IssueAdd);

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
            props.issue._id
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
                console.log(rawData._records);
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

exports.default = IssueList;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvSXNzdWVBZGQuanN4Iiwid2VicGFjazovLy8uL3NyYy9Jc3N1ZUZpbHRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0lzc3VlTGlzdC5qc3giXSwibmFtZXMiOlsibm9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwiUmVhY3RET00iLCJyZW5kZXIiLCJtb2R1bGUiLCJJc3N1ZUFkZCIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiZm9ybXMiLCJpc3N1ZUFkZCIsInByb3BzIiwiY3JlYXRlSXNzdWUiLCJvd25lciIsInZhbHVlIiwidGl0bGUiLCJzdGF0dXMiLCJjcmVhdGVkIiwiRGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiSXNzdWVGaWx0ZXIiLCJJc3N1ZVJvdyIsImlzc3VlIiwiX2lkIiwidG9EYXRlU3RyaW5nIiwiZWZmb3J0IiwiY29tcGxldGlvbkRhdGUiLCJJc3N1ZVRhYmxlIiwiaXNzdWVSb3dzIiwiaXNzdWVzIiwibWFwIiwiYm9yZGVyIiwiSXNzdWVMaXN0Iiwic2VsZiIsInN0YXRlIiwibG9hZERhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyYXdEYXRhIiwiX3JlY29yZHMiLCJmb3JFYWNoIiwic2V0U3RhdGUiLCJjYXRjaCIsImVyciIsImZvcm1EYXRhIiwibmV3SXNzdWUiLCJ1bmRlZmluZWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIm5ld0lzc3VlcyIsImNvbmNhdCIsImVycm9yIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUM7Ozs7QUFDQTs7OztBQUNEOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxTQUFTQyxjQUFULENBQXdCLFNBQXhCLENBQWI7QUFDQUMsUUFBUUMs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LENBbUJTLFVBQUNDLEdBQUQsRUFBUztBQUNkaEQsd0JBQVFDLEdBQVIsQ0FBWStDLEdBQVo7QUFDSCxhQXJCRDtBQXNCSDs7O2lDQUVRO0FBQ0wsZ0JBQUlaLE9BQU8sSUFBWDtBQUNBLG1CQUFPO0FBQUE7QUFBQTtBQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREc7QUFFSCw4Q0FBQyxxQkFBRCxPQUZHO0FBR0gseURBSEc7QUFJRiw4Q0FBQyxVQUFELElBQVksUUFBUUEsS0FBS0MsS0FBTCxDQUFXTCxNQUEvQixHQUpFO0FBS0gseURBTEc7QUFNSCw4Q0FBQyxrQkFBRCxJQUFVLGFBQWFJLEtBQUt0QixXQUE1QjtBQU5HLGFBQVA7QUFRSDs7OztFQXZFa0NPLGdCQUFNQyxTOztrQkFBeEJhLFMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbiBpbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgIElzc3VlTGlzdCAgZnJvbSBcIi4vSXNzdWVMaXN0LmpzeFwiO1xyXG5cclxuY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJyk7XHJcbmNvbnNvbGUubG9nKDIyKVxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG5cdDxJc3N1ZUxpc3QgLz4sXHJcblx0bm9kZVxyXG4pO1xyXG5cclxuaWYobW9kdWxlLmhvdCl7XHJcblx0bW9kdWxlLmhvdC5hY2NlcHQoKTtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAgY2xhc3MgSXNzdWVBZGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVN1Ym1pdChlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRsZXQgZm9ybSA9IGRvY3VtZW50LmZvcm1zLmlzc3VlQWRkO1xyXG5cdFx0dGhpcy5wcm9wcy5jcmVhdGVJc3N1ZSh7XHJcblx0XHRcdG93bmVyOiBmb3JtLm93bmVyLnZhbHVlLFxyXG5cdFx0XHR0aXRsZTogZm9ybS50aXRsZS52YWx1ZSxcclxuXHRcdFx0c3RhdHVzOiAnTmV3JyxcclxuXHRcdFx0Y3JlYXRlZDogbmV3IERhdGUoKSxcclxuXHRcdH0pO1xyXG5cdFx0Zm9ybS5vd25lci52YWx1ZSA9IFwiXCI7XHJcblx0XHRmb3JtLnRpdGxlLnZhbHVlID0gXCJcIjtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiA8ZGl2PlxyXG5cdFx0XHQ8Zm9ybSBuYW1lPSdpc3N1ZUFkZCcgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0nb3duZXInIHBsYWNlaG9sZGVyPSdvd25lcic+PC9pbnB1dD5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT0ndGV4dCcgbmFtZT0ndGl0bGUnIHBsYWNlaG9sZGVyPSd0aXRsZSc+PC9pbnB1dD5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+QWRkPC9idXR0b24+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXNzdWVGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiA8ZGl2PkZpbHRlcjwvZGl2PlxyXG5cdH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnd2hhdHdnLWZldGNoJztcclxuaW1wb3J0IElzc3VlRmlsdGVyIGZyb20gXCIuL0lzc3VlRmlsdGVyLmpzeFwiO1xyXG5pbXBvcnQgSXNzdWVBZGQgZnJvbSBcIi4vSXNzdWVBZGQuanN4XCI7XHJcblxyXG5jb25zdCBJc3N1ZVJvdyA9IChwcm9wcykgPT4gKFxyXG4gICAgPHRyPlxyXG4gICAgICAgIDx0ZCA+e3Byb3BzLmlzc3VlLl9pZH08L3RkPlxyXG4gICAgICAgIDx0ZCA+e3Byb3BzLmlzc3VlLnN0YXR1c308L3RkPlxyXG4gICAgICAgIDx0ZCA+e3Byb3BzLmlzc3VlLm93bmVyfTwvdGQ+XHJcbiAgICAgICAgPHRkID57cHJvcHMuaXNzdWUuY3JlYXRlZC50b0RhdGVTdHJpbmcoKX08L3RkPlxyXG4gICAgICAgIDx0ZCA+e3Byb3BzLmlzc3VlLmVmZm9ydH08L3RkPlxyXG4gICAgICAgIDx0ZCA+e3Byb3BzLmlzc3VlLmNvbXBsZXRpb25EYXRlID8gcHJvcHMuaXNzdWUuY29tcGxldGlvbkRhdGUudG9EYXRlU3RyaW5nKCkgOiAnJ308L3RkPlxyXG4gICAgICAgIDx0ZCA+e3Byb3BzLmlzc3VlLnRpdGxlfTwvdGQ+XHJcbiAgICA8L3RyPlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gSXNzdWVUYWJsZShwcm9wcykge1xyXG4gICAgY29uc3QgaXNzdWVSb3dzID0gcHJvcHMuaXNzdWVzLm1hcChpc3N1ZSA9PiA8SXNzdWVSb3cga2V5PXtpc3N1ZS5faWR9IGlzc3VlPXtpc3N1ZX0gLz4pO1xyXG4gICAgcmV0dXJuICg8dGFibGUgc3R5bGU9e3sgYm9yZGVyOiAnMXB4JyB9fT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCA+SWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkID5zdGF0dXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkID5vd25lcjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgPmNyZWF0ZWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkID5lZmZvcnQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkID5jb21wbGV0aW9uRGF0ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgPlRpdGxlPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAge2lzc3VlUm93c31cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT4pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJc3N1ZUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5zdGF0ZSA9IHsgaXNzdWVzOiBbXSB9O1xyXG4gICAgICAgIHNlbGYuY3JlYXRlSXNzdWUgPSBzZWxmLmNyZWF0ZUlzc3VlLmJpbmQoc2VsZik7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWREYXRhKCkge1xyXG4gICAgICAgIGZldGNoKCcvYXBpL2lzc3VlcycpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKChyYXdEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJhd0RhdGEuX3JlY29yZHMuZm9yRWFjaChpc3N1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpc3N1ZS5jcmVhdGVkID0gbmV3IERhdGUoaXNzdWUuY3JlYXRlZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNzdWUuY29tcGxldGlvbkRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc3N1ZS5jb21wbGV0aW9uRGF0ZSA9IG5ldyBEYXRlKGlzc3VlLmNvbXBsZXRpb25EYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJhd0RhdGEuX3JlY29yZHMpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNzdWVzOiByYXdEYXRhLl9yZWNvcmRzIH0pXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUlzc3VlKGZvcm1EYXRhKSB7XHJcbiAgICAgICAgbGV0IG5ld0lzc3VlID1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0YXR1czogXCJOZXdcIixcclxuICAgICAgICAgICAgb3duZXI6IGZvcm1EYXRhLm93bmVyLFxyXG4gICAgICAgICAgICBjcmVhdGVkOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICBlZmZvcnQ6ICcnLFxyXG4gICAgICAgICAgICBjb21wbGV0aW9uRGF0ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0aXRsZTogZm9ybURhdGEudGl0bGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZldGNoKCcvYXBpL2lzc3VlcycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdJc3N1ZSlcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbigocmF3RGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhd0RhdGEuY3JlYXRlZCA9IG5ldyBEYXRlKHJhd0RhdGEuY3JlYXRlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhd0RhdGEuY29tcGxldGlvbkRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3RGF0YS5jb21wbGV0aW9uRGF0ZSA9IG5ldyBEYXRlKGlzc3VlLmNvbXBsZXRpb25EYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0lzc3VlcyA9IHRoaXMuc3RhdGUuaXNzdWVzLmNvbmNhdChyYXdEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNzdWVzOiBuZXdJc3N1ZXMgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5Jc3N1ZSBUcmFja2VyPC9oMT5cclxuICAgICAgICAgICAgPElzc3VlRmlsdGVyIC8+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICB7PElzc3VlVGFibGUgaXNzdWVzPXtzZWxmLnN0YXRlLmlzc3Vlc30gLz59XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8SXNzdWVBZGQgY3JlYXRlSXNzdWU9e3NlbGYuY3JlYXRlSXNzdWV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9